import { useState } from 'react'
import './Slide.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
function Slide({ images }) {
  const [imageIndex, setImageIndex] = useState(null)

  const changeSlide = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1)
      } else {
        setImageIndex(imageIndex - 1)
      }
    }
    if (imageIndex === images.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  return (
    <div className="slide">
      {imageIndex !== null && (
        <div className="fullSlide">
          <div className="arrow" onClick={() => changeSlide('left')}>
            <ArrowBackIosIcon sx={{ color: 'white', cursor: 'pointer' }} />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide('right')}>
            <ArrowForwardIosIcon sx={{ color: 'white', cursor: 'pointer' }} />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  )
}

export default Slide
