import React, { FC, useEffect, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { RouterEnum, RouterPathsEnum, TagsEnum } from '../../constants'
import { selectTodosState, TodosState } from '../../store/todos/todosSlice'
import { getCurrentList } from '../../utils'
import ListComponent from '../List'
import { listType } from '../List/types'
import Overlay from '../Overlay'
import TodoForm from '../TodoForm'
import { badge } from '../ui/Badge/types'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Tag from '../ui/Tag'
import Typography from '../ui/Typography'
import './Todo.css'

interface TodoProps {}

const Todo: FC<TodoProps & WithTranslation> = ({ t }) => {
  const [isTodoFormOpened, setTodoFormOpened] = useState<boolean>(false)
  const [isSiderMenuOpened, setSiderMenuOpened] = useState<boolean>(false) // Mobile only
  const [isListDisabled, setListDisabled] = useState<boolean>(false)
  const [isTagsDisabled, setTagsDisabled] = useState<boolean>(true)
  const [activeTags, setActiveTags] = useState<badge[]>([])

  const location = useLocation()
  const { todos } = useSelector(selectTodosState)
  const [currentList, setCurrentList] = useState<listType>(
    getCurrentList(location.pathname),
  )
  const [itemList, setItemList] = useState<TodosState>(todos)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    setCurrentList(getCurrentList(location.pathname))
  }, [location.pathname])

  const resetItemList = () => {
    setItemList(todos)
  }

  useEffect(() => {
    if (!activeTags.length) resetItemList()
    else
      setItemList(() => {
        const newList = todos[currentList].items.filter((value) => {
          return !!value.badges.filter((badge) => {
            return activeTags.includes(badge)
          }).length
        })
        return {
          ...todos,
          [currentList]: {
            ...todos[currentList],
            items: newList,
          },
        }
      })
  }, [activeTags])

  const setMenu = (value: boolean) => {
    setTagsDisabled(value)
    setListDisabled(value)
  }

  const isTagActive = (tag: badge, array: badge[] = []): boolean => {
    return !!array.filter((item) => {
      return item === tag
    }).length
  }

  const toggleTag = (tag: badge) => {
    return () => {
      const array = [...activeTags]
      const index = array.indexOf(tag)

      if (index !== -1) array.splice(index, 1)
      else array.push(tag)
      setActiveTags(array)
    }
  }

  useEffect(() => {
    setMenu(false)
    setItemList(todos)
  }, [todos, search])

  const onSearchHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!search) {
      setMenu(false)
      resetItemList()
      return
    }
    const filtered = itemList[currentList].items
      .filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
      })
      .map((item) => {
        const newItem = { ...item }
        newItem.title = item.title.replaceAll(search, `<b>${search}</b>`)
        return newItem
      })
    setMenu(true)
    setItemList((prev) => {
      return {
        ...prev,
        [currentList]: {
          ...prev[currentList],
          items: filtered,
        },
      }
    })
  }

  const openTodoForm = () => {
    setTodoFormOpened(true)
  }
  const closeTodoForm = () => {
    setTodoFormOpened(false)
  }

  const openSiderMenu = () => {
    setSiderMenuOpened(true)
  }
  const closeSiderMenu = () => {
    setSiderMenuOpened(false)
  }

  return (
    <div className='todo'>
      <div className='todo__wrapper'>
        <div className={`todo-sider ${isSiderMenuOpened && '--open'}`}>
          <div className='todo-sider__wrapper'>
            <div className='todo-header'>
              <Button onClick={openTodoForm} className='--desktop'>
                {t('newTodo')}
              </Button>
              <div
                className='todo-header__button --invisible'
                onClick={closeSiderMenu}
              >
                <Icon type='cross' size='large'></Icon>
              </div>
            </div>
            <ul className='todo-menu'>
              <li>
                <NavLink
                  end
                  to={RouterPathsEnum.MY_TASKS}
                  className={`todo-menu__item-link ${
                    isListDisabled ? '--disabled' : ''
                  }`}
                >
                  <Icon type='mail' className='todo-menu__item-icon' />
                  <span>{t(RouterEnum.MY_TASKS)}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.IMPORTANT}
                  className={`todo-menu__item-link ${
                    isListDisabled ? '--disabled' : ''
                  }`}
                >
                  <Icon type='star' className='todo-menu__item-icon' />
                  <span>{t(RouterEnum.IMPORTANT)}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.COMPLETED}
                  className={`todo-menu__item-link ${
                    isListDisabled ? '--disabled' : ''
                  }`}
                >
                  <Icon type='check' className='todo-menu__item-icon' />
                  <span>{t(RouterEnum.COMPLETED)}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.DELETED}
                  className={`todo-menu__item-link ${
                    isListDisabled ? '--disabled' : ''
                  }`}
                >
                  <Icon type='bucket' className='todo-menu__item-icon' />
                  <span>{t(RouterEnum.DELETED)}</span>
                </NavLink>
              </li>
            </ul>
            <div className='todo-footer'>
              <Typography type='small text'>{t('tags')}</Typography>
              <ul className='todo-tags'>
                <li>
                  <Tag
                    isActive={isTagActive(TagsEnum.PRODUCTIVITY, activeTags)}
                    isDisabled={isTagsDisabled}
                    onClickHandler={toggleTag(TagsEnum.PRODUCTIVITY)}
                  >
                    {t(TagsEnum.PRODUCTIVITY)}
                  </Tag>
                </li>
                <li>
                  <Tag
                    isActive={isTagActive(TagsEnum.EDUCATION, activeTags)}
                    type='success'
                    isDisabled={isTagsDisabled}
                    onClickHandler={toggleTag(TagsEnum.EDUCATION)}
                  >
                    {t(TagsEnum.EDUCATION)}
                  </Tag>
                </li>
                <li>
                  <Tag
                    isActive={isTagActive(TagsEnum.HEALTH, activeTags)}
                    type='warning'
                    isDisabled={isTagsDisabled}
                    onClickHandler={toggleTag(TagsEnum.HEALTH)}
                  >
                    {t(TagsEnum.HEALTH)}
                  </Tag>
                </li>
                <li>
                  <Tag
                    isActive={isTagActive(TagsEnum.URGENT, activeTags)}
                    type='danger'
                    isDisabled={isTagsDisabled}
                    onClickHandler={toggleTag(TagsEnum.URGENT)}
                  >
                    {t(TagsEnum.URGENT)}
                  </Tag>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='todo-body'>
          <div className='todo-body__wrapper'>
            <form className='todo-search'>
              <button className='todo-search__button' onClick={onSearchHandler}>
                <Icon type='search' />
              </button>
              <Input
                theme='ghost'
                placeholder={t('search')}
                value={search}
                onChangeHandler={(e) => {
                  setSearch(e.target.value)
                }}
              />
              <Button
                onClick={openTodoForm}
                className='todo-search__button --mobile'
              >
                +
              </Button>
              <Button
                onClick={openSiderMenu}
                className='todo-search__button --mobile'
                theme='ghost'
              >
                =
              </Button>
            </form>
            <div className='todo-list'>
              <Routes>
                <Route
                  path={RouterPathsEnum.MY_TASKS}
                  element={
                    <ListComponent
                      title={t('myTodos')}
                      data={itemList.current}
                    />
                  }
                />
                <Route
                  path={RouterPathsEnum.IMPORTANT}
                  element={
                    <ListComponent
                      title={t('myTodos')}
                      data={itemList.current}
                      isImportant={true}
                    />
                  }
                />
                <Route
                  path={RouterPathsEnum.COMPLETED}
                  element={
                    <ListComponent
                      title={t('myTodos')}
                      data={itemList.completed}
                    />
                  }
                />
                <Route
                  path={RouterPathsEnum.DELETED}
                  element={
                    <ListComponent
                      title={t('myTodos')}
                      data={itemList.deleted}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      {isTodoFormOpened && <TodoForm closeHandler={closeTodoForm} />}
      {(isTodoFormOpened || isSiderMenuOpened) && (
        <Overlay
          onClick={() => {
            closeTodoForm()
            closeSiderMenu()
          }}
        />
      )}
    </div>
  )
}

export default withTranslation()(Todo)
