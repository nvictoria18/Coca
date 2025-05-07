import {
  ReactNode,
  useRef,
  useState,
  MouseEvent
} from "react";
import {
  CarouselContainer,
  CarouselItems,
} from "./Carousel.style";
import { Selector } from "./Selector";

type CarouselProps = {
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true)
    if (ref.current) {
      setStartX(event.pageX - - ref.current.offsetLeft)
      console.log(ref.current.scrollLeft)
      setScrollLeft(ref.current.scrollLeft)
    }
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    event.preventDefault();
    if (ref.current) {
      console.log(event.pageX - ref.current.offsetLeft)
      const x = event.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      ref.current.scrollLeft = scrollLeft - walk;
    }
  }

  return (
    <CarouselItems>
      <Selector />
      <CarouselContainer
        ref={ref}
        className="carousel-container"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {children}
      </CarouselContainer>
    </CarouselItems>
  )
}

export default Carousel;