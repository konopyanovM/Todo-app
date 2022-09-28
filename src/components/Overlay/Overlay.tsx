import { FC } from 'react'
import './Overlay.css'

interface OverlayProps {
  opacity?: number
  onClick?: React.MouseEventHandler
}

const Overlay: FC<OverlayProps> = ({ opacity = 0.5, onClick }) => {
  return (
    <div
      className='overlay'
      style={{ opacity: opacity }}
      onClick={onClick}
    ></div>
  )
}

export default Overlay
