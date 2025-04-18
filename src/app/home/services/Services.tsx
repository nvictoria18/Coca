import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import {
  InsideBlock,
  ServicesBlock,
  TableServices,
  Text
} from "./Services.style";
import TextContent from "@/components/ui/TextContent/TextContent";
import colors from "@/app/colors";
import AirBnB from "@/image/Airbnb Logo.svg"
import Amazon from "@/image/Amazon Logo.svg"
import FedEx from "@/image/FedEx Logo.svg"
import Microsoft from "@/image/Microsoft Logo.svg"
import Google from "@/image/Google Logo.svg"
import Ola from "@/image/OLA Logo.svg"
import Walmart from "@/image/Walmart Logo.svg"
import Oyo from "@/image/OYO Logo.svg"


const Services = () => {
  return (
    <ServicesBlock>
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

        <TableServices>
          // маппаться
          <AirBnB />
          <Amazon />
          <FedEx />

          <Microsoft />

          <Google />

          <Walmart />

          <Oyo />
          
        </TableServices>

      </InsideBlock>

    </ServicesBlock>
  )
}

export default Services;