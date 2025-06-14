import {
  StyledSelector,
} from "./Carousel.style";
import { StyledImg } from "../StyledImg/StyledImg";

type SelectorProps = {
  topDesktop?: string;
  leftDesktop?: string;
  topMobile?: string;
  leftMobile?: string;
  sizeBgDesktop?: string;
  sizeSelectorDesktop?: string;
  sizeBgMobile?: string;
  sizeSelectorMobile?: string;
}


export const Selector = ({
  topDesktop,
  leftDesktop,
  topMobile,
  leftMobile,
  sizeBgDesktop,
  sizeSelectorDesktop,
  sizeBgMobile,
  sizeSelectorMobile,
}: SelectorProps) => {
  return (
    <StyledSelector
    className="carousel__selector"
    topdesktop={topDesktop}
    leftdesktop={leftDesktop}
    topmobile={topMobile}
    leftmobile={leftMobile}
    sizebgdesktop={sizeBgDesktop}
    sizeselectordesktop={sizeSelectorDesktop}
    sizebgmobile={sizeBgMobile}
    sizeselectormobile={sizeSelectorMobile}
    >
        <StyledImg className="carousel__selector_background" src="/image/slider.svg" />
        <StyledImg className="carousel__selector_selector" src="/image/selector.svg" />
    </StyledSelector>
  )
}