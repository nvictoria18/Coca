import styled from "styled-components"

interface ButtonProps {
  children: string;
}

const StyledButton = styled.button`
  background-color: var(--dark-color);
  border: none;
  border-radius: 100px;
  width: 175px;
  height: 56px;
  font-weight: 700;
  line-height: 14px;
  font-family: var(--font);
  color: var(--background);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--gray-color);
    color: var(--dark-color);
  }
`

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}