import { ReactNode } from 'react'
type buttonTheme = 'default' | 'ghost'

export interface ButtonProps {
  children: ReactNode
  value?: string | number
  onClick?: () => void
  theme?: buttonTheme
  isDisabled?: boolean
  className?: string
  shouldPreventDefault?: boolean
}
