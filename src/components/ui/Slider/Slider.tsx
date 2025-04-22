import {
  ReactNode,
  useRef,
  useState,
  MouseEvent
} from "react";
import {
  Carousel,
  CarouselItems
} from "./Slider.style";
import { Selector } from "./Selector";

type SliderProps = {
  children: ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
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
    <div style={{ position: 'relative' }}>
      <Selector />
      <Carousel
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {children}
      </Carousel>
    </div>
  )
}

export default Slider;