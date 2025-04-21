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


const Partners = () => {
  return (
    <PartnersBlock>
      <InsideBlock>
        <Text>

          <TitleOfHead
          color={colors.darkColor}
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

        <TablePartners>
          {logos.map((logo) => logo.path)}
          
        </TablePartners>

      </InsideBlock>

    </PartnersBlock>
  )
}

export default Partners;