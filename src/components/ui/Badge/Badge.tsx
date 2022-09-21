import { FC } from 'react'
import './Badge.css'
import { BadgeProps } from './types'

const Badge: FC<BadgeProps> = ({ title, type }) => {
  return <span className={`badge ${type}`}>{title}</span>
}

export default Badge
