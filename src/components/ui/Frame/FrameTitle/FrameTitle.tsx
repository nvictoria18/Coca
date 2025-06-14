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
  lineheight?: number;
  widthmobile?: number | string;
  heightmobile?: string;
  fontsizemobile?: string;
  lineheightmobile?: string;
  letterspacingmobile?: string;
}>`
  height: ${({ height = 84 }) => height}px;
  width: ${({ width = 249 }) => width}px;
  color: ${({ color = colors.white}) => color};
  font-family: ${colors.font};
  font-weight: 600;
  font-size: 32px;
  line-height: ${({ lineheight = 42 }) => lineheight}px; 
  letter-spacing: -1px;
  vertical-align: middle;

  @media (${device.mobile}) {
    width: ${({ widthmobile: widthMobile = 'auto' }) => widthMobile};
    font-size: ${({ fontsizemobile = '18px' }) => fontsizemobile};
    letter-spacing: ${({ letterspacingmobile = '0px' }) => letterspacingmobile};
    line-height: ${({ lineheightmobile = '26px' }) => lineheightmobile};
    height: ${({ heightmobile = 'auto' }) => heightmobile}; //26
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
      lineheight={lineHeight}
      className={className}
      widthmobile={widthMobile}
      heightmobile={heightMobile}
      fontsizemobile={fontSizeMobile}
      lineheightmobile={lineHeightMobile}
      letterspacingmobile={letterSpacingMobile}
    >
      {children}
    </FrameTitleStyle>)
}
