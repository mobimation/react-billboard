import React, { useRef, useEffect } from 'react'
import backdrop from './billboard-no-pixels.png';

const Canvas = props => {

  const canvasRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const img = imgRef.current

    img.onload = () => {
      // Draw image referenced by 'img' prop
      console.log("drawing")
      context.drawImage(img,0,0,1200,798 );
    }
  }, [])

  return <div>
           <canvas ref={canvasRef} {...props}/>
           <img ref={imgRef} src={backdrop} className="hidden" />
        </div>
}
export default Canvas
