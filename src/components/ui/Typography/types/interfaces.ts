import { ReactNode } from 'react'
type typography = 'heading' | 'text' | 'small text'

export interface TypographyProps {
  type: typography
  children: ReactNode
  className?: string
}
