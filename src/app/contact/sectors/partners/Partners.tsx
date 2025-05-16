import {
  InsideBlock,
  PartnersBlock,
  TablePartners,
  Text,
  BottomText,
  Title,
} from "./Partners.style";
import { logos } from "./Logos";


const Partners = () => {

  return (
    <PartnersBlock className="partners">
      <InsideBlock className="partners-container">
        <Text className="partners-container text">

          <Title
            className="partners-container title"
          >
            890+
          </Title>
          <BottomText
            className="partners-container bottom-text"
          >
            Some big companies that we work
            with, and trust us very much
          </BottomText>
        </Text>

        <TablePartners
          className="partners-container table"
        >
          {logos.map((logo) => logo.path)}

        </TablePartners>

      </InsideBlock>

    </PartnersBlock>
  )
}

export default Partners;