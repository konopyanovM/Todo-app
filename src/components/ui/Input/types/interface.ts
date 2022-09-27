import { HTMLInputTypeAttribute } from 'react'
type inputTheme = 'default' | 'ghost'

export interface InputProps {
  id?: string
  type?: HTMLInputTypeAttribute
  theme?: inputTheme
  placeholder?: string
  className?: string
  checked?: boolean
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>
}
