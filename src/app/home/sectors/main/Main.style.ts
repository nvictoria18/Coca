import styled, { css } from "styled-components";
// import YellowEllipse from '@/image/Ellipse 125.svg';
// import GreenEllipse from '@/image/Ellipse 124.svg';
import { inter } from "@/fonts/inter";
import colors from '@/app/colors';
import { device } from "@/app/break-points";

export const StyledMain = styled.div`
  position: relative;
  height: 785px;
  width: 100%;
  margin: auto;
  
  @media (${device.mobile}) {
    overflow:hidden;
    height: 842px;
    width: 375px;
    margin-top: 32px;
    margin-bottom: 25px;
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    max-width: 1440px;
    height: 785px;
  }

  @media (${device.desktop}){
    max-width: 1440px;
    height: 785px;
  }
`

export const Lights = styled.div`
  position: relative;

  @media (${device.mobile}) {
    max-width: 375px;
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    max-width: 1440px;
  }

  @media (${device.desktop}) {
    min-width: 1440px;
  }
`

export const StyledYellowEllipse = styled.div`
  position: absolute;
  top: 13px;
  left: 51px;

  @media (${device.mobile}) {
    top: 0px;
    right: 0px;
    
    .orange-light {
      width: 228px;
    }
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    bottom: 0px;
    left: 0px;
  }

  @media (${device.desktop}){
    bottom: 0px;
    left: 0px;
  }

`

export const StyledGreenEllipse = styled.div`
  position: absolute;
  right: 0px;
  top: 1px;
  @media (${device.mobile}) {
    top: 203px;
    right: 277px;
    
    .green-light {
      width: 197px;
    }
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    right: 0px;
    top: 1px;
  }

  @media (${device.desktop}){
    right: 0px;
    top: 1px;
  }
`

export const InsideMain = styled.div`
`

export const StyledText = styled.div`
  position: absolute;
  left: 120px;
  top: 87px;
  width: 740px;
  color: ${colors.darkColor};
  font-size: 80px;
  line-height: 120%;
  letter-spacing: -3px;
  font-family: var(--font);
  font-weight: 700;

  @media (${device.desktop}) {
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    min-width: 335px;
    font-size: clamp(2rem, -1.75rem + 12vw, 5rem);
    }

  @media (${device.mobile}) {
    width: 335px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    top: 0px;
    left: 20px;
    right: 20px;
  }
`

export const StyledTextBlock = styled.div`
  position: absolute;
  left: 120px;
  top: 393px;
  width: 617px;
  height: 126px;
  display: flex;
  gap: 27px;

  @media (${device.mobile}) {
    width: 335px;
    top: 127px;
    left: 20px;
    right: 20px;
    gap: 8px;
  }

  @media (${device.desktop}) {

  }
`

export const Line = styled.div<{
  bg: string,
}>`
  margin-top: 22px;
  width: 78px;
  height: 1px;
  background-color: ${({ bg }) => bg};

  @media (${device.mobile}) {
    width: 24px;
    margin-top: 11px;
  }

  @media (${device.desktop}) {
  }
`

export const Text = styled.div`
  width: 514px;
  letter-spacing: -1px;
  vertical-align: middle;
  white-space: pre-wrap;
  font-size: 32px;
  line-height: 42px;
  color: ${colors.darkColor};
  font-family: ${colors.font};
  src: url(${inter});
  font-weight: 600;

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    min-width: 303px;
    font-size: 3vw;
  }

  @media (${device.mobile}) {
    width: 303px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
  }

  @media (${device.desktop}) {

  }
`

export const StyledEnterEmail = styled.div`
  position: absolute;
  width:471px;
  height: 56px;
  top: 588px;
  left: 120px;
  display: flex;
  gap: 16px;

  @media (${device.mobile}) {
    top: 264px;
    left: 20px;
    width: 335px;
    height: 36px;
    gap: 8px;
  }

`

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px ${colors.lightColor} solid;
  width: 280px;
  padding-bottom: 25px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 400;
  color: ${colors.grayColor};
  font-family: ${colors.font};
  margin-top: 9px;
  vertical-align: text-top;
  &:focus {
    outline: none;
  }

  @media (${device.mobile}) {
    width: 219px;
    font-size: 14px;
    line-height: 20px;
    height: 100%;
    padding: 0px;
    margin-top: 0px;
    &::placeholder {
    transform: translateY(-9px);
  }
  }

  @media (${device.desktop}) {

  }
`


export const graphic = css`
  position: absolute;
  box-shadow: 20px 40px 80px ${colors.shadow};
`;

export const ContainerSales = styled.div`
  width: 100%;
  position: relative;
  height: auto;

  .sales {
    ${graphic}
    width: 419px;
    left: 834px;
    top: 155.87px;
    z-index: 2;
  }

  .growth {
    ${graphic}
    width: 213.21px;
    top: 105px;
    right: 53.79px;
    z-index: 3;
  }

  .statistic {
    ${graphic}
    width: 419px;
    z-index: 1;
    top: 530.74px;
    left: 834px;
  }

  @media (${device.mobile}) {
    min-width: 335px;

    .sales {
      width: 335px;
      left: 20px;
      top: 356px;
      z-index: 2;
    }

    .growth {
      width: 118px;
      top: 356px;
      left: 285px;
      z-index: 3;
    }

    .statistic {
      width: 335px;
      z-index: 1;
      top: 658px;
      left: 20px;
    }
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    min-width: 335px;
  }

  @media (${device.desktop}){
  }
`