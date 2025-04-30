import TextContent from "@/components/ui/TextContent/TextContent";
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import {
  BlockText,
  Content,
  Couple,
  Line,
  Stand,
  StrengthImage
} from "./Strength.style";
import colors from "@/app/colors";
import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import useTypeScreen from "@/utils/hooks/useTypeScreen";
import { couples, fontSize } from "./Couples";

const Strength = () => {
  const type = useTypeScreen();
  const items = couples(type);
  const sizeText = fontSize(type)

  return (

    <Content className="strength">
      <Stand className="stand">
        {items.map((couple) => (
          <>
            <Couple
              className="couple"
              width={couple.width}
            >
              <TitleOfHead
                size={sizeText}
                letterSpacing='0px'
                color={colors.black}
                sizeMobile={32}
                lineHeight="42px"
                letterSpacingMobile="-1px"
              >
                {couple.title}
              </TitleOfHead>
              <TextContent
                lineHeight="32px"
                color={colors.grayColor}
              >
                {couple.text}
              </TextContent>
            </Couple>
            {couple.line &&
              <Line
                className="strength__line"
              />}
          </>
        ))}
      </Stand>


      <StrengthImage>
        <StyledImg src="/image/Strength.svg" />
      </StrengthImage>

      <BlockText>
        <TitleOfHead
          width={772}
          height={201}
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