import { FC } from 'react'
import './Tag.css'
import { TagProps } from './types'

const Tag: FC<TagProps> = ({
  children,
  isActive,
  isDisabled,
  type = 'primary',
  className = '',
  onClickHandler,
}) => {
  return (
    <span
      className={`tag ${type} ${isActive ? 'active' : ''} ${
        isDisabled ? '--disabled' : ''
      } ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </span>
  )
}

export default Tag
