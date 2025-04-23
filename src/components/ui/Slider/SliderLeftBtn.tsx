import { StyledBtn } from "./Slider.style"
import LeftSlider from '@/image/Frame 1171275052.svg'

type SliderLeftBtnProps = {
    handlerSliderLeft: () => void
}

export const SliderLeftBtn: React.FC<SliderLeftBtnProps> = ({
    handlerSliderLeft
}) => {
    return (
        <StyledBtn
            onClick={handlerSliderLeft}
        >
            <LeftSlider className="left-btn" />
        </StyledBtn>
    )
}