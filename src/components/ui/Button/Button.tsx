import colors from "@/app/colors";
import { Theme } from "@/types/Themes";
import styled from "styled-components"

interface ButtonProps {
  children: string;
  theme: Theme;
  width?: number;
  size?: number;
}

const StyledButton = styled.button<{
  width?: number;
  size?: number;
  theme: string;
}>`
    background-color: ${({ theme }) => theme === 'light' ? colors.darkColor : colors.white};
    border: none;
    border-radius: 100px;
    width: ${({ width = 175}) => width}px;
    height: 56px;
    font-weight: 700;
    line-height: 14px;
    font-family: ${colors.font};
    color: ${({ theme }) => theme === 'light' ? colors.white : colors.black};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${colors.grayColor};
      color: ${colors.darkColor};
    }
`

export const Button: React.FC<ButtonProps> = ({
  children,
  theme,
  width,
  size,
}) => {
  return (<StyledButton
    width={width}
    size={size}
    theme={theme}
  >
    {children}
  </StyledButton>)
}