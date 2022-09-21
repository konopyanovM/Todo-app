import { FC } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Icon from '../ui/Icon/Icon'
import Input from '../ui/Input'
import Tag from '../ui/Tag'
import './Todo.css'

interface TodoProps {}

const Todo: FC<TodoProps> = () => {
  return (
    <div className='todo'>
      <div className='todo__wrapper'>
        <div className='todo__sider'>
          <Button title='Новая задача'></Button>
          <Tag title='Продуктивность'></Tag>
          <Tag title='Образование' type='success'></Tag>
          <Tag title='Здоровье' type='warning'></Tag>
          <Tag title='Срочно' type='danger'></Tag>
          <Badge title='Продуктивность' />
          <Badge title='Образование' type='success' />
          <Badge title='Здоровье' type='warning' />
          <Badge title='Срочно' type='danger' />
          <Input placeholder='placeholder' type={'checkbox'} />
          <Icon type='arrow-left'></Icon>
        </div>
      </div>
    </div>
  )
}

export default Todo
