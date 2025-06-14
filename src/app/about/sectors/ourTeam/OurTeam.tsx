import Carousel from "@/components/ui/Carousel/Carousel";
import Link from "next/link";
import {
  Head,
  OurTeamContainer,
  Title,
  Text,
  SubHeading,
  SubText,
  Content,
  SociaMedia,
  TeamMember,
  About,
  Cart,
  Information,
  JobTitle,
  Image,
} from "./OurTeam.style";
import cartsOfCarousel from "./cartsOfCarousel";
import textScreenType from "./textScreenType";
import useTypeScreen from "@/utils/hooks/useTypeScreen";

const OurTeam = () => {
  const type = useTypeScreen();


  return (<OurTeamContainer
    className="our-team"
  >
    <Content
      className="our-team-container"
    >
      <Head
        className="our-team-container__head"
      >
        <Title
          className="our-team-container title"
        >
          Meet our team of creators, designers, and world-class problem solvers
        </Title>
        <Text
          className="our-team-container text"

        >
          To become the company that customers want, it takes a group of passionate people. Get to know the people who lead
        </Text>
      </Head>
      <Carousel
        topDesktop="42%"
        leftDesktop="33%"
        topMobile="41%"
        leftMobile="72%"
        className="our-team-container__carousel"
      >{cartsOfCarousel.map((cart) => (
        <Cart
          key={cart.name}
        >
          <Image>{cart.image}</Image>
          <Information>
            <About>
              <TeamMember>{cart.name}</TeamMember>
              <JobTitle>{cart.jobTitle}</JobTitle>
            </About>
            <SociaMedia>
              {cart.socialMedia.map((item) => item)}
            </SociaMedia>
          </Information>
        </Cart>
      ))}</Carousel>
      <SubHeading
        className="our-team-container sub-heading"

      >
        <Title
          className="our-team-container title"

        >
          {textScreenType[type]}
        </Title>
        <SubText
          className="our-team-container sub-text"

        >
          <Text
            className="our-team-container text"
          >
            We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.
          </Text>
          <Link
            className="our-team-container link" href={"*"}
          >See Open Position →</Link>
        </SubText>
      </SubHeading>


    </Content>
  </OurTeamContainer>)
}

export default OurTeam;