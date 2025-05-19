import colors from "@/app/colors"
import styled from "styled-components"

export const FillingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${colors.darkColor};
`

export const Input = styled.input<{
  type?: string;
}>`
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  outline: 0;
  border-radius: 8px;
  padding: ${({ type }) => type === 'phone' ? '10px 0px' : '10px 14px'};
  border: ${({ type }) => type === 'phone' ? 'none' : `1px solid ${colors.lightGrayColoLine}`};

  &::placeholder {
    color: ${colors.grayColor};
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    letter-spacing: 0.6px;
    font-weight: 400;
  }
`


export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  input&::placeholder {
    color: ${colors.grayColor};
  }

  border: 1px solid ${colors.lightGrayColoLine};
  border-radius: 8px;

`

export const ButtonPhone = styled.button`
  width: 70px;
  padding: 10px 12px 10px 14px;
  box-sizing: border-box;
  gap: 4px;
  align-items: center;
  display: flex;
  border: none;
  background-color: transparent;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;

  img {
    width: 20px;
    height: 20px;
  }
`