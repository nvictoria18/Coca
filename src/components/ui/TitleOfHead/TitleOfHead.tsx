import { device } from "@/app/break-points";
import colors from "@/app/colors"
import { ReactNode } from "react";
import styled from "styled-components"

type TitleProps = {
  children: string | ReactNode;
  color: string;
  width?: number;
  height?: number;
  size?: number;
  letterSpacing?: string;
  lineHeight?: string;
}

export const StyledTitleOfHead = styled.div<{
  color: string;
  width?: number;
  height?: number;
  size?: number;
  letterSpacing?: string;
  lineHeight?: string;
}>`
  width: ${({ width }) => width }px;
  height: ${({ height }) => height }px;
  color: ${({ color }) => color };
  font-size: ${({ size = 56 }) => size}px;
  font-family: ${colors.font};
  font-weight: 600;
  line-height: ${({lineHeight = '120%'}) => lineHeight};
  letter-spacing:  ${({ letterSpacing = '-2px' }) => letterSpacing};
  vertical-align: middle;

  @media (${device.mobile}) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px;
    height: 102px;
  }
`

const TitleOfHead: React.FC<TitleProps> = ({
  children,
  color,
  width,
  height,
  size,
  letterSpacing,
  lineHeight
}) => {
  return (<StyledTitleOfHead
    width={width}
    color={color}
    height={height}
    size={size}
    letterSpacing={letterSpacing}
    lineHeight={lineHeight}
  >
    {children}
  </StyledTitleOfHead>)
}

export default TitleOfHead;