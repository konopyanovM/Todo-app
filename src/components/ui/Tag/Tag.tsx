import { FC } from 'react'
import './Tag.css'
import { TagProps } from './types'

const Tag: FC<TagProps> = ({ title, type = 'primary' }) => {
  return <span className={`tag ${type}`}>{title}</span>
}

export default Tag
