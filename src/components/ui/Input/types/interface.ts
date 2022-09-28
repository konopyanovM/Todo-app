import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type inputTheme = 'default' | 'ghost'

export interface InputProps {
  id?: string
  register?: UseFormRegisterReturn
  type?: HTMLInputTypeAttribute
  label?: string
  theme?: inputTheme
  placeholder?: string
  className?: string
  checked?: boolean
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>
}
