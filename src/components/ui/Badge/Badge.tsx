import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import './Badge.css'
import { BadgeProps } from './types'

const Badge: FC<BadgeProps & WithTranslation> = ({ children, type, t }) => {
  if (children) return <span className={`badge ${type}`}>{children}</span>

  return <span className={`badge ${type}`}>{t('productivity')}</span>
}

export default withTranslation()(Badge)
