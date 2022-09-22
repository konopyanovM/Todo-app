import { FC } from 'react'
import { TypographyProps } from './types'
import './Typography.css'

const Typography: FC<TypographyProps> = ({ type, children, className }) => {
  switch (type) {
    case 'text':
      return <p className={`typography text ${className}`}>{children}</p>
    case 'small text':
      return <p className={`typography small text ${className}`}>{children}</p>
    case 'heading':
      return <h2 className={`typography heading ${className}`}>{children}</h2>
    default:
      return <p>{children}</p>
  }
}

export default Typography
