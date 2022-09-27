import { FC } from 'react'
import './Button.css'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ children, onClick, theme = 'default' }) => {
  return (
    <button className={`button ${theme}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
