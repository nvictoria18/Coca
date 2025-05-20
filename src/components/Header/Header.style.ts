import { inter } from '@/fonts/inter'
import styled from "styled-components"
import Link from "next/link"
import { device } from '@/app/break-points'

export const WrappedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12%; 
  position: sticky;
  top: 0px;
  z-index: 1000; 
  background-color: rgba(255,255,255, 0.2);

  .mobile {
    display: none;
  }

  @media(${device.desktop}) {
    padding: 0px clamp(0px, 10vw, 120px);
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    padding: 0px clamp(0px, 4vw, 120px);
  }

  @media(${device.mobile}) {
    display: flex;
    gap: 0px;
    justify-content: space-between;
    padding: 24px 20px 0px 20px;
    max-width: 375px;
    align-items: center;
    

    .links {
      display: none;
    }

    .mobile {
      display: block;
    }

  }
`

export const StyledLogo = styled.div`
  position: relative;
  margin-top: 26px;
  margin-bottom: 22px;

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    min-width: 140px;
    height: auto;
  }

  @media(${device.mobile}) {

  margin: 0px;
    img {
      width: 112px;
      margin: 0px;
    }
  }
`

export const StyledLinks = styled.div`
  display: flex;
  gap: 68px;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 43px;
  font-family: 'Inter';
  src: url(${inter});
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.1px;
  text-decoration: none;

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    gap: 5%;
  }
`

export const OtherLinks = styled.div`
  
  display: flex;
  gap: 32px;
  justify-content: space-between;
  > a {
    color: var(--dark-color);
  }

  @media(${device.desktop}) {
    max-width: 276px;
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
    max-width: 276px;
    gap: 12px;

  }

  @media(${device.mobile}) {
  }
`

export const ContactBlock = styled.div`
  font-weight: 600;
  &:after {
    content: "";
    display: block;
    width: 99%;
    height: 1px;
    margin-top: 4px;
    background-color: var(--foreground);
  }
`

export const StyledLink = styled(Link)`
  text-wrap: nowrap;
  color: var(--black);
`