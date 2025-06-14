import { StyledImg } from "@/components/ui/StyledImg/StyledImg";

const cartsOfCarousel = [
  {
    image: <StyledImg className="cart-team" src="/image/Team1.png"/>,
    name: 'Arlyne Stefano',
    jobTitle: 'Founder & CEO',
    socialMedia: [
      <StyledImg key={'twitter1'} className="cart-team social-media" src="/image/Social Icons Team.svg"/>,
      <StyledImg key={'linkedln2'} className="cart-team social-media" src="/image/Social Icons Team 1.svg"/>,
      <StyledImg key={'instagram3'} className="cart-team social-media" src="/image/Social Icons Team 2.svg"/>,
    ]
  },
  {
    image: <StyledImg className="cart-team" src="/image/Team2.png"/>,
    name: 'Katy Cristy',
    jobTitle: 'Chief Technology Officer',
    socialMedia: [
      <StyledImg key={'twitter4'} className="cart-team social-media" src="/image/Social Icons Team.svg"/>,
      <StyledImg key={'linkedln5'} className="cart-team social-media" src="/image/Social Icons Team 1.svg"/>,
      <StyledImg key={'instagram6'} className="cart-team social-media" src="/image/Social Icons Team 2.svg"/>,
    ]
  },
  {
    image: <StyledImg className="cart-team" src="/image/Team3.png"/>,
    name: 'Roger Dzawin',
    jobTitle: 'Chief Technology Officer',
    socialMedia: [
      <StyledImg key={'twitter7'} className="cart-team social-media" src="/image/Social Icons Team.svg"/>,
      <StyledImg key={'linkedln8'} className="cart-team social-media" src="/image/Social Icons Team 1.svg"/>,
      <StyledImg key={'instagram9'} className="cart-team social-media" src="/image/Social Icons Team 2.svg"/>,
    ]
  },
]

export default cartsOfCarousel;