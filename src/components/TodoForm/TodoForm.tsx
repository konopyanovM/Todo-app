import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { TagsEnum, TodoFormEnum } from '../../constants'
import { addItem, selectTodos } from '../../store/todos/todosSlice'
import { ListItem } from '../List/types'
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
  } = useForm({
    mode: 'onChange',
  })
  const tagsList = [
    TagsEnum.PRODUCTIVITY,
    TagsEnum.HEALTH,
    TagsEnum.EDUCATION,
    TagsEnum.URGENT,
  ]

  // Redux
  const dispatch = useDispatch()
  const { id } = useSelector(selectTodos)
  //

  //TODO: types
  const onSubmit = (rawData: any) => {
    const data: ListItem = rawData
    data.id = id
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
                <fieldset
                  className={`todo-form-tags__list ${
                    errors.badges && '--error'
                  }`}
                  {...register(TodoFormEnum.BADGES, {
                    validate: (badges) => {
                      badges = badges.filter((item: any) => {
                        const key = Object.keys(item)[0]
                        return item[key]
                      })
                      return badges.length || 'atLeastOneItemMustBeSelected'
                    },
                  })}
                >
                  {tagsList.map((tag, index) => {
                    return (
                      <Input
                        key={index}
                        register={register(
                          `${TodoFormEnum.BADGES}[${index}].${tag}`,
                        )}
                        label={t(tag)}
                        type='checkbox'
                      />
                    )
                  })}
                </fieldset>
                {errors.badges && (
                  <Typography className='todo-form-tags__error' type='error'>
                    {t(errors.badges.message as string)}
                  </Typography>
                )}
              </div>
              <div className='todo-form-buttons'>
                <Button value={'add'}>{t('add')}</Button>
                <Button theme='ghost'>{t('delete')}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(TodoForm)
