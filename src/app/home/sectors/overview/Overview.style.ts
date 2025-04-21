import colors from "@/app/colors";
import styled from "styled-components";

export const StyledOverview = styled.div`
  width: 100%;
  background-color: ${colors.darkColor};
  height: 1142px;
  padding: 100px 127px 100px 120px;
  box-sizing: border-box;
`

export const StyledTextBlock = styled.div`
  width: 1193px;
  height: 942px;
`

export const StyledHeadTextBlock = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`

export const FramesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 259px;
  margin-top: 80px;
`

export const FramesList = styled.div <{
  width: 453 | 481;
}> `
  display: flex;
  height: 556px;
  width: ${(({ width = 453 }) => width)}px;
  flex-direction: column;
  gap: 56px;
`

export const Frame = styled.div <{
  mR: 0 | 54 | 80;
}> `
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: ${({ mR = 0 }) => mR}px;
`
