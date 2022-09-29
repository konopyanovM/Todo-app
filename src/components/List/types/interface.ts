import { badge } from './../../ui/Badge/types/interfaces'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ListProps {
  title?: ReactNode
  data: ListItem[]
}

export type ListItem = {
  id: number
  title: string
  endDate: string
  isImportant: boolean
  description: string
  badges: badge[]
  isCompleted: boolean
}
