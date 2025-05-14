import { device } from "@/app/break-points";
import colors from "@/app/colors";
import { Theme } from "@/types/Themes";
import styled from "styled-components"

interface ButtonProps {
  className?: string;
  children: string;
  theme: Theme;
  width?: number;
  size?: number;
  border?: string;
}

const StyledButton = styled.button<{
  width?: number;
  size?: number;
  theme: string;
  border?: string;
}>`
    background-color: ${({ theme }) => theme === 'light' ? colors.darkColor : colors.white};
    border-radius: 100px;
    width: ${({ width = 175}) => width}px;
    height: 56px;
    font-size: ${({ size }) => size}px;
    font-weight: 700;
    line-height: 14px;
    font-family: ${colors.font};
    color: ${({ theme }) => theme === 'light' ? colors.white : colors.black};
    transition: all 0.2s ease-in-out;
    border: ${({ border = 'none'}) => border};
    &:hover {
      background-color: ${colors.grayColor};
      color: ${colors.darkColor};
    }

    @media (${device.mobile}) {
      width: 108px;
      height: 36px;
      font-size: 12px;
      line-height: 20px;
      padding: 0px;
      box-sizing: border-box;
    }
`

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  theme,
  width,
  size,
  border,
}) => {
  return (<StyledButton
    className={className}
    width={width}
    size={size}
    theme={theme}
    border={border}
  >
    {children}
  </StyledButton>)
}