import { FC } from 'react'
import ListItem from '../ListItem'
import Typography from '../ui/Typography'
import './List.css'
import { ListProps } from './types'

const List: FC<ListProps> = ({ title, data }) => {
  const isDeleted = data.listType === 'deleted'
  return (
    <div className='list'>
      <div className='list__wrapper'>
        {title && (
          <div className='list-header'>
            <Typography type='heading' className='list-header__title'>
              {title}
            </Typography>
          </div>
        )}
        <div className='list-body'>
          <ul className='list-items'>
            {data.items.map((item, index) => {
              const checkboxHandler = () => {
                item.isCompleted = !item.isCompleted
              }
              return (
                <li key={index}>
                  <ListItem
                    item={item}
                    isDeleted={isDeleted}
                    listType={data.listType}
                    checkboxHandler={checkboxHandler}
                    isImportant={item.isImportant}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default List
