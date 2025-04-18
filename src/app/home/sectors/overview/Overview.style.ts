import colors from "@/app/colors";
import styled from "styled-components";

export const StyledOverview = styled.div`
  width: 100%;
  background-color: ${colors.darkColor};
  height: 1142px;
  padding: 100px 127px 120px 100px;
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

export const StyledTitleOfHead = styled.div`
  width: 816px;
  height: 201px;
  color: ${colors.white};
  font-size: 56px;
  font-family: ${colors.font};
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -2px;
  vertical-align: middle;
`

export const StyledTextOfHead = styled.div`
  width: 660px;
  height: 81px;
  color: ${colors.grayColor};
  font-size: 18px;
  font-family: ${colors.font};
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
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
  marginRight?: 0 | 54 | 80;
}> `
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
`

export const FrameTitle = styled.div <{
  width: 249 | 293
}> `
  height: 84px;
  width: ${({ width = 249 }) => width}px;
  color: ${colors.white};
  font-family: ${colors.font};
  font-weight: 600;
  font-size: 32px;
  line-height: 42px; 
  letter-spacing: -1px;
  vertical-align: middle;
`

export const FrameText = styled.div <{
  width: 446 | 401 | 453 | 481,
}> `
  height: 78px;
  width: ${({ width = 446 }) => width}px;
  color: ${colors.grayColor};
  font-family: ${colors.font};
  font-weight: 500;
  font-size: 16px;
  line-height: 26px; 
  letter-spacing: 0px;
  vertical-align: middle;
`
