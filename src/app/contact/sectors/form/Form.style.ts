import colors from "@/app/colors";
import styled from "styled-components";

export const StyledForm = styled.div`
  padding: 120px 0px 160px 120px;

  `
export const Container = styled.div`
  position: relative;
  .form-container.image {
    position: relative;
    left: 25%;
    width: 987.27px;
    height: 885px;
  }

`

export const FormContainer = styled.div`
  top: 0px;
  position: absolute;
  z-index: 2;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightColor};
  padding: 56px 48px;
`


export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const FormCouple = styled.div`
  display: flex;
  gap: 32px;
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -2%;
`

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 0px;
  color: ${colors.grayColor};

  a:active,
  a {
    color: ${colors.accent};
  }
`
