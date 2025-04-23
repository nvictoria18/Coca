import TextContent from "@/components/ui/TextContent/TextContent";
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import {
  Block,
  Cart,
  Content,
  FontInfo,
  Info,
  Text,
} from "./Insight.style";
import colors from "@/app/colors";
import { carts } from "./Carts";
import Carousel from "@/components/ui/Carousel/Slider";

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
                letterSpacing={'-2%'}
                color={colors.black}
              >
                {cart.title}
              </TitleOfHead>
            </Cart>
          ))}
        </Carousel>

      </Content>
    </Block>
  )
}

export default Insight;