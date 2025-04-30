import { device } from "@/app/break-points";
import colors from "@/app/colors"
import { ReactNode } from "react";
import styled from "styled-components"

type LineHeight = '150%' | '32px'

type ContentProps = {
  children: string | ReactNode;
  color: string;
  lineHeight: LineHeight;
  width?: number;
  height?: number;
}

const StyledTextOfHead = styled.div<{
  color: string
  lineHeight: LineHeight;
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color }) => color};
  font-size: 18px;
  font-family: ${colors.font};
  font-weight: 500;
  line-height: ${({ lineHeight }) => lineHeight };
  letter-spacing: 0%;
  vertical-align: middle;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
  }

  @media (${device.desktop}) {
  }
`

const TextContent: React.FC<ContentProps> = ({
  children,
  color,
  lineHeight,
  width,
  height
}) => {
  return (
    <StyledTextOfHead
      width={width}
      height={height}
      lineHeight={lineHeight}
      color={color}
    >
      {children}
    </StyledTextOfHead>)
}

export default TextContent;