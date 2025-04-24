import Link from "next/link"
import {
  WrappedHeader,
  StyledLogo,
  StyledLinks,
  OtherLinks,
  ContactBlock,
  StyledLink
} from "./Header.style"

const Header = () => {
  return (
    <WrappedHeader className="header">
      <Link href="./home">
        <StyledLogo className="logo" />
      </Link>

      <StyledLinks className="links">
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

export default Header;