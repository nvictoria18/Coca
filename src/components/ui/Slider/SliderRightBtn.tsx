import { StyledImg } from "../StyledImg/StyledImg"
import { StyledBtn } from "./Slider.style"

type SliderRightBtnProps = {
    handlerSliderRight: () => void;
    className: string;
}

export const SliderRightBtn: React.FC<SliderRightBtnProps> = ({
    className,
    handlerSliderRight
}) => {
    return (
        <StyledBtn
            className={className}
            onClick={handlerSliderRight}
        >
            <StyledImg
                src="/image/Frame 1171275053.svg"
                className="right-btn"
            />
        </StyledBtn>
    )
}