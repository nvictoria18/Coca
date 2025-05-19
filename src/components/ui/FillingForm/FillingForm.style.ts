import colors from "@/app/colors"
import styled from "styled-components"

export const FillingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  input&::placeholder {
        color: ${colors.grayColor};
  }

  
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
  width: 100%;
  outline: 0;
  border-radius: 8px;
  padding: 10px 14px;
  border: ${({ type }) => type === 'phone' ? 'none' : `1px solid ${colors.lightGrayColoLine}`}
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
  justify-content: space-between;
  align-items: center;
  display: flex;
  border: none;
  background-color: transparent;
`