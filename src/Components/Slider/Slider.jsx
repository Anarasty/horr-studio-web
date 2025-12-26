import React, { useState, useEffect } from 'react'
import './Slider.scss'

const Slider = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (slides.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (slides.length === 0) {
    return null
  }

  return (
    <div className="slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {slide.content && (
              <div className="slide-content">
                {slide.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button 
            className="slider-button prev" 
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button 
            className="slider-button next" 
            onClick={goToNext}
            aria-label="Next slide"
          >
            &#8250;
          </button>

          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Slider
