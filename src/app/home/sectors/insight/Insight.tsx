import TextContent from "@/components/ui/TextContent/TextContent";
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import {
  Block,
  Cart,
  Carts,
  Content,
  FontInfo,
  Info,
  Text,
} from "./Insight.style";
import colors from "@/app/colors";
import { carts } from "./Carts";
import Carousel from "@/components/ui/Carousel/Carousel";
import useTypeScreen from "@/utils/hooks/useTypeScreen";

const Insight = () => {
  const type = useTypeScreen();

  return (
    <Block className="insight">

      <Content className="insight-container">
        <Text className="insight-container text">
          <TitleOfHead
            heightMobile={34}
            color={colors.black}
          >
            Trending news from Coca
          </TitleOfHead>
          <TextContent
            className="insight-container text-content"
            color={colors.grayColor}
            lineHeight={"150%"}
            lineHeightMobile="24px"
            letterSpacingMobile="0"
            fontWeightMobile={400}
            sizeMobile={16}
          >
            we have some new Service to pamper you
          </TextContent>
        </Text>
        <Carts className="insight-container__carts">
          <Carousel>
            {carts.map((cart) => (
              <Cart>
                {cart.image}
                <Info>
                  <FontInfo>
                    {cart.publishedAt}
                  </FontInfo >
                  <FontInfo>
                    {cart.author}
                  </FontInfo>
                </Info>
                <TitleOfHead
                  lineHeight={'150%'}
                  size={32}
                  letterSpacing={'-0.7px'}
                  color={colors.black}
                  sizeMobile={16}
                  letterSpacingMobile="0px"
                  lineHeightMobile="24px"
                >
                  {cart.title}
                </TitleOfHead>
              </Cart>
            ))}
          </Carousel>

        </Carts>

      </Content>
    </Block>
  )
}

export default Insight;