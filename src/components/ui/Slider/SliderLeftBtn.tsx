import { StyledImg } from "../StyledImg/StyledImg"
import { StyledBtn } from "./Slider.style"

type SliderLeftBtnProps = {
    handlerSliderLeft: () => void;
    className: string;
}

export const SliderLeftBtn: React.FC<SliderLeftBtnProps> = ({
    handlerSliderLeft,
    className,
}) => {
    return (
        <StyledBtn
            className={className}
            onClick={handlerSliderLeft}
        >
            <StyledImg
            src="/image/Frame 1171275052.svg"
            className="left-btn" />
        </StyledBtn>
    )
}