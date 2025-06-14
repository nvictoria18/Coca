import { device } from "@/app/break-points";
import styled from "styled-components";

export const StyledSelector = styled.div<{
  topdesktop?: string;
  leftdesktop?: string;
  topmobile?: string;
  leftmobile?: string;
  sizebgdesktop?: string;
  sizeselectordesktop?: string;
  sizebgmobile?: string;
  sizeselectormobile?: string;
}>`
  width: ${({ sizebgdesktop = '80px'}) => sizebgdesktop};
  height: ${({ sizebgdesktop = '80px'}) => sizebgdesktop};
  position: absolute;
  z-index: 1;
  top: ${({ topdesktop = '35%'}) => topdesktop};         
  left: ${({ leftdesktop = '50%'}) => leftdesktop};         
  transform: translate(-50%, -50%);
  .carousel__selector__background {
    position: relative;
    z-index: 2;
  }
  .carousel__selector_selector {
    width: ${({ sizeselectordesktop = '40px'}) => sizeselectordesktop};
    height: ${({ sizeselectordesktop = '40px'}) => sizeselectordesktop};
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 3;
    top: 50%;
    left: 50%;
  }

  @media (${device.mobile}) {
    width: ${({ sizebgmobile = '40px'}) => sizebgmobile};
    height: ${({ sizebgmobile = '40px'}) => sizebgmobile};
    top: ${({ topmobile: topMobile = '86%'}) => topMobile};         
    left: ${({ leftmobile = '32%'}) => leftmobile};
    z-index: 1;

    .carousel__selector_background {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .carousel__selector_selector {
      width: ${({ sizeselectormobile = '24px'}) => sizeselectormobile};
      height: ${({ sizeselectormobile = '24px'}) => sizeselectormobile};
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