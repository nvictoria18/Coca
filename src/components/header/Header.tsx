import { inter } from '@/fonts/inter'
import Logo from '@/image/Logo.svg'
import Link from "next/link"
import styled from "styled-components"

const WrappedHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 610px;
  margin: 0px 120px;
  position: sticky;
  background-color: var(--background);
  // bottom: 1px;
`

const StyledLogo = styled(Logo)`
  margin-top: 26px;
  margin-bottom: 22px;
`

const StyledLinks = styled.div`
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

const OtherLinks = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  > a {
    color: var(--dark-color);
  }
`

const ContactBlock = styled.div`
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

const StyledLink = styled(Link)`
  text-wrap: nowrap;
  color: var(--black);
`

export const Header = () => {
  return (
    <WrappedHeader>
      <Link href="./home">
        <StyledLogo />
      </Link>

      <StyledLinks>
        <OtherLinks>
          <Link href="./home">Home</Link>
          <Link href="./about">About</Link>
          <Link href="./blog">Blog</Link>
          <Link href="./pricing">Pricing</Link>
        </OtherLinks>

        <ContactBlock>
          <StyledLink href="./detail">Contact Us →</StyledLink>
        </ContactBlock>
      </StyledLinks>
    </WrappedHeader>
  )
}