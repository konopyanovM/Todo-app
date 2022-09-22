import { FC } from 'react'
import './Badge.css'
import { BadgeProps } from './types'

const Badge: FC<BadgeProps> = ({ children, type }) => {
  return <span className={`badge ${type}`}>{children}</span>
}

export default Badge
