import { device } from "@/app/break-points"
import colors from "@/app/colors"
import styled from "styled-components"

export const ArticlesContainer = styled.div`
  background-color: ${colors.darkColor};
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  padding: 120px;
  display: flex;
  flex-wrap: wrap;
  gap: 159px 32px;

  @media (${device.mobile}) {
    padding: 40px 0px 30px 0px;
    flex-direction: column;
    gap: 40px;
  }
`


export const ArticleCouple = styled.div`
  display: flex;
  flex-direction: column;
  gap: 159px;

  @media (${device.mobile}) {
    gap: 40px;
  }
`

export const Image = styled.div`
  width: 584px;
  height: auto;

  @media (${device.mobile}) {
    width: 335px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  .underline {
    border-bottom: 2px solid ${colors.white};
    position: relative;
  }

  .underline::after {
    content: "";
    width: 331px;
    height: 2px;
    background-color: ${colors.white};
    position: absolute;
    left: 0px;

  }
  @media (${device.mobile}) {
    gap: 16px;
  }

`

export const ArticleTitle = styled.div<{
  width: string;
}>`
  width: ${({ width = '100%' }) => width};
  color: ${colors.white};
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: 0px;
  a,
  a:active {
    color: ${colors.white};
  }

  @media (${device.mobile}) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
  }

`

export const ArticleText = styled.div<{
  width: string;
}>`
  width: ${({ width = '100%' }) => width};
  color: ${colors.grayColor};
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0px;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }
`

export const Article = styled.div`
  width: 584px;
  display: flex;
  flex-direction: column;
  gap: 24px;


  @media (${device.mobile}) {
    width: 335px;
    gap: 16px;
  }
`