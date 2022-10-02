import { enUS, ru } from 'date-fns/locale'
import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'
import { WithTranslation, withTranslation } from 'react-i18next'
import Icon from '../Icon'
import Typography from '../Typography'
import { typography } from '../Typography/types'
import './Input.css'
import { InputProps } from './types'

const Input: FC<InputProps & WithTranslation> = ({
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
  t,
  i18n,
}) => {
  const currentLanguage = i18n.language

  const [checked, setChecked] = useState<boolean>(false)
  const isCheckbox = type === 'checkbox'
  const labelTypographyType: typography = isCheckbox ? 'text' : 'small text'
  const [startDate, setStartDate] = useState<Date | null>(null)

  const locales: any = {
    'ru-RU': ru,
    'en-EN': enUS,
  }

  if (type === 'date')
    return (
      <label className={`label ${type}`}>
        {label && (
          <Typography type={labelTypographyType} className='label-text'>
            {label}
          </Typography>
        )}
        <DatePicker
          {...register}
          locale={locales[currentLanguage]}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText={placeholder}
          className='input'
          calendarClassName='date-calendar'
          autoComplete='off'
        />
        <Icon type='calendar' className='input-icon'></Icon>
      </label>
    )

  return (
    <label className={`label ${type}`}>
      {label && (
        <Typography type={labelTypographyType} className='label-text'>
          {label}
        </Typography>
      )}
      <input
        {...register}
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

export default withTranslation()(Input)
