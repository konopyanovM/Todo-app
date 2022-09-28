import { ReactNode } from 'react'
type buttonTheme = 'default' | 'ghost'

export interface ButtonProps {
  children: ReactNode
  value?: string | number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  theme?: buttonTheme
  isDisabled?: boolean
}
