import { device } from "@/app/break-points"
import colors from "@/app/colors"
import styled from "styled-components"

export const StyledMain = styled.div`
  position: relative;
  padding-bottom: 168px;


  .light-blog.orange {
    position: absolute;
    width: 551px;
    height: 551px;
    left: 51px;
  }

  .light-blog.green {
    position: absolute;
    width: 551px;
    height: 551px;
    right: 0px;
    top: 343px;
  }

  @media (${device.mobile}) {
    padding-bottom: 28px;

    .light-blog.orange {
      width: 228px;
      height: 228px;
      left: 0px;
    }

    .light-blog.green {
    width: 164x;
    height: 164x;
    right: 0px;
    top: 174px;
    }
  }
`

export const MainContainer = styled.div`
  padding-top: 95px;
  padding-left: 120px;
  padding-bottom: 128px;

  display: flex;
  flex-direction: column;
  gap: 53px;

  @media (${device.mobile}) {
    padding-left: 20px;
    padding-top: 0px;
    padding-bottom: 56px;

    gap: 48px;
  }
`

export const Title = styled.div`
  width: 100%;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 120%;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
  }
`

export const Paragraph = styled.div`
  display: flex;
  gap: 24px;

  &:before {
    margin-top: 23px;
    content: "";
    width: 76px;
    height: 1px;
    background-color: ${colors.black};
  }

  @media (${device.mobile}) {
    &:before {
      width: 24px;
      margin-top: 2px;
    }

  }
`

export const Text = styled.div`
  width: 50%;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 42px;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }
`

export const SliderContainer = styled.div`
  margin-left: 120px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  gap: 80px;

  @media (${device.mobile}) {
    margin-left: 20px;
    gap: 32px;
    
    a {
      white-space: nowrap;
    }
  }

`

export const Links = styled.div`
  display: flex;

  gap: 16px;
  a {
    color: ${colors.darkColor};
  }

  @media (${device.mobile}) {
    display: flex;
    gap: 8px;
  }
`

export const LinkItem = styled.div`
  padding: 10px 14px;

  a {
    color: ${colors.grayColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
  }

  .active {
    color: ${colors.darkColor};
    text-decoration: underline;
    font-weight: 600;
  }

  @media (${device.mobile}) {
    padding: 6px 12px;

    a {
      font-size: 14px;
    }
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${device.mobile}) {
    gap: 8px;
  }
`

export const Image = styled.div`
  width: 515px;

  .crop {
    height: 428px;
    width: 515px;
    object-fit: cover;
  }

  .blog-cart {
    height: 428px;
    width: 515px;
    object-fit: cover;
  }


  @media (${device.mobile}) {
    width: 247px;

    .crop {
      height: 205px;
      width: auto;
      object-fit: cover;
    }
  }
`

export const CartInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;


`

export const Post = styled.div`
  justify-content: space-between;
  display: flex;
  color: ${colors.grayColor};
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;


`

export const Date = styled.div``

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${device.mobile}) {
    gap: 8px;
  }

`

export const TitlePost = styled.div`
  color: ${colors.darkColor};
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1px;
  width: 80%;

  @media (${device.mobile}) {
    font-size: 15px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0px;
  }
`

export const TextPost = styled.div<{
  width: string;
}>`
  color: ${colors.grayColor};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0%;
  width: ${({ width = '95%' }) => width};

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    font-weight: 400;
  }
`

export const Author = styled.div``
