import colors from "@/app/colors";
import styled from "styled-components";

export const Content = styled.div`
  height: 1272px;
  width: 100%;
  padding: 66px 120px 160px 120px;
  box-sizing: border-box;
  display: flex;
  gap: 80px;

  /* align-items: center; */
  flex-direction: column;
`

export const Stand = styled.div`
  width: 1157px;
  height: 149px;
  display: flex;
`

export const Line = styled.div`
  width: 144px;
  height: 100%;
  &:after {
    content: "";
    position: relative;
    width: 1px;
    height: 99px;
    display: block;
    background-color: ${colors.lightColor};
    left: 72px;
    top: 25px;
  }
`

export const Couple = styled.div<{
  width: 176 | 151 | 199;
}>` 
  width: ${({ width }) => width }px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const BlockText = styled.div`
  display: flex;
  width: 1223px;
  gap: 25px;
  height: 201px;
`