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
import { Selector } from "@/components/ui/Slider/Selector";
import { carts } from "./Carts";
import Slider from "@/components/ui/Slider/Slider";

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
        <Slider>
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
        </Slider>

      </Content>
    </Block>
  )
}

export default Insight;