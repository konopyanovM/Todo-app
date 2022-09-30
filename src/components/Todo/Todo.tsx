import { FC, useEffect, useState } from 'react'
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

  const location = useLocation()
  const { todos } = useSelector(selectTodosState)
  const [currentList, setCurrentList] = useState<listType>(
    getCurrentList(location.pathname),
  )
  const [itemList, setItemList] = useState<TodosState>(todos)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    setItemList(todos)
  }, [todos])

  useEffect(() => {
    setCurrentList(getCurrentList(location.pathname))
  }, [location.pathname])

  const onSearchHandler = () => {
    const filtered = itemList[currentList].items.filter((item) => {
      return item.title.includes(search)
    })
    setItemList((prev) => {
      console.log(prev[currentList])

      return {
        ...prev,
        [currentList]: {
          ...prev[currentList],
          items: filtered,
        },
      }
    })
    console.log(itemList)
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
                  className='todo-menu__item-link'
                >
                  <Icon type='mail' className='todo-menu__item-icon' />
                  <span>{t(RouterEnum.MY_TASKS)}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.IMPORTANT}
                  className='todo-menu__item-link'
                >
                  <Icon type='star' className='todo-menu__item-icon' />
                  <span>{t(RouterEnum.IMPORTANT)}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.COMPLETED}
                  className='todo-menu__item-link'
                >
                  <Icon type='check' className='todo-menu__item-icon' />
                  <span>{t(RouterEnum.COMPLETED)}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.DELETED}
                  className='todo-menu__item-link'
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
                  <Tag isActive={true}>{t(TagsEnum.PRODUCTIVITY)}</Tag>
                </li>
                <li>
                  <Tag type='success'>{t(TagsEnum.EDUCATION)}</Tag>
                </li>
                <li>
                  <Tag type='warning'>{t(TagsEnum.HEALTH)}</Tag>
                </li>
                <li>
                  <Tag type='danger'>{t(TagsEnum.URGENT)}</Tag>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='todo-body'>
          <div className='todo-body__wrapper'>
            <div className='todo-search'>
              <div className='todo-search__button' onClick={onSearchHandler}>
                <Icon type='search' />
              </div>
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
            </div>
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
