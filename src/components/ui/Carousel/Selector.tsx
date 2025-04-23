import {
  StyledSelector,
} from "./Slider.style";
import SelectorSvg from '@/image/selector.svg';
import Bg from '@/image/slider.svg'


export const Selector = () => {
  return (
    <StyledSelector>
        <Bg className="selector-background" />
        <SelectorSvg className="selector" />
    </StyledSelector>
  )
}