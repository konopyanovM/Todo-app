import { FC, useState } from 'react'
import Icon from '../Icon'
import Typography from '../Typography'
import { typography } from '../Typography/types'
import './Input.css'
import { InputProps } from './types'

const Input: FC<InputProps> = ({
  id,
  register,
  type = 'text',
  value,
  label,
  isError = '',
  errorMessage,
  theme = 'default',
  placeholder,
  checked: checkedProp,
  className = '',
  onChangeHandler = () => {},
}) => {
  const [checked, setChecked] = useState<boolean>(false)
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
        value={value}
        checked={checkedProp !== undefined ? checkedProp : checked}
        placeholder={placeholder}
        className={`input ${type} --${theme} ${className} ${
          isError && '--error'
        }`}
        onChange={(e) => {
          setChecked(!checked)
          onChangeHandler(e)
        }}
      />
      <span className='custom-checkbox'>
        <Icon type='check' size='small' className='custom-checkbox__icon' />
      </span>
      {isError && (
        <Typography type='error' className='label-error'>
          {errorMessage}
        </Typography>
      )}
    </label>
  )
}

export default Input
