import { ReactNode } from 'react'
type buttonTheme = 'default' | 'ghost'

export interface ButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  theme?: buttonTheme
}
