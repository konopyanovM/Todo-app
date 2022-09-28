export type badge = 'productivity' | 'education' | 'health' | 'urgent'

export interface BadgeProps {
  children?: string
  type?: badge
}
