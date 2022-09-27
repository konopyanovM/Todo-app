import { badge } from './../../ui/Badge/types/interfaces'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type BadgeItem = {
  title: string
  type: badge
}

export type ListItem = {
  id: number
  title: string
  endDate: string
  priority: string
  description: string
  badges: BadgeItem[]
  isCompleted: boolean
}

export interface ListProps {
  title?: ReactNode
  data: ListItem[]
  setData: Dispatch<SetStateAction<ListItem[]>>
}
