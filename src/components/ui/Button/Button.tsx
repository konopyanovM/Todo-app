import { FC } from 'react'
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
  return (
    <button
      className={`button ${theme} ${isDisabled && '--disabled'} ${className}`}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
