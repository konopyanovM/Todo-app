import { FC } from 'react'
import './Button.css'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ children, theme = 'default' }) => {
  return <button className={`button ${theme}`}>{children}</button>
}

export default Button
