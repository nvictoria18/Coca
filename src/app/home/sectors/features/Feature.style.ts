import styled from "styled-components";
import colors from "@/app/colors";
import { device } from "@/app/break-points";

export const FeatureBlock = styled.div`
  height: 905px;
  width: 100%;
  padding: 160px 120px 94px;
  box-sizing: border-box;

  @media (${device.mobile}) {
    height: 812px;
    padding-top: 56px;
    padding-left: 20px;
  }

  @media (${device.laptop}) {
    
  }
`

export const Content = styled.div`
  display: flex;
  gap: 58px;
  align-items: center;


  @media (${device.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  @media (${device.laptop}) {
    
  }
`

export const WrappedStatisticGraphic = styled.div`
  width: 585px;
  height: 651px;
  position: relative;
  @media (${device.mobile}) {
    max-width: 335px;
    height: auto;
  }
  
`

export const WrappedImg = styled.div`
  @media (${device.mobile}) {
    width: 335px;
    height: auto;
  }
`

export const Check = styled.div`
  @media (${device.mobile}) {
    
    .check {      
      width: 24px;
      height: 24px;
    }
  }
`

export const StatisticGraphic = styled.div`
  position: absolute;
  top: 313px;
  right: 36px;
  bottom: 40px;
  left: 259px;
  font-family: ${colors.font};

  @media (${device.mobile}) {
    width: 177px;
    top: 173px;
    left: 138px;
  }
`

export const Info = styled.div`
  width: 557px;
  height: 617px;
  display: flex;
  flex-direction: column;
  gap: 40px;


  @media (${device.mobile}) {
    width: 335px;
    gap: 24px;
    height: 320px;
  }
`

export const Head = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;


  @media (${device.mobile}) {
    gap: 16px;
    height: 144px;
  }
`

export const Frames = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 393px;
  height: 256px;

  @media (${device.mobile}) {
    height: 152px;
    width: 335px;
    gap: 15px;
  }
`

export const Frame = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (${device.mobile}) {
    gap: 8px;
  }
`

export const Text = styled.div`
  color: ${colors.darkColor};
  font-family: ${colors.font};
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  vertical-align: middle;
  width: 353px;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
  }
`

