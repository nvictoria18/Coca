import styled from "styled-components";
import Statistic from '@/image/Bar Chart.svg'
import colors from "@/app/colors";

export const FeatureBlock = styled.div`
  height: 905px;
  width: 100%;
  padding: 160px 120px 94px;
  box-sizing: border-box;
`

export const Content = styled.div`
  display: flex;
  gap: 58px;
  align-items: center;
`

export const WrappedStatisticGraphic = styled.div`
  width: 585px;
  height: 651px;
  position: relative;
`

export const StatisticGraphic = styled(Statistic)`
  position: absolute;
  top: 313px;
  right: 36px;
  bottom: 40px;
  left: 259px;
`

export const Info = styled.div`
  width: 557px;
  height: 617px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Head = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Frames = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 393px;
  height: 256px;
`

export const Frame = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
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
`