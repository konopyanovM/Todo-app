import { FC, useEffect, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { deleteItem, restoreItem } from '../../store/todos/todosSlice'
import { getCurrentList } from '../../utils'
import { listType } from '../List/types'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Typography from '../ui/Typography'
import './ListItem.css'
import { ListItemProps } from './types'

const ListItem: FC<ListItemProps & WithTranslation> = ({
  item,
  listType = 'current',
  isImportant = false,
  isDeleted = false,
  t,
}) => {
  // Redux
  const dispatch = useDispatch()
  //
  const locationPath = useLocation().pathname
  const [currentList, setCurrentList] = useState<listType>(
    getCurrentList(locationPath),
  )
  useEffect(() => {
    setCurrentList(getCurrentList(locationPath))
  }, [locationPath])

  const isImportantList = currentList === 'important'

  const [isCompleted, setCompleted] = useState(item?.isCompleted)
  if (!item) return null

  const deleteHandler = () => {
    dispatch(deleteItem({ id: item.id, listType }))
  }

  const restoreHandler = () => {
    dispatch(restoreItem(item.id))
  }

  const checkboxHandler = () => {}

  return (
    <span
      className={`list-item ${
        isImportant && !isImportantList && '--important'
      }`}
    >
      {!isDeleted && (
        <span className='list-item__checkbox'>
          <Input
            type='checkbox'
            checked={isCompleted}
            onChangeHandler={checkboxHandler}
          />
        </span>
      )}
      <p
        dangerouslySetInnerHTML={{ __html: item.title }}
        className='list-item__title'
      ></p>
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
