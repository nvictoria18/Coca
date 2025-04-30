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
}

const FrameTitleStyle = styled.div<{
  width?: number;
  height?: number;
  color: string;
  lineHeight?: number;
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
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    height: 26px;
  }
`

export const FrameTitle: React.FC<FrameProps> = ({
  children,
  width,
  height,
  color,
  lineHeight,
  className,
}) => {
  return (
    <FrameTitleStyle
      width={width}
      height={height}
      color={color}
      lineHeight={lineHeight}
      className={className}
    >
      {children}
    </FrameTitleStyle>)
}
