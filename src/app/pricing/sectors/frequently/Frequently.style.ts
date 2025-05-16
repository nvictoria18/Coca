import { device } from "@/app/break-points";
import colors from "@/app/colors"
import styled from "styled-components"

export const StyledFrequently = styled.div`
  padding: 82px 130px 160px 196px;

  @media (${device.mobile}) {
    padding: 0px 20px;

  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;

  @media (${device.mobile}) {
    gap: 32px;
  }
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px; 
  width: 770px;
  text-align: center;
  @media (${device.mobile}) {
    width: 295px;
    gap: 16px;
  }
`

export const Title = styled.div`
  font-size: 56px;
  letter-spacing: -2px;
  line-height: 120%;
  font-weight: 600;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px;

  }
`

export const Text = styled.div`
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 32px;
  font-weight: 500;
  color: ${colors.grayColor};

  @media (${device.mobile}) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;

  }
`

export const AccordionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 1114px;

  @media (${device.mobile}) {
    width: 335px;
    gap: 24px;
  }
`