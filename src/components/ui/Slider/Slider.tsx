import { ReactNode, useRef, useState } from "react";
import {
    SliderBtns,
    SliderContainer,
    SliderTrack,
    StyledSlider
} from "./Slider.style";
import { SliderLeftBtn } from "./SliderLeftBtn";
import { SliderRightBtn } from "./SliderRightBtn";

type SliderProps = {
    children: ReactNode[];
    width: number;
    className?: string;
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
        <StyledSlider
            className="styled__slider"
            width={width}
        >
            <SliderBtns
                className="slider__buttons"
                >
                <SliderRightBtn
                    className="slider__buttons right"
                    handlerSliderRight={handlerSliderRight}
                />
                <SliderLeftBtn
                    className="slider__buttons left"
                    handlerSliderLeft={handlerSliderLeft}

                />
            </SliderBtns>
            <SliderContainer
                className="slider__container"
                width={width}
            >
                <SliderTrack
                    width={width}
                    className="slider__container__track"
                    offset={-currentIndex * 100}
                >
                    {children}

                </SliderTrack>
            </SliderContainer>
        </StyledSlider>
    )
}

export default Slider;