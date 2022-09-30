import { FC, useEffect, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import ListItem from '../ListItem'
import Typography from '../ui/Typography'
import './List.css'
import { ListProps } from './types'

const List: FC<ListProps & WithTranslation> = ({ title, data, t }) => {
  const MAX_ITEMS_PER_PAGE = 5

  const [isOpen, setOpen] = useState<boolean>(false)
  const [currentItems, setCurrentItems] = useState(
    data.items.slice(0, MAX_ITEMS_PER_PAGE),
  )

  const isDeleted = data.listType === 'deleted'

  const amountItemsLeft = data.items.length - currentItems.length

  const shouldDisplayOpener =
    !isOpen && amountItemsLeft > 0 && currentItems.length <= 5

  const checkboxHandler = () => {}

  useEffect(() => {
    setCurrentItems(
      isOpen ? data.items : data.items.slice(0, MAX_ITEMS_PER_PAGE),
    )
  }, [isOpen, data])

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
        <div className={`list-body ${isOpen && '--open'}`}>
          <ul className='list-items'>
            {currentItems.map((item, index) => {
              return (
                <li key={index}>
                  <ListItem
                    item={item}
                    isDeleted={isDeleted}
                    listType={data.listType}
                    checkboxHandler={checkboxHandler}
                    isImportant={item?.isImportant}
                  />
                </li>
              )
            })}
          </ul>
          {shouldDisplayOpener && (
            <div
              className='list-body__list-opener'
              onClick={() => {
                setOpen(true)
              }}
            >
              <span>{t('open{$}MoreTasks', { number: amountItemsLeft })}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(List)
