import { FC } from 'react'
import './Icon.css'
import { IconProps } from './types'

const Icon: FC<IconProps> = ({
  type,
  size = 'medium',
  fill,
  initialSize,
  className,
}) => {
  let icon
  switch (type) {
    case 'arrow-left':
      icon = require('../../../assets/images/arrow-left.svg')
      break
    case 'arrow-right':
      icon = require('../../../assets/images/arrow-right.svg')
      break
    case 'bucket':
      icon = require('../../../assets/images/bucket.svg')
      break
    case 'calendar':
      icon = require('../../../assets/images/calendar.svg')
      break
    case 'check':
      icon = require('../../../assets/images/check.svg')
      break
    case 'cross':
      icon = require('../../../assets/images/cross.svg')
      break
    case 'dots':
      icon = require('../../../assets/images/dots.svg')
      break
    case 'mail':
      icon = require('../../../assets/images/mail.svg')
      break
    case 'rotate':
      icon = require('../../../assets/images/rotate.svg')
      break
    case 'star':
      icon = require('../../../assets/images/star.svg')
      break
    case 'search':
      icon = require('../../../assets/images/search.svg')
      break
    case 'exclamation-mark':
      icon = require('../../../assets/images/exclamation-mark.svg')
      break
  }
  const IconComponent = icon.ReactComponent

  return (
    <IconComponent
      className={`icon ${initialSize ? '' : size} ${className}`}
      style={{ color: fill }}
    ></IconComponent>
  )
}

export default Icon
