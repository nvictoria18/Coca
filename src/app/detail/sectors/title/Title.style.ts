import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const StyledTitleContainer = styled.div`
  width: 100%;
  padding: 80px 220px 48px 250px;
  height: 386px;
  box-sizing: border-box;

  @media (${device.mobile}) {
    padding: 32px 20px 56px 20px;
    height: 208px;
  }
`

export const StyledTitle = styled.div`
  width: 100%;
  font-size: 72px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -3px;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;

  }
`