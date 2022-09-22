import { FC } from 'react'
import { TypographyProps } from './types'
import './Typography.css'

const Typography: FC<TypographyProps> = ({ type, children }) => {
  switch (type) {
    case 'text':
      return <p className='typography text'>{children}</p>
    case 'small text':
      return <p className='typography small-text'>{children}</p>
    case 'heading':
      return <h2 className='typography heading'>{children}</h2>
    default:
      return <p>{children}</p>
  }
}

export default Typography
