import {
  StyledSelector,
} from "./Carousel.style";
import { StyledImg } from "../StyledImg/StyledImg";


export const Selector = () => {
  return (
    <StyledSelector className="carousel__selector">
        <StyledImg className="carousel__selector_background" src="/image/slider.svg" />
        <StyledImg className="carousel__selector_selector" src="/image/selector.svg" />
    </StyledSelector>
  )
}