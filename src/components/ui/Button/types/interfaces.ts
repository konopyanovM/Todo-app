import { ReactNode } from 'react'
type buttonTheme = 'default' | 'ghost'

export interface ButtonProps {
  children: ReactNode
  theme?: buttonTheme
}
