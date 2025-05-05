import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const PartnersBlock = styled.div`
  height: 352px;
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
    padding: 30px 20px;
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
  margin: 22px 13.5px;
  height: 308px;
  display: flex;
  justify-content: center;
  gap: 30px;
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

  width: 323px;
  height: 147px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${device.mobile}) {
    width: 231px;
    height: 80px;
    gap: 8px;
  }
`