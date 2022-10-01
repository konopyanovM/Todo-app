import { ReactNode } from 'react'
type buttonTheme = 'default' | 'ghost' | 'ghost-danger'
type buttonSize = 'medium' | 'large'
export interface ButtonProps {
  children: ReactNode
  value?: string | number
  onClick?: () => void
  theme?: buttonTheme
  isDisabled?: boolean
  className?: string
  shouldPreventDefault?: boolean
  size?: buttonSize
}
