import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import {
  Paragraph,
  StyledHome,
  TitleHome,
  Text,
  LinedText,
  Cart,
  BottomText,
  BottomTitle,
  CartText,
  CartInfo,
  AboutHome,
  CartContainer,
} from "./Home.style";
import { Line } from "@/app/home/sectors/main/Main.style";
import colors from "@/app/colors";
import Carousel from "@/components/ui/Carousel/Carousel";
import carts from "./Carts";
import { Button } from "@/components/ui/Button/Button";
import useTypeScreen from "@/utils/hooks/useTypeScreen";
import { isMobileScreen } from "@/utils/isMobileScreen";
import { TypesOfScreen } from "@/types/Screen";

type HomeProps = {
  type: TypesOfScreen
}

const Home = ({
  type
}: HomeProps) => {

  return (
    <AboutHome>
      <StyledHome className="about__home">
        <TitleHome
          className="about__home__title"
        >
          Everything you need to get the attention of your audience
        </TitleHome>

        <Paragraph
          className="about__home__paragraph"
        >
          <LinedText
            className="paragraph__lined-text"

          >
            <Line
              className="line"
              bg={colors.black}
            />
            <Text
              className="paragraph__text"
            >
              Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.
            </Text>


          </LinedText>
          <StyledImg
            className="image"
            src="/image/Linked Path.svg" />
        </Paragraph>
      </StyledHome>
      {isMobileScreen(type, (
        <Carousel
          topDesktop="19%"
          leftDesktop="39%"

          className="about-slider"
        >
          {carts.map((cart) => (
            <Cart
              className="cart"
            >
              {cart.image}
              <CartInfo
                className="cart__information"
              >
                <BottomText
                  className="cart__text"

                >
                  <BottomTitle
                    className="cart__bottom-title"

                  >
                    {cart.text ? cart.text.title : cart.text}
                  </BottomTitle>
                  <CartText
                    className="cart__bottom-text"
                  >
                    {cart.text ? cart.text.bottomText : cart.text}
                  </CartText>
                </BottomText>
                {cart.button && (<Button
                  theme={"light"}
                  size={16}
                >See Details →
                </Button>)}


              </CartInfo>
            </Cart>
          ))}
        </Carousel>

      ),
        <CartContainer>
          <Cart
            className="cart"
          >

            {carts[1].image}
            <CartInfo
              className="cart__information"
            >
              <BottomText
                className="cart__text"

              >
                <BottomTitle
                  className="cart__bottom-title"

                >
                  {carts[1].text ? carts[1].text.title : carts[1].text}
                </BottomTitle>
                <CartText
                  className="cart__bottom-text"
                >
                  {carts[1].text ? carts[1].text.bottomText : carts[1].text}
                </CartText>
              </BottomText>
              {carts[1].button && (<Button
                className="cart button"
                theme={"light"}
                size={16}
              >See Details →
              </Button>)}


            </CartInfo>
          </Cart>

        </CartContainer>
      )}

    </AboutHome>
  )
}

export default Home;