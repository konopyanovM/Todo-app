import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'
import Input from '../ui/Input'
import Typography from '../ui/Typography'
import './ListItem.css'
import { ListItemProps } from './types'

const ListItem: FC<ListItemProps & WithTranslation> = ({
  item,
  isImportant,
  checkboxHandler,
  t,
}) => {
  return (
    <span className={`list-item ${isImportant && '--important'}`}>
      <span className='list-item__checkbox'>
        <Input
          type='checkbox'
          checked={item.isCompleted}
          onChangeHandler={checkboxHandler}
        />
      </span>
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
      <Icon type='bucket' size='large'></Icon>
      <Icon type='dots' size='large'></Icon>
    </span>
  )
}

export default withTranslation()(ListItem)
