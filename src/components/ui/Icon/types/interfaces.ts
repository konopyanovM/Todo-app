type icon =
  | 'bucket'
  | 'star'
  | 'search'
  | 'mail'
  | 'check'
  | 'dots'
  | 'rotate'
  | 'calendar'
  | 'cross'
  | 'arrow-left'
  | 'arrow-right'
  | 'exclamation-mark'

type iconSize = 'small' | 'medium' | 'large'

export interface IconProps {
  type: icon
  size?: iconSize
  fill?: string
  className?: string
  initialSize?: boolean
}
