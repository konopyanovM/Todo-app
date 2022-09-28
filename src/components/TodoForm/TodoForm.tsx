import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { TagsEnum, TodoFormEnum } from '../../constants'
import { addItem } from '../../store/todos/todosSlice'
import { ListItem } from '../List/types'
import Overlay from '../Overlay'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Typography from '../ui/Typography'
import './TodoForm.css'
import { TodoFormProps } from './types'

const TodoForm: FC<TodoFormProps & WithTranslation> = ({ closeHandler, t }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const tagsList = [
    TagsEnum.PRODUCTIVITY,
    TagsEnum.HEALTH,
    TagsEnum.EDUCATION,
    TagsEnum.URGENT,
  ]
  console.log(errors)

  // Redux
  const dispatch = useDispatch()
  //

  //TODO: types
  const onSubmit = (rawData: any) => {
    const data: ListItem = rawData
    data.id = 0
    data.isCompleted = false
    data.badges = rawData.badges
      .filter((item: any) => {
        const key = Object.keys(item)[0]
        return item[key]
      })
      .map((item: any) => {
        const key = Object.keys(item)[0]
        return key
      })
    closeHandler()
    dispatch(addItem(data))
  }

  return (
    <>
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
                register={register(TodoFormEnum.TITLE, {
                  required: 'theFieldMustNotBeEmpty',
                })}
                label={t('title')}
                placeholder={t('todoTitle')}
                isError={!!errors.title}
                errorMessage={t(errors.title?.message as string)}
              />
              <Input
                register={register(TodoFormEnum.END_DATE)}
                label={t('todoCompletionDate')}
                placeholder={t('todoTitle')}
              />
              <Input
                register={register(TodoFormEnum.IS_IMPORTANT)}
                label={t('importantTodo')}
                type='checkbox'
              />
              <Input
                register={register(TodoFormEnum.DESCRIPTION, {
                  required: 'theFieldMustNotBeEmpty',
                })}
                label={t('todoDescription')}
                placeholder={t('todoTitle')}
                isError={!!errors.description}
                errorMessage={t(errors.description?.message as string)}
              />
              <div className='todo-form-tags'>
                <Typography type='small text'>{t('tags')}</Typography>
                <div className='todo-form-tags__list'>
                  {tagsList.map((tag, index) => {
                    return (
                      <Input
                        key={index}
                        label={t(tag)}
                        type='checkbox'
                        register={register(
                          `${TodoFormEnum.BADGES}[${index}].${tag}`,
                        )}
                      />
                    )
                  })}
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
      <Overlay onClick={closeHandler} />
    </>
  )
}

export default withTranslation()(TodoForm)
