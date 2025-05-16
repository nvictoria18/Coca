import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const PartnersBlock = styled.div`
  height: 308px;
  box-sizing: border-box;

  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 1200px;
    background-color: ${colors.lightGrayColoLine};
    margin: auto;
  }
  &:before {
    content: "";
    display: block;
    height: 1px;
    width: 1200px;
    margin: auto;
    background-color: ${colors.lightGrayColoLine};
  }

  @media (${device.mobile}) {
    padding: 20px 20px;
    width: 335px;
    box-sizing: content-box;
    height: 440px;

    &:after {
      display: none;
    }

    &:before {
      display: none;
    }
  }
`

export const InsideBlock = styled.div`
  height: 308px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;

  @media (${device.mobile}) {
    flex-direction: column;
    margin: 0px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
`

export const TablePartners = styled.div`
  height: 180px;
  display: grid;
  grid-template-rows: repeat(2, 90px);
  grid-template-columns: repeat(4, 160px);
  gap: 0px 30px;

  @media (${device.mobile}) {
    width: 231px;
    grid-template-rows: repeat(4, 70px);
    grid-template-columns: repeat(2, 125px);
    gap: 15px 14px;
    margin: 0px;
  }
`

export const Text = styled.div`
  width: 359px;
  height: 136px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .partners-container.title {
    font-size: 48px;
    line-height: 64px;
    letter-spacing: 0px;
    font-weight: 700;
  }

  @media (${device.mobile}) {
    width: 231px;
    height: 80px;
    gap: 8px;
  }
`

export const Title = styled.div`
  font-size: 48px;
  line-height: 64px;
  letter-spacing: 0px;
  font-weight: 700;
  color: ${colors.darkColor};
`
export const BottomText = styled.div`
  width: 309px;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0px;
  font-weight: 500;
  color: ${colors.grayColor};

`