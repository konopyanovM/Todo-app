import { ReactNode } from 'react'
export type typography = 'heading' | 'text' | 'small text'

export interface TypographyProps {
  type: typography
  children: ReactNode
  className?: string
}
