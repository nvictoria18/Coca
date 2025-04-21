import styled from "styled-components";
import Bg from '@/image/slider.svg'

export const StyledSelector = styled.div`
  background-image: url(${Bg});

  width: 80px;
  height: 80px;
  position: relative;
  svg.slider-background {
    position: absolute;
    z-index: 1;
  }
  svg.slider-selector {
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 20px;
  }
`;

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    touch-action: pan-y;
    cursor: grab;
    :active {
    cursor: grabbing;
  }
`

export const CarouselTrack = styled.div`
  display: flex;
  height: 100%;
`

export const CarouselItem = styled.div`
    min-width: 100%;
    flex-shrink: 0;
    user-select: none;
`
