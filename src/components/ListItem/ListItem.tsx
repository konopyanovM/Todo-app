import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { deleteItem, restoreItem } from '../../store/todos/todosSlice'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Typography from '../ui/Typography'
import './ListItem.css'
import { ListItemProps } from './types'

const ListItem: FC<ListItemProps & WithTranslation> = ({
  item,
  listType = 'current',
  isImportant,
  isDeleted = false,
  checkboxHandler,
  t,
}) => {
  // Redux
  const dispatch = useDispatch()
  //
  if (!item) return null

  const deleteHandler = () => {
    dispatch(deleteItem({ id: item.id, listType }))
  }

  const restoreHandler = () => {
    dispatch(restoreItem(item.id))
  }

  return (
    <span className={`list-item ${isImportant && '--important'}`}>
      {!isDeleted && (
        <span className='list-item__checkbox'>
          <Input
            type='checkbox'
            checked={item.isCompleted}
            onChangeHandler={checkboxHandler}
          />
        </span>
      )}
      <Typography type='text' className='list-item__title'>
        {item.title}
      </Typography>
      <ul className='list-badges'>
        {item.badges.map((badge, index) => {
          return (
            <li key={index} className='list-badges__item'>
              <Badge type={badge}>{t(badge)}</Badge>
            </li>
          )
        })}
      </ul>
      <Typography type='small text'>{item.endDate}</Typography>
      {isDeleted ? (
        <div className='list-item__button' onClick={restoreHandler}>
          <Icon type='rotate' size='large'></Icon>
        </div>
      ) : (
        <>
          <div className='list-item__button' onClick={deleteHandler}>
            <Icon type='bucket' size='large'></Icon>
          </div>
          <div className='list-item__button'>
            <Icon type='dots' size='large'></Icon>
          </div>
        </>
      )}
    </span>
  )
}

export default withTranslation()(ListItem)
