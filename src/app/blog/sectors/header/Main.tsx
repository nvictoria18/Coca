import Slider from "@/components/ui/Slider/Slider";
import sliderCarts from "./sliderCarts";
import Link from "next/link";
import {
  MainContainer,
  Paragraph,
  StyledMain,
  Title,
  Text,
  SliderContainer,
  Links,
  Cart,
  CartInformation,
  Post,
  Date,
  Image,
  Author,
  TextPost,
  TitlePost,
  LinkItem,
  TextBlock,
} from "./Main.style";

import links from './links';
import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import Carousel from "@/components/ui/Carousel/Carousel";
import useTypeScreen from "@/utils/hooks/useTypeScreen";
import { isMobileScreen } from "@/utils/isMobileScreen";
import { useEffect, useRef } from "react";

const Main = () => {
  const type = useTypeScreen();
  return (<StyledMain
    className="main"
  >
    <StyledImg
      className="light-blog orange"
      src="/image/Blog Light.svg" />
    <StyledImg
      className="light-blog green"
      src="/image/Blog Light green.svg" />
    <MainContainer
      className="main"
    >
      <Title
        className="main__title"

      >Activity & Updates</Title>
      <Paragraph
        className="main__paragraph"

      >
        <Text
          className="main__paragraph text"

        >Our biggest challenge is making sure we're always designing and building products that will help you run your business better.</Text>
      </Paragraph>
    </MainContainer>
    <SliderContainer
      className="blog-cart"
    >     
          <Links
            className="blog-cart links"
          >
            {links.map((link) => (
              <LinkItem className="blog-cart item">
                <Link className={`${link.active ? 'active' : 'none'}`} href={`/${link.link}`}>{link.link}</Link>
              </LinkItem>
            ))}
          </Links>
      <Carousel
        className="blog-cart carousel"
        topDesktop={'32%'}
        leftDesktop={'40%'}
        topMobile={'32%'}
        leftMobile={'72%'}
      >
        {sliderCarts.map((cart) => (
          <Cart className="cart-item">
            <Image className="cart-item image">{cart.image}</Image>
            <CartInformation
              className="cart-item__information"
            >
              {isMobileScreen(type, <Post
                className="cart-item__post"
              >
                <Date
                  className="post__date"
                >{cart.date}</Date>
                {cart.author &&
                  <Author
                    className="post__author"
                  >{cart.author}</Author>
                }
              </Post>, null)}
              <TextBlock className="cart-item text-block">
                <TitlePost
                  className="cart-item title"
                >
                  {cart.title}
                </TitlePost>
                <TextPost
                  width={cart.widthTextPost}
                  className="cart-item text"
                >

                  {cart.text}
                </TextPost>

              </TextBlock>
            </CartInformation>
          </Cart>))}
      </Carousel>
    </SliderContainer>
  </StyledMain>)
}

export default Main;