import { device } from "@/app/break-points"
import colors from "@/app/colors"
import styled from "styled-components"

export const OurTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  padding-bottom: 160px;

  @media (${device.mobile}) {
    padding-top: 0px;
    padding-bottom: 80px;
  }
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;

  .our-team-container__carousel {
      margin-bottom: 0px;
      /* width: 100%; */
    }

  @media (${device.mobile}) {
    /* max-width: 335px; */
    width: 100%;
    gap: 32px;

    .our-team-container__carousel {
      margin-left: 20px;
      /* width: 100%; */
    }
  }
`

export const SubHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 71px;
  width: 100%;
  margin-top: 20px;

  .our-team-container.title {
    max-width: 626px;
    width: 100%;
  }



  @media (${device.mobile}) {
    max-width: 335px;
    justify-content: flex-start;
    gap: 16px;
    padding-left: 20px;
    flex-direction: column;
  }


`

export const SubText = styled.div`
  width: 506px;
  display: flex;
  flex-direction: column;
  gap: 24px;


  .our-team-container.text {
    width: 100%;
  }

  .our-team-container.link {
    color: ${colors.darkColor};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
  }

  @media (${device.mobile}) {
    max-width: 335px;
    width: 100%;
    gap: 16px;

    .our-team-container.link {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0%;
    }
  }
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${device.mobile}) {
    max-width: 335px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    gap: 16px;
  }
`

export const Title = styled.div`
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 120%;
  color: ${colors.darkColor};
  width: 70%;

  @media (${device.mobile}) {
    width: 100%;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px;
  }
`

export const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 32px;
  color: ${colors.grayColor};
  width: 44%;

  @media (${device.mobile}) {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (${device.mobile}) {
    width: 100%;
    gap: 8px;
  }
`

export const Image = styled.div`
  @media (${device.mobile}) {
    .cart-team {
      height: 244px;
      width: 247px;
    }
    
  }
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;

`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (${device.mobile}) {
    gap: 4px;
  }
`

export const TeamMember = styled.div`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 150%;
  color: ${colors.darkColor};

  @media (${device.mobile}) {
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 24px;
  }
`

export const JobTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 150%;
  color: ${colors.grayColor};

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
  }
`

export const SociaMedia = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  .cart-team.social-media {
    width: 32px;
    height: 32px;
  }

  @media (${device.mobile}) {
    .cart-team.social-media {
      width: 20px;
      height: 20px;
    }
  }
`

