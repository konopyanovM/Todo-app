import { badge } from './../../ui/Badge/types/interfaces'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type badgeItem = {
  title: string
  type: badge
}

export type listItem = {
  id: number
  title: string
  endDate: string
  priority: string
  description: string
  badges: badgeItem[]
  isCompleted: boolean
}

export interface ListProps {
  title?: ReactNode
  data: listItem[]
  setData: Dispatch<SetStateAction<listItem[]>>
}