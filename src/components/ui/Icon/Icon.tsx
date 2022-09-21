import { FC } from 'react'
import './Icon.css'
import { IconProps } from './types'

const Icon: FC<IconProps> = ({ type, size = 'medium', className }) => {
  let icon
  switch (type) {
    case 'arrow-left':
      icon = require('../../../images/arrow-left.svg')
      break
    case 'arrow-right':
      icon = require('../../../images/arrow-right.svg')
      break
    case 'bucket':
      icon = require('../../../images/bucket.svg')
      break
    case 'calendar':
      icon = require('../../../images/calendar.svg')
      break
    case 'check':
      icon = require('../../../images/check.svg')
      break
    case 'cross':
      icon = require('../../../images/cross.svg')
      break
    case 'dots':
      icon = require('../../../images/dots.svg')
      break
    case 'mail':
      icon = require('../../../images/mail.svg')
      break
    case 'rotate':
      icon = require('../../../images/rotate.svg')
      break
    case 'star':
      icon = require('../../../images/star.svg')
      break
  }
  const IconComponent = icon.ReactComponent

  return <IconComponent className={`icon ${size} ${className}`}></IconComponent>
}

export default Icon
