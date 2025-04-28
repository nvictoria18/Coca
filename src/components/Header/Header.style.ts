import { inter } from '@/fonts/inter'
import Logo from '@/image/Logo.svg'
import styled from "styled-components"
import Link from "next/link"
import { device } from '@/app/break-points'

export const WrappedHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 610px;
  padding: 0px 120px; 
  position: sticky;
  top: 0px;
  z-index: 1000; 
  background-color: rgba(255,255,255, 0.2);

  .mobile {
    display: none;
  }

  @media(${device.mobile}) {
    display: flex;
    gap: 0px;
    justify-content: space-between;
    padding: 24px 20px 32px;
    max-width: 375px;
    align-items: center;

    .links {
      display: none;
    }

    .mobile {
      display: block;
    }

    .logo {
      display: none;
    }

  }
`

export const StyledLogo = styled(Logo)`
  margin-top: 26px;
  margin-bottom: 22px;

  @media(${device.mobile}) {
    margin: 0px;
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
`

export const OtherLinks = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  > a {
    color: var(--dark-color);
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