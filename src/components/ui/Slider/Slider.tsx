import { useState, useRef, ReactNode } from 'react';
import { CarouselContainer, CarouselTrack } from './Slider.style';

type SliderProps = {
  items: ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  const handleTouchStart = (e: { touches: any }) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };


  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const diff = startX - x;
    
    if (diff > 50) goToNext();
    if (diff < -50) goToPrevious(); 
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: { clientX: number }) => {
    setStartX(e.clientX);
    setIsDragging(true);
    console.log(e.touches)

  };

  const handleMouseMove = (e: { clientX: number }) => {
    if (!isDragging) return;
    const x = e.clientX;
    const diff = startX - x;
    
    if (diff > 50) goToNext();
    if (diff < -50) goToPrevious();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const goToPrevious = () => {
    setIsDragging(false);
    setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsDragging(false);
    if (items) {
      setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <CarouselContainer
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <CarouselTrack 
        className="carousel-track"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease'
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};


export default Slider;