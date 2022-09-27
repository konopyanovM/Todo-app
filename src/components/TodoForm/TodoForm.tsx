import { FC } from 'react'
import { TagsEnum } from '../../constants'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Typography from '../ui/Typography'
import './TodoForm.css'

interface TodoFormProps {
  closeHandler: React.MouseEventHandler
}

const TodoForm: FC<TodoFormProps> = ({ closeHandler }) => {
  return (
    <div className='todo-form'>
      <div className='todo-form__wrapper'>
        <div className='todo-form__header'>
          <Typography type='heading' className='todo-form__title'>
            Задача
          </Typography>
          <div className='todo-form__button'>
            <Icon type='star' size='large' />
          </div>
          <div className='todo-form__button' onClick={closeHandler}>
            <Icon type='cross' size='large' />
          </div>
        </div>
        <div className='todo-form__body'>
          <form className='todo-form__body-wrapper'>
            <Input label='Название' placeholder='Название задачи' />
            <Input
              label='Дата завершения задачи'
              placeholder='Название задачи'
            />
            <Input label='Важная задача' type='checkbox' />
            <Input label='Описание задачи' placeholder='Название задачи' />
            <div className='todo-form-tags'>
              <Typography type='small text'>Тэги</Typography>
              <div className='todo-form-tags__list'>
                <Input label={TagsEnum.PRODUCTIVITY} type='checkbox' />
                <Input label={TagsEnum.HEALTH} type='checkbox' />
                <Input label={TagsEnum.EDUCATION} type='checkbox' />
                <Input label={TagsEnum.URGENT} type='checkbox' />
              </div>
            </div>
            <div className='todo-form-buttons'>
              <Button>Добавить</Button>
              <Button theme='ghost'>Удалить</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
