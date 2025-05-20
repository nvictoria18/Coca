import { device } from "@/app/break-points";
import styled from "styled-components";

export const StyledSelector = styled.div<{
  topDesktop?: string;
  leftDesktop?: string;
  topMobile?: string;
  leftMobile?: string;

}>`
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 1;
  top: ${({ topDesktop = '35%'}) => topDesktop};         
  left: ${({ leftDesktop = '50%'}) => leftDesktop};         
  transform: translate(-50%, -50%);
  .carousel__selector__background {
    position: relative;
    z-index: 2;
  }
  .carousel__selector_selector {
    width: 40px;
    height: 40px;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 3;
    top: 50%;
    left: 50%;
  }

  @media (${device.mobile}) {
    width: 40px;
    height: 40px;
    top: ${({ topMobile = '86%'}) => topMobile};         
    left: ${({ leftMobile = '32%'}) => leftMobile};
    z-index: 1;

    .carousel__selector_background {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .carousel__selector_selector {
      width: 24px;
      height: 24px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

export const Navigation = styled.div``

export const CarouselItems = styled.div`
  position: relative;
`