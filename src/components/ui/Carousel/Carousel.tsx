import {
  ReactNode,
  useRef,
  useState,
  MouseEvent
} from "react";
import {
  CarouselContainer,
  CarouselItems,
  Navigation,
} from "./Carousel.style";
import { Selector } from "./Selector";

type CarouselProps = {
  children: ReactNode[];
  className?: string;
  topDesktop?: string;
  leftDesktop?: string;
  topMobile?: string;
  leftMobile?: string;
}

const Carousel: React.FC<CarouselProps> = (
  {
    children,
    className,
    topDesktop,
    leftDesktop,
    topMobile,
    leftMobile,
  }
) => {
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
    <CarouselItems
      className={className}
    >
      <Selector
    topDesktop={topDesktop}
    leftDesktop={leftDesktop}
    topMobile={topMobile}
    leftMobile={leftMobile}
    />
      <CarouselContainer
        ref={ref}
        className={`carousel-container`}
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