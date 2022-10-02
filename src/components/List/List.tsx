import { FC, useEffect, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { getMobileItemsAmount } from '../../utils'
import ListItem from '../ListItem'
import Typography from '../ui/Typography'
import './List.css'
import { ListProps } from './types'

const List: FC<ListProps & WithTranslation> = ({
  data,
  title,
  isImportant = false,
  t,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])
  const isMobile = width <= 767

  const MAX_ITEMS_PER_PAGE = isMobile ? getMobileItemsAmount(height) : 5
  const locationPath = useLocation().pathname
  const [itemList, setItemList] = useState(() => {
    if (isImportant) return data.items.filter((item) => item.isImportant)
    return data.items
  })
  const [isOpen, setOpen] = useState<boolean>(false)
  const [currentItems, setCurrentItems] = useState(
    itemList.slice(0, MAX_ITEMS_PER_PAGE),
  )

  useEffect(() => {
    setOpen(false)
    setItemList(() => {
      if (isImportant) return data.items.filter((item) => item.isImportant)
      return data.items
    })
  }, [locationPath, data])

  useEffect(() => {
    setCurrentItems(isOpen ? itemList : itemList.slice(0, MAX_ITEMS_PER_PAGE))
  }, [isOpen, itemList])

  const isDeleted = data.listType === 'deleted'

  const amountItemsLeft = itemList.length - currentItems.length

  const shouldDisplayOpener =
    !isOpen && amountItemsLeft > 0 && currentItems.length <= MAX_ITEMS_PER_PAGE

  const checkboxHandler = () => {}

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
