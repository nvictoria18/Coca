import {
  StyledSelector,
} from "./Carousel.style";
import { StyledImg } from "../StyledImg/StyledImg";

type SelectorProps = {
  topDesktop?: string;
  leftDesktop?: string;
  topMobile?: string;
  leftMobile?: string;
}


export const Selector = ({
  topDesktop,
  leftDesktop,
  topMobile,
  leftMobile,
}: SelectorProps) => {
  return (
    <StyledSelector
    className="carousel__selector"
    topDesktop={topDesktop}
    leftDesktop={leftDesktop}
    topMobile={topMobile}
    leftMobile={leftMobile}
    >
        <StyledImg className="carousel__selector_background" src="/image/slider.svg" />
        <StyledImg className="carousel__selector_selector" src="/image/selector.svg" />
    </StyledSelector>
  )
}