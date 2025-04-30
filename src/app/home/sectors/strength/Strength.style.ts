import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const Content = styled.div`
  height: 1272px;
  width: 100%;
  padding: 66px 120px 160px 120px;
  box-sizing: border-box;
  display: flex;
  gap: 80px;
  flex-direction: column;

  @media (${device.mobile}) {
    padding-top: 26px;
    padding-left: 20px;
    padding-right: 20px;
    padding: 26px 20px 56px;
    width: 100%;
  }
`

export const Stand = styled.div`
  width: 1157px;
  height: 149px;
  display: flex;
  
  @media (${device.mobile}) {
    width: 335px;
    height: 212px;
    flex-wrap: wrap;
    gap: 1px;
    height: 98px;
    justify-content: space-between;
  }
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

  @media (${device.mobile}) {
    width: 32px;


    &:after {
    height: 64px;
    left: 16px;
    }
  }
`

export const Couple = styled.div<{
  width: 176 | 151 | 199 | 160 | 143;
}>` 
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (${device.mobile}) {
    gap: 8px;
    width: 98px;
    height: 42px;
  }
`

export const BlockText = styled.div`
  display: flex;
  width: 1223px;
  gap: 25px;
  height: 201px;

  @media (${device.mobile}) {
    width: 335px;
    gap: 10px;
  }
`

export const StrengthImage = styled.div``