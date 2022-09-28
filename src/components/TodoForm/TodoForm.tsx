import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { WithTranslation, withTranslation } from 'react-i18next'
import { TagsEnum, TodoFormEnum } from '../../constants'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Typography from '../ui/Typography'
import './TodoForm.css'

interface TodoFormProps {
  closeHandler: React.MouseEventHandler
}

const TodoForm: FC<TodoFormProps & WithTranslation> = ({ closeHandler, t }) => {
  const { register, handleSubmit } = useForm()

  //TODO: types
  const onSubmit = (data: any) => {
    console.log(data)
  }

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='todo-form__body-wrapper'
          >
            <Input
              register={register(TodoFormEnum.TITLE)}
              label={t('title')}
              placeholder={t('todoTitle')}
            />
            <Input
              register={register(TodoFormEnum.COMPLETION_DATE)}
              label={t('todoCompletionDate')}
              placeholder={t('todoTitle')}
            />
            <Input
              register={register(TodoFormEnum.IS_IMPORTANT)}
              label={t('importantTodo')}
              type='checkbox'
            />
            <Input
              register={register(TodoFormEnum.DESCRIPTION)}
              label={t('todoDescription')}
              placeholder={t('todoTitle')}
            />
            <div className='todo-form-tags'>
              <Typography type='small text'>{t('tags')}</Typography>
              <div className='todo-form-tags__list'>
                <Input
                  label={t(TagsEnum.PRODUCTIVITY)}
                  type='checkbox'
                  register={register(
                    `${TodoFormEnum.TAGS}.${TagsEnum.PRODUCTIVITY}`,
                  )}
                />
                <Input
                  label={t(TagsEnum.HEALTH)}
                  type='checkbox'
                  register={register(`${TodoFormEnum.TAGS}.${TagsEnum.HEALTH}`)}
                />
                <Input
                  label={t(TagsEnum.EDUCATION)}
                  type='checkbox'
                  register={register(
                    `${TodoFormEnum.TAGS}.${TagsEnum.EDUCATION}`,
                  )}
                />
                <Input
                  label={t(TagsEnum.URGENT)}
                  type='checkbox'
                  register={register(`${TodoFormEnum.TAGS}.${TagsEnum.URGENT}`)}
                />
              </div>
            </div>
            <div className='todo-form-buttons'>
              <Button value={'add'}>{t('add')}</Button>
              <Button theme='ghost'>{t('delete')}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(TodoForm)
