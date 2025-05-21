import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const StyledHome = styled.div`
  margin: auto;
  padding: 105px 147px 135px 120px;

  @media (${device.desktop}) {

  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    
  }

  @media (${device.mobile}) {
    padding: 0px 20px 0px;

  }
`

export const AboutHome = styled.div`
  .about-slider {
    margin-left: 120px;
  }

  .about-slider {
    padding-bottom: 130px;
  }


`

export const TitleHome = styled.div`
  font-size: 72px;
  width: 45%;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 120%;

  @media (${device.desktop}) {
    width: 75%;
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    width: 100%;
  }

  @media (${device.mobile}) {
    width: 100%;
    font-size: 32px;
    letter-spacing: -1px;
    line-height: 40px;
  }
`

export const Paragraph = styled.div`
  display: flex;
  margin-top: 118px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .image {
    width: 162px;
    height: 162px;
  }

  .line {
    margin-top: 8px;
  }

  @media (${device.desktop}) {

  }


  @media (${device.mobile}) {
    margin-top: 48px;
    flex-direction: column;
    align-items: end;

    .image {
      width: 69px;
      height: 69px;
    }
  }
`

export const LinedText = styled.div`
  display: flex;
  gap: 24px;

  @media (${device.mobile}) {
    gap: 8px;
  }
`

export const Text = styled.div`
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -1px;
  font-weight: 600;
  position: relative;
  width: 70%;

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    width: 60%;

  }


  @media (${device.mobile}) {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    padding-left: 3px;
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 502px;

  .cart-image {
    width: 502px;
    max-height: 629px;
  }

  .cart-image.crop {
    width: 506px;
    height: 460px;
    object-fit: cover;
  }

  &:nth-last-child(4) .cart-image {
    width: 506px;
    height: 460px;
  }

  @media (${device.mobile}) {
    width: 335px;
    gap: 16px;
    .cart-image {
      width: 335px;
    }

    .cart.button {
      font-size: 14px;
      width: 43%;
    }
  }
`

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (${device.mobile}) {
    gap: 12px;
  }

`


export const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  @media (${device.mobile}) {
    
  }
`

export const BottomTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.3px;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
  }
`

export const CartText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0px;
  color: ${colors.grayColor};
  width: 100%;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
  }
`