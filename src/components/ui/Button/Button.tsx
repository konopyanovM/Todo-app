import React, { FC } from 'react'
import './Button.css'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({
  children,
  value,
  onClick,
  theme = 'default',
  isDisabled = false,
  className = '',
}) => {
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onClick) onClick!()
  }
  return (
    <button
      className={`button ${theme} ${isDisabled && '--disabled'} ${className}`}
      value={value}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default Button
