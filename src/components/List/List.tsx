import { FC } from 'react'
import ListItem from '../ListItem'
import Typography from '../ui/Typography'
import './List.css'
import { ListProps } from './types'

const List: FC<ListProps> = ({ title, data, setData }) => {
  return (
    <div className='list'>
      <div className='list__wrapper'>
        {title && (
          <div className='list-header'>
            <Typography type='heading'>{title}</Typography>
          </div>
        )}
        <div className='list-body'>
          <ul className='list-items'>
            {data.map((item, index, data) => {
              const checkboxHandler = () => {
                item.isCompleted = !item.isCompleted
                setData(data)
              }
              return (
                <li key={index}>
                  <ListItem
                    item={item}
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
