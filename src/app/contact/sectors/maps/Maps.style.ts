import { device } from "@/app/break-points"
import colors from "@/app/colors"
import styled from "styled-components"

export const StyledMaps = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: auto;
`

export const Content = styled.div`
  padding-top: 90px;
  padding-bottom: 84.52px;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  gap: 78px;

  @media (${device.mobile}) {
    padding-top: 34px;
    padding-left: 20px;
    padding-bottom: 0px;
    gap: 12px;
  } 
`

export const Title = styled.div`
  font-size: 72px;
  letter-spacing: -3px;
  line-height: 120%;
  font-weight: 700;
  width: 741px;

  @media (${device.mobile}) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 335px;
  }
`

export const MapsContainer = styled.div`
  display: flex;
  gap: 83px;
  height: 565.48px;
  @media (${device.mobile}) {
    flex-direction: column;
    gap: 58.81px;
    height: auto;

  }
`

export const Image = styled.div`
  width: 986.97px;
  height: 544.72px;
  margin-top: 18px;

  @media (${device.mobile}) {
    width: 335px;
    height: 171.98px;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (${device.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px 16px ;
  }
`

export const ListItem = styled.div`
  width: 176px;
  position: relative;

  @media (${device.mobile}) {
    width: 160px;
    height: 104px;

  }
`

export const ListTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const ListText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${colors.grayColor};
  margin-top: 8px;
  margin-bottom: 20px;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 12px;
  }
`

export const ListInfo = styled.div<{
  mb: number;
}>`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  color: ${colors.darkColor};
  margin-bottom: ${({ mb = 32 }) => mb}px;


  &:after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    background-color: ${colors.copyright};
  }

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;

    &:after {
      display: none;
    }
  }
`