import { device } from "@/app/break-points"
import colors from "@/app/colors"
import styled from "styled-components"

export const StyledAccordion = styled.div`
  box-sizing: border-box;
  width: 100%;
  gap: 16px;
  `

export const Content = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  gap: 16px;
  flex-direction: column;
  .accordion.text.open {
    max-height: 500px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .accordion.text.hidden {
    max-height: 0px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0px;
    background-color: ${colors.lightGrayColoLine};
  }

  @media (${device.mobile}) {
    gap: 12px;
  }
`

export const VisibleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${colors.white};

  img {
    width: 24px;
    height: 24px;
  }

  @media (${device.mobile}) {
    img {
      width: 16px;
      height: 16px;

    }
  }
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.darkColor};
  letter-spacing: 0px;
  line-height: 150%;


  @media (${device.mobile}) {
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 24 px;
  }
`

export const HiddenTextAccordion = styled.div`
  overflow: hidden;
  max-height: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.grayColor};
  letter-spacing: 0px;
  line-height: 32px;
  width: 641px;
  margin-bottom: 16px;

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
    margin-bottom: 12px;
    width: 310px;
  }
`

export const Btn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0px;
`
