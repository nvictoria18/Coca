import colors from "@/app/colors";
import { ReactNode } from "react";
import styled from "styled-components";

type FrameProps = {
  children: string | ReactNode;
  width?: number;
  height?: number;
  color: string;
  lineHeight?: number;
}


const FrameTitleStyle = styled.div <{
  width?: number;
  height?: number;
  color: string;
  lineHeight?: number;
}> `
  height: ${({ height = 84 }) => height}px;
  width: ${({ width = 249 }) => width}px;
  color: ${({ color = colors.white}) => color};
  font-family: ${colors.font};
  font-weight: 600;
  font-size: 32px;
  line-height: ${({ lineHeight = 42 }) => lineHeight}px; 
  letter-spacing: -1px;
  vertical-align: middle;
`

export const FrameTitle: React.FC<FrameProps> = ({
  children,
  width,
  height,
  color,
  lineHeight
}) => {
  return (
    <FrameTitleStyle
      width={width}
      height={height}
      color={color}
      lineHeight={lineHeight}
    >
      {children}
    </FrameTitleStyle>)
}
