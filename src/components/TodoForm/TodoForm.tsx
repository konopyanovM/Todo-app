import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { TagsEnum } from '../../constants'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Typography from '../ui/Typography'
import './TodoForm.css'

interface TodoFormProps {
  closeHandler: React.MouseEventHandler
}

const TodoForm: FC<TodoFormProps & WithTranslation> = ({ closeHandler, t }) => {
  return (
    <div className='todo-form'>
      <div className='todo-form__wrapper'>
        <div className='todo-form__header'>
          <Typography type='heading' className='todo-form__title'>
            {t('todo')}
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
            <Input label={t('title')} placeholder={t('todoTitle')} />
            <Input
              label={t('todoCompletionDate')}
              placeholder={t('todoTitle')}
            />
            <Input label={t('importantTodo')} type='checkbox' />
            <Input label={t('todoDescription')} placeholder={t('todoTitle')} />
            <div className='todo-form-tags'>
              <Typography type='small text'>{t('tags')}</Typography>
              <div className='todo-form-tags__list'>
                <Input label={t(TagsEnum.PRODUCTIVITY)} type='checkbox' />
                <Input label={t(TagsEnum.HEALTH)} type='checkbox' />
                <Input label={t(TagsEnum.EDUCATION)} type='checkbox' />
                <Input label={t(TagsEnum.URGENT)} type='checkbox' />
              </div>
            </div>
            <div className='todo-form-buttons'>
              <Button>{t('add')}</Button>
              <Button theme='ghost'>{t('delete')}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(TodoForm)
