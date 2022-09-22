export type badge = 'primary' | 'success' | 'warning' | 'danger'

export interface BadgeProps {
  children: string
  type?: badge
}
