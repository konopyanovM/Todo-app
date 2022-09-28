import { FC, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { RouterEnum, RouterPathsEnum, TagsEnum } from '../../constants'
import List from '../List'
import { ListItem } from '../List/types'
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
  const [itemList, setItemList] = useState<ListItem[]>([
    {
      id: 1,
      title: 'Title',
      endDate: 'asasfs',
      priority: 'safasf',
      description: 'sdfaf',
      badges: [
        {
          title: 'Продуктивность',
          type: 'primary',
        },
        {
          title: 'Срочно',
          type: 'danger',
        },
      ],
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Title 2',
      endDate: 'asasfs',
      priority: 'safasf',
      description: 'sdfaf',
      badges: [
        {
          title: 'Продуктивность',
          type: 'primary',
        },
        {
          title: 'Срочно',
          type: 'danger',
        },
      ],
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Title 3',
      endDate: 'asasfs',
      priority: 'safasf',
      description: 'sdfaf',
      badges: [
        {
          title: 'Продуктивность',
          type: 'primary',
        },
        {
          title: 'Срочно',
          type: 'danger',
        },
      ],
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Title 4',
      endDate: 'asasfs',
      priority: 'safasf',
      description: 'sdfaf',
      badges: [
        {
          title: 'Продуктивность',
          type: 'primary',
        },
        {
          title: 'Срочно',
          type: 'danger',
        },
      ],
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Title 5',
      endDate: 'asasfs',
      priority: 'safasf',
      description: 'sdfaf',
      badges: [
        {
          title: 'Продуктивность',
          type: 'primary',
        },
        {
          title: 'Срочно',
          type: 'danger',
        },
      ],
      isCompleted: false,
    },
  ])
  const [isTodoFormOpened, setIsTodoFormOpened] = useState<boolean>(false)

  const openTodoForm = () => {
    setIsTodoFormOpened(true)
  }

  const closeTodoForm = () => {
    setIsTodoFormOpened(false)
  }

  return (
    <div className='todo'>
      <div className='todo__wrapper'>
        <div className='todo-sider'>
          <div className='todo-sider__wrapper'>
            <div className='todo-header'>
              <Button onClick={openTodoForm}>{t('newTodo')}</Button>
            </div>
            <ul className='todo-menu'>
              <li>
                <NavLink
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
              <Icon type='search' />
              <Input theme='ghost' placeholder={t('search')}></Input>
            </div>
            <div className='todo-list'>
              <List
                title={t('myTodos')}
                data={itemList}
                setData={setItemList}
              />
            </div>
          </div>
        </div>
      </div>
      {isTodoFormOpened && (
        <>
          <TodoForm closeHandler={closeTodoForm} />
          <Overlay />
        </>
      )}
    </div>
  )
}

export default withTranslation()(Todo)
