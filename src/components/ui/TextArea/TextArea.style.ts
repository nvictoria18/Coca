import colors from "@/app/colors"
import styled from "styled-components"

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  width: 100%;

`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.darkColor};
`

export const Input = styled.textarea<{
  type?: string;
}>`
  width: 100%;
  box-sizing: border-box;
  height: 130px;
  outline: 0;
  border-radius: 8px;
  padding: 10px 14px;
  border: 1px solid ${colors.lightGrayColoLine};
  font-family: ${colors.font};

  &::placeholder {
    color: ${colors.grayColor};
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`
