type tag = 'primary' | 'success' | 'warning' | 'danger'

export interface TagProps {
  title: string
  type?: tag
}
