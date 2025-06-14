import { device } from "@/app/break-points";
import colors from "@/app/colors";
import { transform } from "next/dist/build/swc/generated-native";
import styled from "styled-components";

export const StyledArticlesSection = styled.div`

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 220px;

  .articles-section__slider::-webkit-scrollbar {
    width: 0;
  }

  @media (${device.mobile}) {
    gap: 32px;
    padding-bottom: 80px;

  }
`

export const MainBlock = styled.div`
  padding-top: 160px;
  padding-left: 120px;
  padding-right: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px; // изменила
  max-height: 155px;

  .articles-section.text {
    width: 70%;
  }

  @media (${device.mobile}) {
    padding-left: 20px;
    padding-top: 56px;
    padding-right: 0px;
    justify-content: flex-start;
    max-height: 311px;
    flex-direction: column;
    gap: 24px;
    width: 335px;
    align-items: flex-start;
    .articles-section.text {
      width: 100%;
    }
  }
`

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${device.mobile}) {
    width: 100%;
    gap: 16px;
  }
`

export const Title = styled.div`
  color: ${colors.darkColor};
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -2px;

  @media (${device.mobile}) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px;
  }
`

export const Text = styled.div`
  color: ${colors.grayColor};
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0px;
  width: 100%;
  padding-left: 2px;

  :nth-child(3) {
    padding-left: 0px;

  }

  span {
    display: block;
    width: 90%;
  }

  @media (${device.mobile}) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const SliderBtns = styled.div`
  position: relative;
  width: 116px;
  height: 50px;

  .slider__buttons.right {
    top: 0px;
    left: 0px;
  }

  @media (${device.mobile}) {
    width: 92px;
    height: 40px;
    .slider__buttons.right {
      width: 40px;
      height: 40px;
      left: 15px;
    }

    .slider__buttons.left {
      width: 40px;
      height: 40px;
      left: 0px;
    }
  }
`

export const SliderBlock = styled.div`

  overflow: hidden;
  margin-left: 120px;
  
  &:-webkit-scrollbar {
    width: 0;
  }

  @media (${device.mobile}) {
    margin-left: 20px;
  }
`

export const SliderItems = styled.div<{
  transform: number;
}>`
  display: flex;
  transform: translateX(${({ transform }) => transform * 100}%);
  gap: 32px;
  transition: all 0.5s ease-in-out;

  @media (${device.mobile}) {
    gap: 16px;
  }
`

export const Article = styled.div<{
  widthdesktop: number;
  widthmobile: number;
}>`
  flex-shrink: 0;
  width: ${({ widthdesktop = 406 }) => widthdesktop}px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${device.mobile}) {
    width: ${({ widthmobile = 263 }) => widthmobile}px;
    gap: 16px;

    .articles-section__slider.button {
      width: 124px;
      font-size: 14px;
    }
  }
`

export const Image = styled.div`
  width: 406px;
  .crop {
    object-fit: cover;
    object-position: 50%;
    width: 476px;
    height: 695px;
  }

  @media (${device.mobile}) {
    width: 263px;

    .crop {
      width: 263px;
      height: auto;
    }
  }
`
export const TextArticle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (${device.mobile}) {
    gap: 8px;

    .articles-section__slider.article__bottom-text {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0px;
    }
  }


`

export const TitleArticle = styled.div`
  color: ${colors.darkColor};
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -1px;

  @media (${device.mobile}) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
  }
`



// export const StyledArticlesSection = styled.div``

// export const StyledArticlesSection = styled.div``