import { FC } from 'react'
import Icon from '../Icon'
import Typography from '../Typography'
import { typography } from '../Typography/types'
import './Input.css'
import { InputProps } from './types'

const Input: FC<InputProps> = ({
  id,
  register,
  type = 'text',
  label,
  theme = 'default',
  placeholder,
  checked = false,
  className,
  onChangeHandler = () => {},
}) => {
  const isCheckbox = type === 'checkbox'
  const labelTypographyType: typography = isCheckbox ? 'text' : 'small text'

  return (
    <label htmlFor={id} className={`label ${type}`}>
      {label && (
        <Typography type={labelTypographyType} className='label-text'>
          {label}
        </Typography>
      )}
      <input
        {...register}
        id={id}
        type={type}
        placeholder={placeholder}
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
