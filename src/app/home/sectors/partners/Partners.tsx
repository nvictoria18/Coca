'use client'

import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import {
  InsideBlock,
  PartnersBlock,
  TablePartners,
  Text
} from "./Partners.style";
import TextContent from "@/components/ui/TextContent/TextContent";
import colors from "@/app/colors";
import { logos } from "./Logos";
import { TypesOfScreen } from "@/types/Screen";


type PartnersProps = {
  type: TypesOfScreen;
}

const Partners = ({
  type
}: PartnersProps) => {
  return (
    <PartnersBlock className="partners">
      <InsideBlock className="partners-container">
        <Text className="partners-container text">

          <TitleOfHead
            color={colors.darkColor}
            fontweigthmobile={700}
            sizemobile={24}
            lineheightmobile="32px"
            letterspacingmobile="0px"
          >
            890+
          </TitleOfHead>
          <TextContent
            lineHeight="32px"
            color={colors.grayColor}

          >
            some big companies that we work
            with, and trust us very much
          </TextContent>
        </Text>

        <TablePartners
          className="partners-container table"
        >
          {logos[type].map((logo) => logo.path)}
          
        </TablePartners>

      </InsideBlock>

    </PartnersBlock>
  )
}

export default Partners;