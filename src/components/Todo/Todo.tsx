import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RouterEnum, RouterPathsEnum, TagsEnum } from '../../constants'
import List from '../List'
import { listItem } from '../List/types'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Tag from '../ui/Tag'
import Typography from '../ui/Typography'
import './Todo.css'

interface TodoProps {}

const Todo: FC<TodoProps> = () => {
  const [itemList, setItemList] = useState<listItem[]>([
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
  ])

  return (
    <div className='todo'>
      <div className='todo__wrapper'>
        <div className='todo-sider'>
          <div className='todo-sider__wrapper'>
            <div className='todo-header'>
              <Button>Новая задача</Button>
            </div>
            <ul className='todo-menu'>
              <li>
                <NavLink
                  to={RouterPathsEnum.MY_TASKS}
                  className='todo-menu__item-link'
                >
                  <Icon type='mail' className='todo-menu__item-icon' />
                  <span>{RouterEnum.MY_TASKS}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.IMPORTANT}
                  className='todo-menu__item-link'
                >
                  <Icon type='star' className='todo-menu__item-icon' />
                  <span>{RouterEnum.IMPORTANT}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.COMPLETED}
                  className='todo-menu__item-link'
                >
                  <Icon type='check' className='todo-menu__item-icon' />
                  <span>{RouterEnum.COMPLETED}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouterPathsEnum.DELETED}
                  className='todo-menu__item-link'
                >
                  <Icon type='bucket' className='todo-menu__item-icon' />
                  <span>{RouterEnum.DELETED}</span>
                </NavLink>
              </li>
            </ul>
            <div className='todo-footer'>
              <Typography type='small text'>Тэги</Typography>
              <ul className='todo-tags'>
                <li>
                  <Tag isActive={true}>{TagsEnum.PRODUCTIVITY}</Tag>
                </li>
                <li>
                  <Tag type='success'>{TagsEnum.EDUCATION}</Tag>
                </li>
                <li>
                  <Tag type='warning'>{TagsEnum.HEALTH}</Tag>
                </li>
                <li>
                  <Tag type='danger'>{TagsEnum.URGENT}</Tag>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='todo-body'>
          <div className='todo-body__wrapper'>
            <div className='todo-search'>
              <Icon type='search' />
              <Input theme='ghost' placeholder='Поиск'></Input>
            </div>
            <div className='todo-list'>
              <List title='Мои задачи' data={itemList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
