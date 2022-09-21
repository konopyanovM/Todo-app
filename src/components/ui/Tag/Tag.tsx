import { FC } from 'react'
import './Tag.css'
import { TagProps } from './types'

const Tag: FC<TagProps> = ({ children, isActive, type = 'primary' }) => {
  return (
    <span className={`tag ${type} ${isActive && 'active'}`}>{children}</span>
  )
}

export default Tag
