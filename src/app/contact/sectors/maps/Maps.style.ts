import colors from "@/app/colors"
import styled from "styled-components"

export const StyledMaps = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  `

export const Content = styled.div`
  padding-top: 90px;
  padding-bottom: 84.52px;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  gap: 78px;
`

export const Title = styled.div`
  font-size: 72px;
  letter-spacing: -3px;
  line-height: 120%;
  font-weight: 700;
  width: 741px;
`

export const MapsContainer = styled.div`
  display: flex;
  gap: 83px;
  height: 565.48px;
`

export const Image = styled.div`
  width: 986.97px;
  height: 544.72px;
  margin-top: 18px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const ListItem = styled.div`
  width: 176px;
  position: relative;
`

export const ListTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  color: ${colors.darkColor};

`

export const ListText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${colors.grayColor};
  margin-top: 8px;
  margin-bottom: 20px;
`

export const ListInfo = styled.div<{
  mB: number;
}>`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  color: ${colors.darkColor};
  margin-bottom: ${({ mB = 32 }) => mB}px;


  &:after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    background-color: ${colors.copyright};
  }

`