import { device } from "@/app/break-points";
import colors from "@/app/colors"
import { ReactNode } from "react";
import styled from "styled-components"

type TitleProps = {
  children?: string | ReactNode;
  color: string;
  width?: number;
  height?: number | string;
  size?: number;
  letterSpacing?: string;
  lineHeight?: string;
  sizeMobile?: number;
  lineHeightMobile?: string;
  letterSpacingMobile?: string;
  fontWeigthMobile?: number;
  heightMobile?: number;
}

export const StyledTitleOfHead = styled.div<{
  color: string;
  width?: number;
  height?: number | string;
  size?: number;
  letterSpacing?: string;
  lineHeight?: string;
  sizeMobile?: number;
  lineHeightMobile?: string;
  letterSpacingMobile?: string;
  fontWeigthMobile?: number;
  heightMobile?: number;
}>`
  width: ${({ width }) => width }px;
  height: ${({ height }) => height = 'auto' }px;
  color: ${({ color }) => color };
  font-size: ${({ size = 56 }) => size}px;
  font-family: ${colors.font};
  font-weight: 600;
  line-height: ${({lineHeight = '120%'}) => lineHeight};
  letter-spacing:  ${({ letterSpacing = '-2px' }) => letterSpacing};
  vertical-align: middle;

  @media (${device.mobile}) {
    font-size: ${({ sizeMobile = 24 }) => sizeMobile}px;
    line-height: ${({ lineHeightMobile = '34px' }) => lineHeightMobile};
    letter-spacing: ${({ letterSpacingMobile = '0px'}) => letterSpacingMobile};
    letter-spacing: ${({ fontWeigthMobile = 600 }) => fontWeigthMobile};
    height: ${({ heightMobile = 102 }) => heightMobile}px;
  }
`

const TitleOfHead: React.FC<TitleProps> = ({
  children,
  color,
  width,
  height,
  size,
  letterSpacing,
  lineHeight,
  sizeMobile,
  lineHeightMobile,
  letterSpacingMobile,
  fontWeigthMobile,
  heightMobile,

}) => {
  return (<StyledTitleOfHead
    width={width}
    color={color}
    height={height}
    size={size}
    letterSpacing={letterSpacing}
    lineHeight={lineHeight}
    sizeMobile={sizeMobile}
    lineHeightMobile={lineHeightMobile}
    letterSpacingMobile={letterSpacingMobile}
    fontWeigthMobile={fontWeigthMobile}
    heightMobile={heightMobile}
  >
    {children}
  </StyledTitleOfHead>)
}

export default TitleOfHead;