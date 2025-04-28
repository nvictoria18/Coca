import Link from "next/link"
import {
  WrappedHeader,
  StyledLogo,
  StyledLinks,
  OtherLinks,
  ContactBlock,
  StyledLink
} from "./Header.style";

const Header = () => {
  return (
    <WrappedHeader className="header">
      <Link href="./home">
        <StyledLogo className='logo'>
          <img src={'/image/Logo.svg'} className="svg"/>
        </StyledLogo>
      </Link>
      <div className="mobile">
        <img src="/image/burger.svg" />
      </div>
      <StyledLinks className="links">
        <OtherLinks>
          <Link href="./home">Home</Link>
          <Link href="./about">About</Link>
          <Link href="./blog">Blog</Link>
          <Link href="./pricing">Pricing</Link>
        </OtherLinks>

        <ContactBlock className="links">
          <StyledLink href="./detail">Contact Us →</StyledLink>
        </ContactBlock>
      </StyledLinks>
    </WrappedHeader>
  )
}

export default Header;