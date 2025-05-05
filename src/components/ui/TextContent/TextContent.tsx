import { device } from "@/app/break-points";
import colors from "@/app/colors"
import { ReactNode } from "react";
import styled from "styled-components"

type LineHeight = '150%' | '32px'

type ContentProps = {
  className?: string;
  children: string | ReactNode;
  color: string;
  lineHeight: LineHeight;
  width?: number;
  height?: number;
  sizeMobile?: number;
  letterSpacingMobile?: string;
  lineHeightMobile?: string;
  fontWeightMobile?: number;
}

const StyledTextOfHead = styled.div<{
  color: string
  lineHeight: LineHeight;
  width?: number;
  height?: number;
  sizeMobile?: number;
  letterSpacingMobile?: string;
  lineHeightMobile?: string;
  fontWeightMobile?: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color }) => color};
  font-size: 18px;
  font-family: ${colors.font};
  font-weight: 500;
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: 0%;
  vertical-align: middle;

  @media (${device.mobile}) {
    font-size: ${({ sizeMobile = 14 }) => sizeMobile}px;
    line-height: ${({ lineHeightMobile = '20px' }) => lineHeightMobile};
    letter-spacing: ${({ letterSpacingMobile = '0px' }) => letterSpacingMobile};
    font-weight: ${({ fontWeightMobile = 500 }) => fontWeightMobile}
  }

  @media (${device.desktop}) {
  }
`

const TextContent: React.FC<ContentProps> = ({
  className, 
  children,
  color,
  lineHeight,
  width,
  height,
  sizeMobile,
  letterSpacingMobile,
  lineHeightMobile,
  fontWeightMobile,
}) => {
  return (
    <StyledTextOfHead
      className={className}
      width={width}
      height={height}
      lineHeight={lineHeight}
      color={color}
      sizeMobile={sizeMobile}
      letterSpacingMobile={letterSpacingMobile}
      lineHeightMobile={lineHeightMobile}
      fontWeightMobile={fontWeightMobile}
    >
      {children}
    </StyledTextOfHead>)
}

export default TextContent;