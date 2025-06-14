import { device } from "@/app/break-points";
import colors from "@/app/colors";
import { ReactNode } from "react";
import styled from "styled-components";

type FrameProps = {
  children: string | ReactNode;
  width?: number;
  height?: number;
  color: string;
  lineHeight?: string;
  letterSpacing?: string;
  mobileHeight?: 80 | 60;
  widthMobile?: number | string;
}

const FrameTextStyle = styled.div<{
  width?: number;
  height?: number;
  color: string;
  lineheight?: string;
  letterspacing?: string;
  mobileheight?: 80 | 60,
  widthmobile?: number | string;
}>`
  height: ${({ height = 78 }) => height}px;
  width: ${({ width = 446 }) => width}px;
  color: ${({ color = colors.grayColor }) => color};
  font-family: ${colors.font};
  font-weight: 500;
  font-size: 16px;
  line-height: ${({ lineheight: lineHeight = '26px' }) => lineHeight }; 
  letter-spacing: ${({ letterspacing: letterSpacing = '0px' }) => letterSpacing };
  vertical-align: middle;

  @media (${device.mobile}) {
    height: ${({ mobileheight: mobileHeight = 60 }) => mobileHeight}px;
    width: ${({ widthmobile: widthMobile = 'auto' }) => widthMobile};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`

export const FrameText: React.FC<FrameProps> = ({
  children,
  width,
  height,
  color,
  lineHeight,
  letterSpacing,
  mobileHeight,
  widthMobile
}) => {
  return (
    <FrameTextStyle
      width={width}
      height={height}
      color={color}
      lineheight={lineHeight}
      letterspacing={letterSpacing}
      mobileheight={mobileHeight}
      widthmobile={widthMobile}
    >
      {children}
    </FrameTextStyle>)
}