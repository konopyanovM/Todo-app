import { FC } from 'react'
import './Button.css'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({
  children,
  value,
  onClick,
  theme = 'default',
  isDisabled = false,
}) => {
  return (
    <button
      className={`button ${theme} ${isDisabled && '--disabled'}`}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
