import { device } from "@/app/break-points";
import colors from "@/app/colors";
import { ReactNode } from "react";
import styled from "styled-components";

type FrameProps = {
  children: string | ReactNode;
  width?: number;
  height?: number;
  color: string;
  lineHeight?: number;
  className?: string;
  widthMobile?: number | string;
  heightMobile?: string;
  fontSizeMobile?: string;
  lineHeightMobile?: string;
  letterSpacingMobile?: string;
}

const FrameTitleStyle = styled.div<{
  width?: number;
  height?: number;
  color: string;
  lineHeight?: number;
  widthMobile?: number | string;
  heightMobile?: string;
  fontSizeMobile?: string;
  lineHeightMobile?: string;
  letterSpacingMobile?: string;
}>`
  height: ${({ height = 84 }) => height}px;
  width: ${({ width = 249 }) => width}px;
  color: ${({ color = colors.white}) => color};
  font-family: ${colors.font};
  font-weight: 600;
  font-size: 32px;
  line-height: ${({ lineHeight = 42 }) => lineHeight}px; 
  letter-spacing: -1px;
  vertical-align: middle;

  @media (${device.mobile}) {
    width: ${({ widthMobile = 'auto' }) => widthMobile};
    font-size: ${({ fontSizeMobile = '18px' }) => fontSizeMobile};
    letter-spacing: ${({ letterSpacingMobile = '0px' }) => letterSpacingMobile};
    line-height: ${({ lineHeightMobile = '26px' }) => lineHeightMobile};
    height: ${({ heightMobile = 'auto' }) => heightMobile}; //26
  }
`

export const FrameTitle: React.FC<FrameProps> = ({
  children,
  width,
  height,
  color,
  lineHeight,
  className,
  widthMobile,
  heightMobile,
  fontSizeMobile,
  lineHeightMobile,
  letterSpacingMobile,
}) => {
  return (
    <FrameTitleStyle
      width={width}
      height={height}
      color={color}
      lineHeight={lineHeight}
      className={className}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
      fontSizeMobile={fontSizeMobile}
      lineHeightMobile={lineHeightMobile}
      letterSpacingMobile={letterSpacingMobile}
    >
      {children}
    </FrameTitleStyle>)
}
