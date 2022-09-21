import { FC } from 'react'
import './Tag.css'
import { TagProps } from './types'

const Tag: FC<TagProps> = ({ title, type = 'primary' }) => {
  return <div className={`tag ${type}`}>{title}</div>
}

export default Tag
