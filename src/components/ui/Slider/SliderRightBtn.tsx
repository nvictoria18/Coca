import { StyledBtn } from "./Slider.style"
import RightSlider from '@/image/Frame 1171275053.svg'

type SliderRightBtnProps = {
    handlerSliderRight: () => void
}

export const SliderRightBtn: React.FC<SliderRightBtnProps> = ({
    handlerSliderRight
}) => {
    return (
        <StyledBtn
            onClick={handlerSliderRight}
        >
            <RightSlider className="right-btn" />
        </StyledBtn>
    )
}