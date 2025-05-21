import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const StyledQuote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 


  @media (${device.mobile}) {

  }
`

export const Content = styled.div`
  width: 83%;
  display: flex;
  gap: 248px;
  align-items: center;
  padding: 80px 0px;
  box-sizing: content-box;

  &:before {
    position: absolute;
    content: "";
    top: 0px;
    width: 70%;
    height: 1px;
    
    background-color: ${colors.lightGrayColoLine};
  }


  &:after {
    position: absolute;
    content: "";
    width: 70%;
    height: 1px;
    bottom: 0px;
    background-color: ${colors.lightGrayColoLine};

  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    padding: 0px;
  }

  @media (${device.mobile}) {
    flex-direction: column;
    margin: 80px 24px;
    padding: 0px;
    gap: 16px;
    &:before {
      top: 55px;
    }
    &:after {
      bottom: 55px;

    }
  }
`

export const Title = styled.div`
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -2px;
  font-weight: 600;
  width: 480px;


  @media (${device.mobile}) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px;
    font-weight: 600;
    width: 335px;
  }
`

export const Text = styled.div`
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0%;
  font-weight: 600;
  width: 472px;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    width: 335px;

    font-weight: 600;
  }
`