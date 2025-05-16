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

export const Input = styled.input`
  outline: 0;
  border-radius: 8px;
  padding: 10px 14px;
  border: 1px solid ${colors.lightGrayColoLine}



`
