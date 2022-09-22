import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Tag from '../ui/Tag'
import Typography from '../ui/Typography'
import './Todo.css'

interface TodoProps {}

const Todo: FC<TodoProps> = () => {
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
                <NavLink to={'/tasks'} className='todo-menu__item-link'>
                  <Icon type='mail' className='todo-menu__item-icon' />
                  <span>Мои задачи</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/important'} className='todo-menu__item-link'>
                  <Icon type='star' className='todo-menu__item-icon' />
                  <span>Важные</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/completed'} className='todo-menu__item-link'>
                  <Icon type='check' className='todo-menu__item-icon' />
                  <span>Выполненые</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/deleted'} className='todo-menu__item-link'>
                  <Icon type='bucket' className='todo-menu__item-icon' />
                  <span>Удаленные</span>
                </NavLink>
              </li>
            </ul>
            <div className='todo-footer'>
              <Typography type='small text'>Тэги</Typography>
              <ul className='todo-tags'>
                <li>
                  <Tag isActive={true}>Мои задачи</Tag>
                </li>
                <li>
                  <Tag type='success'>Образование</Tag>
                </li>
                <li>
                  <Tag type='warning'>Здоровье</Tag>
                </li>
                <li>
                  <Tag type='danger'>Срочно</Tag>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='todo-body'>
          <div className='todo-body__wrapper'></div>
        </div>
      </div>
    </div>
  )
}

export default Todo
