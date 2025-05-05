import { device } from "@/app/break-points";
import styled from "styled-components";

export const StyledSelector = styled.div<{
  
}>`
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 35%;         
  left: 50%;    
  transform: translate(-50%, -50%);
  svg.carousel__selector__background {
    position: absolute;
    z-index: 2;
  }
  svg.carousel__selector__selector {
    position: absolute;
    z-index: 3;
    top: 20px;
    left: 20px;
  }

  @media (${device.mobile}) {
    width: 40px;
    height: 40px;
    left: 86%;
    top: 32%;

    .carousel__selector_background {
      position: absolute;
    }
    .carousel__selector_selector {
      width: 24px;
      position: absolute;
      top: 8px;
      left: 8px;
    }
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

  @media (${device.mobile}) {
    gap: 16px;
  }
`

export const CarouselItems = styled.div`
  position: relative;
`