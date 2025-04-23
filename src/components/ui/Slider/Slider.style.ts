import styled from "styled-components";

export const SliderContainer = styled.div<{
    width: number;
}>`
  position: relative;
  overflow: hidden;
  box-sizing: content-box;
  width: ${({ width = 1039}) => width }px;
`

export const SliderBtns = styled.div`
    position: absolute;
    top: 241px;
    bottom: 3px;
    left: 923px;
` 

export const SliderTrack = styled.div<{
    offset: number;
}>`
    width: 1039px;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${({ offset }) => offset }%);
    display: flex;
    flex-direction: row;
    position: relative;

`

export const StyledBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    position: absolute;
    z-index: 2;
    .left-btn {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .right-btn {
        position: absolute;
        top: 0px;
        left: 66px;
    }
`