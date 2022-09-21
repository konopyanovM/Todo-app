import { FC, HTMLInputTypeAttribute } from 'react'
import Icon from '../Icon'
import './Input.css'

interface InputProps {
  id?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
}

const Input: FC<InputProps> = ({ id, type = 'text', placeholder }) => {
  return (
    <label htmlFor={id} className='label'>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`input ${type}`}
      />
      <span className='custom-checkbox'>
        <Icon type='check' size='small' className='custom-checkbox__icon' />
      </span>
    </label>
  )
}

export default Input
