import styled from "styled-components";
import Bg from '@/image/slider.svg'

export const StyledSelector = styled.div<{
  
}>`
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 35%;         
  left: 50%;    
  transform: translate(-50%, -50%);
  svg.selector-background {
    position: absolute;
    z-index: 2;
  }
  svg.selector {
    position: absolute;
    z-index: 3;
    top: 20px;
    left: 20px;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  overflow-x: auto;
  scrollbar-color: transparent transparent;
  position: relative;
  user-select: none; // пользователь может выделять текст
  ::-webkit-scrollbar {
    height: 1px;
    background-color: transparent;
  }
`

export const CarouselItems = styled.div`
  position: relative;
`