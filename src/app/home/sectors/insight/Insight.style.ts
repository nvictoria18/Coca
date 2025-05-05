import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const Block = styled.div`
  padding: 60px 120px 91px;

  @media (${device.mobile}) {
    padding: 25px 0px 25px 20px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  .carousel {
    padding-bottom: 50px; 
  }

  @media (${device.mobile}) {
    gap: 32px; 
  }

`

export const Text = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (${device.mobile}) {
    margin: 0px;
    align-items: flex-start;
    gap: 16px;
  }

`

export const Carts = styled.div`
  padding-top: 5px;
  @media (${device.mobile}) {
    padding-top: 5px;
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 582px;
  height: 481px;

  img {
    width: 582px;
    height: 332px;
  }

  @media (${device.mobile}) {
    width: 299px;
    height: 275px;
    gap: 8px;

    img {
      width: 299px;
      height: auto;
    }
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (${device.mobile}) {
    padding-top: 13px;
  }
`

export const FontInfo = styled.span`
  color: ${colors.grayColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;

  @media (${device.mobile}) {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0%;
    font-weight: 400;
  }
`

