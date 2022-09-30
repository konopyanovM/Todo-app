import { HTMLInputTypeAttribute } from 'react'
import { FieldErrorsImpl, UseFormRegisterReturn } from 'react-hook-form'

type inputTheme = 'default' | 'ghost'

export interface InputProps {
  id?: string
  register?: UseFormRegisterReturn
  type?: HTMLInputTypeAttribute
  value?: string
  label?: string
  isError?: boolean
  errorMessage?: string
  theme?: inputTheme
  placeholder?: string
  className?: string
  checked?: boolean
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>
}
