'use client'

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
import { textType } from "./textType";
import { isMobileScreen } from "@/utils/isMobileScreen";
import { TypesOfScreen } from "@/types/Screen";

type StrengthProps = {
  type: TypesOfScreen;
}

const Strength = ({
  type
}:StrengthProps) => {
  const items = couples(type);
  const sizeText = fontSize(type)

  return (
    <Content className="strength">
      <Stand className="stand">
        {items.map((couple) => (
          <div
          key={couple.title}
          style={{ display: 'flex' }}>
            <Couple
              className="couple"
              width={couple.width}
            >
              <TitleOfHead
                size={sizeText}
                letterspacing='0px'
                color={colors.black}
                sizemobile={32}
                lineheight="120%"
                lineheightmobile="42px"
                letterspacingmobile="-2px"
                heightmobile={77}
              >
                {couple.title}
              </TitleOfHead>
              <TextContent
                lineHeight="32px"
                color={colors.grayColor}
                sizeMobile={16}
                lineHeightMobile="24px"
                fontWeightMobile={400}
              >
                {couple.text}
              </TextContent>
            </Couple>
            {couple.line &&
              <Line
                className="strength__line"
              />}
          </div>
        ))}
      </Stand>


      <StrengthImage>
        <StyledImg src="/image/Strength.svg" />
      </StrengthImage>

      <BlockText>
        <TitleOfHead
          width={isMobileScreen(type, 772, 335)}
          height={201}
          color={colors.black}
        >
          {textType[type]}
        </TitleOfHead>
        <TextContent
          width={isMobileScreen(type, 421, 335)}
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