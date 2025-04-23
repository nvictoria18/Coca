import { ReactNode, useRef, useState } from "react";
import {
    SliderBtns,
    SliderContainer,
    SliderTrack
} from "./Slider.style";
import { SliderLeftBtn } from "./SliderLeftBtn";
import { SliderRightBtn } from "./SliderRightBtn";

type SliderProps = {
    children: ReactNode[];
    width: number;
}

const Slider: React.FC<SliderProps> = ({ children, width }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlerSliderRight = () => {
        setCurrentIndex(prev => (prev === children.length - 1 ? 0 : prev + 1));
    }

    const handlerSliderLeft = () => {
        setCurrentIndex(prev => (prev === 0 ? children.length - 1 : prev - 1));
    }
    return (
        <div style={{ position: 'relative' }}>
            <SliderBtns>
                <SliderRightBtn
                    handlerSliderRight={handlerSliderRight}
                />
                <SliderLeftBtn
                    handlerSliderLeft={handlerSliderLeft}

                />
            </SliderBtns>
            <SliderContainer
                width={width}
            >
                <SliderTrack
                    offset={-currentIndex * 100}
                >
                    {children}

                </SliderTrack>
            </SliderContainer>
        </div>
    )
}

export default Slider;