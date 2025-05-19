import { device } from "@/app/break-points"
import colors from "@/app/colors"
import styled from "styled-components"

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  padding-top: 32px;
  padding-bottom: 160px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 940px;

  @media (${device.mobile}) {
    padding-top: 0px;
    padding-bottom: 80px;
    gap: 8px;
    max-width: 335px;
  }
`

export const Author = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;


  @media (${device.mobile}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }

`

export const Info = styled.div`
  display: flex;
  gap: 24px;

  @media (${device.mobile}) {
    gap: 8px;
    align-items: center;

  }
`

export const Avatar = styled.div`
  img {
    width: 56px;
    height: 56px;
  }

  @media (${device.mobile}) {
    width: 32px;
    height: 32px;

    img {
      width: 32px;
      height: 32px;
    }
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (${device.mobile}) {
  }
`

export const Name = styled.div`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  font-weight: 600;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    font-weight: 700;
  }
`

export const Job = styled.div`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  font-weight: 500;
  color: #848892;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    font-weight: 400;
  }
`

export const TimeStamp = styled.div`
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 500;
  color: ${colors.grayColor};

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
`

export const Article = styled.div`
  max-width: 940px;

  @media (${device.mobile}) {
    max-width: 335px;
  }
`

export const Cover = styled.div`
  img {

  }
`

export const Paragraph = styled.div`
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0px;
  font-weight: 400;
  color: ${colors.darkColor};
  
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${device.mobile}) {
    gap: 16px;
    font-size: 14px;
    line-height: 20px;


  }
`

export const TitleOfArticle = styled.div`
  font-size: 40px;
  line-height: 120%;
  letter-spacing: 0px;
  font-weight: 600;
  color: ${colors.black};

  @media (${device.mobile}) {
    font-size: 18px;
    line-height: 26px;
  }
`

export const ArticleText = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (${device.mobile}) {
    padding-top: 32px;
    gap: 0px;
  }
`

export const CommentBlock = styled.div`
  max-width: 893px;
  display: flex;
  gap: 48px;

  @media (${device.mobile}) {
    width: 335px;
    gap: 16px;
  }
`

export const AvatarComment = styled.div`
  img {
    width: 200px;
    height: 200px;
  }

  @media (${device.mobile}) {
    width: 199px;
    height: 209px;
    img {
      width: 199px;
      height: 209px;
    }
  }
`

export const CommentAttrs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (${device.mobile}){
    gap: 56px;
  }

`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0px;

  @media (${device.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    span {
      padding-top: 1px;
      padding-right: 8px;;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  img {
    width: 32px;
    height: 32px;
  }

  @media (${device.mobile}) {
    gap: 8px;
    img {
      width: 20px;
      height: 20px;
    }
  }

`

export const Written = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${colors.grayColor};

  @media (${device.mobile}) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;

  }
`

export const CommentName = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: -1px;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
  }
`

export const CommentJob = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0px;
  color: ${colors.grayColor};

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
  }
`

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (${device.mobile}) {
    gap: 8px;
  }
`

export const CommentText = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
  }
`