import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const StyledForm = styled.div`
  padding: 120px 0px 160px 120px;
  max-width: 1440px;
  width: 100%;
  margin: auto;

  @media ${device.mobile} {
    padding: 56px 20px 80px 20px;
  }
`
export const Container = styled.div`
  position: relative;
  .form-container.image {
    position: relative;
    left: 29%;
    width: 936px;
    height: auto;
  }

  @media (${device.mobile}) {
    max-width: 375px;
    .form-container.image {
      display: none;
    }
  }


`

export const FormContainer = styled.div`
  top: 0px;
  position: absolute;
  width: 608px;
  box-sizing: border-box;
  z-index: 2;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightColor};
  padding: 56px 48px;

  @media (${device.mobile}) {
    padding: 24px;
    position: static;
    width: 335px;
  }
`


export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .form-container.button {
    margin-top: 12px;
    font-size: 16px;
    width: 167px;
  }

  @media ${device.mobile} {
    gap: 12px;

    .form-container.button {
      font-size: 14px;
      width: 136px;
      height: 44px;
    }
  }
`

export const Forms = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.mobile} {
    margin-top:12px;
    margin-bottom: 8px;
  }
`

export const FormCouple = styled.div`
  display: flex;
  gap: 32px;

  @media (${device.mobile}) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.8px;

  @media (${device.mobile}) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
  }
`

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 0px;
  color: ${colors.grayColor};

  a:active,
  a {
    letter-spacing: 0.2px;
    color: ${colors.accent};
  }

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;

    a {
      letter-spacing: 0px;
    }
  }
`
