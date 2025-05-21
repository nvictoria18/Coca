import { device } from "@/app/break-points";
import styled from "styled-components";

export const StyledSelector = styled.div<{
  topDesktop?: string;
  leftDesktop?: string;
  topMobile?: string;
  leftMobile?: string;
  sizeBgDesktop?: string;
  sizeSelectorDesktop?: string;
  sizeBgMobile?: string;
  sizeSelectorMobile?: string;
}>`
  width: ${({ sizeBgDesktop = '80px'}) => sizeBgDesktop};
  height: ${({ sizeBgDesktop = '80px'}) => sizeBgDesktop};
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
    width: ${({ sizeSelectorDesktop = '40px'}) => sizeSelectorDesktop};
    height: ${({ sizeSelectorDesktop = '40px'}) => sizeSelectorDesktop};
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 3;
    top: 50%;
    left: 50%;
  }

  @media (${device.mobile}) {
    width: ${({ sizeBgMobile = '40px'}) => sizeBgMobile};
    height: ${({ sizeBgMobile = '40px'}) => sizeBgMobile};
    top: ${({ topMobile = '86%'}) => topMobile};         
    left: ${({ leftMobile = '32%'}) => leftMobile};
    z-index: 1;

    .carousel__selector_background {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .carousel__selector_selector {
      width: ${({ sizeSelectorMobile = '24px'}) => sizeSelectorMobile};
      height: ${({ sizeSelectorMobile = '24px'}) => sizeSelectorMobile};
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