import { FC } from 'react'
import Button from '../ui/Button'
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
          <Tag title='Продуктивность' type='success'></Tag>
          <Tag title='Продуктивность' type='warning'></Tag>
          <Tag title='Продуктивность' type='danger'></Tag>
        </div>
      </div>
    </div>
  )
}

export default Todo
