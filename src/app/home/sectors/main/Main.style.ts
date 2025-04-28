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

  @media (${device.laptop}) {
    max-width: 375px;
  }

  @media (${device.mobile}) {
      height: 918px;
  }
`

export const StyledYellowEllipse = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`

export const StyledGreenEllipse = styled.div`
  position: absolute;
  right: 0px;
  top: 1px;
  
`

export const InsideMain = styled.div``

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
    top: 128px;
    left: 20px;
    right: 20px;
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

  @media (${device.mobile}) {
    width: 303px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
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
    top: 268px;
    left: 20px;
    width: 335px;
    height: 36px;
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

  @media (${device.mobile}) {
    width: 219px;
    font-size: 14px;
    line-height: 20px;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
`

export const graphic = css`
  position: absolute;
  box-shadow: 20px 40px 80px ${colors.shadow};
`;

export const StyledSales = styled.div`
  ${graphic}
  width: 100%;
  max-width: 419px;
  
  top:  155.87px;
  right: 186.9px;

  @media (${device.mobile}) {
    max-width: 335px;
    top:  464px;
    right: 20px;
  }

  @media (${device.laptop}) {
    top:  155.87px;
    right: 186.9px;
    max-width: 419px;
  }
`;


export const StyledGrowth = styled.div`
  ${graphic}
  width: 100%;
  max-width: 213.21px;
  top: 105px;
  right: 53.79px;

  @media (${device.mobile}) {
    max-width: 118px;
    top: 464px;
    left: 265px;

  }

  @media (${device.laptop}) {
    top: 105px;
    right: 53.79px;
    max-width: 213.21px;
  }
`
export const StyledStatic = styled.div`
  ${graphic}
  width: 100%;
  max-width: 419px;
  bottom: 135.15px;
  right: 186.9px;

  @media (${device.mobile}) {
    max-width: 335px;
    top: 766px;
    left: 20px;
  }

  @media (${device.laptop}) {
    max-width: 419px;
    bottom: 135.15px;
    right: 186.9px;
  }
`;