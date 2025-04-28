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

const Insight = () => {

  return (
    <Block>

      <Content>
        <Text>
          <TitleOfHead
            color={colors.black}
          >
            Trending news from Coca
          </TitleOfHead>
          <TextContent
            color={colors.grayColor}
            lineHeight={"150%"}          >
            we have some new Service to pamper you
          </TextContent>
        </Text>
        <Carts>
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