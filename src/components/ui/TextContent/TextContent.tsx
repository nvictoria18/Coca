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
  lineheight: LineHeight;
  width?: number;
  height?: number;
  sizemobile?: number;
  letterspacingmobile?: string;
  lineheightmobile?: string;
  fontweightmobile?: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color }) => color};
  font-size: 18px;
  font-family: ${colors.font};
  font-weight: 500;
  line-height: ${({ lineheight: lineHeight }) => lineHeight};
  letter-spacing: 0%;
  vertical-align: middle;

  @media (${device.mobile}) {
    font-size: ${({ sizemobile: sizeMobile = 14 }) => sizeMobile}px;
    line-height: ${({ lineheightmobile: lineHeightMobile = '20px' }) => lineHeightMobile};
    letter-spacing: ${({ letterspacingmobile: letterSpacingMobile = '0px' }) => letterSpacingMobile};
    font-weight: ${({ fontweightmobile: fontWeightMobile = 500 }) => fontWeightMobile}
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
      lineheight={lineHeight}
      color={color}
      sizemobile={sizeMobile}
      letterspacingmobile={letterSpacingMobile}
      lineheightmobile={lineHeightMobile}
      fontweightmobile={fontWeightMobile}
    >
      {children}
    </StyledTextOfHead>)
}

export default TextContent;