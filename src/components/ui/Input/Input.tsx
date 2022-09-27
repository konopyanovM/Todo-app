import { FC } from 'react'
import Icon from '../Icon'
import './Input.css'
import { InputProps } from './types'

const Input: FC<InputProps> = ({
  id,
  type = 'text',
  theme = 'default',
  placeholder,
  checked = false,
  className,
  onChangeHandler = () => {},
}) => {
  return (
    <label htmlFor={id} className='label'>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        checked={checked}
        className={`input ${type} ${theme} ${className}`}
        onChange={onChangeHandler}
      />
      <span className='custom-checkbox'>
        <Icon type='check' size='small' className='custom-checkbox__icon' />
      </span>
    </label>
  )
}

export default Input
