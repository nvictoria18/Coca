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
}

const FrameTextStyle = styled.div <{
  width?: number;
  height?: number;
  color: string;
  lineHeight?: string;
  letterSpacing?: string;
}> `
  height: ${({ height = 78 }) => height}px;
  width: ${({ width = 446 }) => width}px;
  color: ${({ color = colors.grayColor }) => color};
  font-family: ${colors.font};
  font-weight: 500;
  font-size: 16px;
  line-height: ${({ lineHeight = '26px' }) => lineHeight }; 
  letter-spacing: ${({ letterSpacing = '0px' }) => letterSpacing };
  vertical-align: middle;
`

export const FrameText: React.FC<FrameProps> = ({
  children,
  width,
  height,
  color,
  lineHeight,
  letterSpacing
}) => {
  return (
    <FrameTextStyle
      width={width}
      height={height}
      color={color}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
    >
      {children}
    </FrameTextStyle>)
}