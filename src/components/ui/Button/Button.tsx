import { FC } from 'react'
import './Button.css'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ title, theme = 'default' }) => {
  return <button className={`button ${theme}`}>{title}</button>
}

export default Button
