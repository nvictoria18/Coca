import styled, { css } from "styled-components";
import YellowEllipse from '@/image/Ellipse 125.svg';
import GreenEllipse from '@/image/Ellipse 124.svg';
import { inter } from "@/fonts/inter";
import Sales from '@/image/Sales - Light.svg';
import Growth from '@/image/Customer Growth - Light.svg';
import Static from '@/image/Statistic - Light.svg';
import colors from '@/app/colors';

export const StyledMain = styled.div`
  position: relative;
  height: 785px;
  width: 100%;
`

export const StyledYellowEllipse = styled(YellowEllipse)`
  position: absolute;
  bottom: 0px;
  left: 0px;
`

export const StyledGreenEllipse = styled(GreenEllipse)`
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
`

export const StyledTextBlock = styled.div`
  position: absolute;
  left: 100px;
  top: 393px;
  width: 617px;
  height: 126px;
  display: flex;
  gap: 27px;
`

export const Line = styled.div <{
  bg: string,
}> `
  margin-top: 22px;
  width: 78px;
  height: 1px;
  background-color: ${({ bg }) => bg };
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
`

export const StyledEnterEmail = styled.div`
  position: absolute;
  width:471px;
  height: 56px;
  top: 588px;
  left: 120px;
  display: flex;
`

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px ${colors.lightColor} solid;
  width: 100%;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 400;
  color: ${colors.grayColor};
  font-family: ${colors.font};
  &:after {
    content: "";
    display: block;
    width: 99%;
    height: 1px;
    background-color: ${colors.foreground};
  }
  &:focus {
    outline: none;
  }
`

export const graphic = css`
  position: absolute;
  box-shadow: 20px 40px 80px ${colors.shadow};
`

export const StyledSales = styled(Sales)`
  ${graphic}
  top: 155.87px;
  right: 186.9px;
`

export const StyledGrowth = styled(Growth)`
  ${graphic}
  top: 105px;
  right: 53.79px;
`

export const StyledStatic = styled(Static)`
  ${graphic}
  bottom: 135.15px;
  right: 186.9px;
`