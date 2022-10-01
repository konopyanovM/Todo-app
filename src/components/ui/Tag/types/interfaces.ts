import { ReactNode } from 'react'

type tag = 'primary' | 'success' | 'warning' | 'danger'

export interface TagProps {
  children: ReactNode
  isActive?: boolean
  isDisabled?: boolean
  type?: tag
  className?: string
  onClickHandler?: React.MouseEventHandler<HTMLSpanElement>
}
