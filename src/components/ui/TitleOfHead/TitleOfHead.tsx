import colors from "@/app/colors"
import { ReactNode } from "react";
import styled from "styled-components"

type TitleProps = {
  children: string | ReactNode;
  color: string;
  width?: number;
  height?: number;
  size?: number;
  letterSpacing?: number;
}

export const StyledTitleOfHead = styled.div <{
  color: string;
  width?: number;
  height?: number;
  size?: number;
  letterSpacing?: number
}> `
  width: ${({ width }) => width }px;
  height: ${({ height }) => height }px;
  color: ${({ color }) => color };
  font-size: ${({ size = 56 }) => size}px;
  font-family: ${colors.font};
  font-weight: 600;
  line-height: 120%;
  letter-spacing:  ${({ letterSpacing = -2 }) => letterSpacing}px;
  vertical-align: middle;
`

const TitleOfHead: React.FC<TitleProps> = ({
  children,
  color,
  width,
  height,
  size,
  letterSpacing
}) => {
  return (<StyledTitleOfHead
    width={width}
    color={color}
    height={height}
    size={size}
    letterSpacing={letterSpacing}
  >
    {children}
  </StyledTitleOfHead>)
}

export default TitleOfHead;