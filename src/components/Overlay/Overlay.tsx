import { FC } from 'react'
import './Overlay.css'

interface OverlayProps {
  opacity?: number
}

const Overlay: FC<OverlayProps> = ({ opacity = 0.5 }) => {
  return <div className='overlay' style={{ opacity: opacity }}></div>
}

export default Overlay
