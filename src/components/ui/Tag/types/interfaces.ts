import { ReactNode } from 'react'

type tag = 'primary' | 'success' | 'warning' | 'danger'

export interface TagProps {
  children: ReactNode
  isActive?: boolean
  type?: tag
}
