import { badge } from './../../ui/Badge/types/interfaces'
import { ReactNode } from 'react'

export type listType = 'current' | 'completed' | 'deleted'
export interface List {
  listType: listType
  items: ListItem[]
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
export interface ListProps {
  data: List
  title?: ReactNode
  isImportant?: boolean
}
