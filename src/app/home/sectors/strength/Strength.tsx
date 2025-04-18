import TextContent from "@/components/ui/TextContent/TextContent";
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import StrengthImage from "@/image/Strength.svg"
import {
  BlockText,
  Content,
  Couple,
  Line,
  Stand
} from "./Strength.style";
import colors from "@/app/colors";

const Strength = () => {
  return (<Content>
    <Stand>
      <Couple
        width={176}
      >
        <TitleOfHead
          size={64}
          letterSpacing={0}
          color={colors.black}
        >
          17k
        </TitleOfHead>
        <TextContent
          lineHeight="32px"
          color={colors.grayColor}
        >
          happy customers on worldwide
        </TextContent>
      </Couple>
      <Line />

      <Couple
        width={151}
      >
        <TitleOfHead
          size={64}
          letterSpacing={0}
          color={colors.black}
        >
          15+
        </TitleOfHead>
        <TextContent
          lineHeight="32px"
          color={colors.grayColor}
        >
          Hours of work experience
        </TextContent>
      </Couple>
      <Line />

      <Couple
        width={199}
      >
        <TitleOfHead
          size={64}
          letterSpacing={0}
          color={colors.black}
        >
          50+
        </TitleOfHead>
        <TextContent
          lineHeight="32px"
          color={colors.grayColor}
        >
          Creativity & passionate members
        </TextContent>
      </Couple>

      <Line className="line" />

      <Couple
        width={199}
      >
        <TitleOfHead
          size={64}
          letterSpacing={0}
          color={colors.black}
        >
          100+
        </TitleOfHead>
        <TextContent
          lineHeight="32px"
          color={colors.grayColor}
        >
          Integrations lorem ipsum integrations
        </TextContent>
      </Couple>
    </Stand>

    <StrengthImage />

    <BlockText>
      <TitleOfHead
        width={772}
        color={colors.black}
      >
        Lift your business to new
        heights with our digital
        marketing services
      </TitleOfHead>
      <TextContent
        width={421}
        color={colors.grayColor}
        lineHeight="32px"
      >
        To build software that gives customer facing
        teams in small and medium-sized businesses
        the ability to create rewarding and long-lasting
        relationships with customers
      </TextContent>
    </BlockText>
  </Content>)
}

export default Strength;