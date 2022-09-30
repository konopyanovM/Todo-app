import { FC } from 'react'
import './Tag.css'
import { TagProps } from './types'

const Tag: FC<TagProps> = ({
  children,
  isActive,
  isDisabled,
  type = 'primary',
  className = '',
}) => {
  return (
    <span
      className={`tag ${type} ${isActive ? 'active' : ''} ${
        isDisabled ? '--disabled' : ''
      } ${className}`}
    >
      {children}
    </span>
  )
}

export default Tag
