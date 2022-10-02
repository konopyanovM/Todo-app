import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import './Badge.css'
import { BadgeProps } from './types'

const Badge: FC<BadgeProps & WithTranslation> = ({ children, type, t }) => {
  if (children)
    return (
      <span className={`badge ${type}`}>
        <span className='badge-text'>{children}</span>
      </span>
    )

  return (
    <span className={`badge ${type}`}>
      <span className='badge-text'>{t('productivity')}</span>
    </span>
  )
}

export default withTranslation()(Badge)
