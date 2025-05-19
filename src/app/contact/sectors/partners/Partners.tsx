import {
  InsideBlock,
  PartnersBlock,
  TablePartners,
  Text,
  BottomText,
  Title,
} from "./Partners.style";
import { logos } from "./Logos";
import { isMobileScreen } from "@/utils/isMobileScreen";
import useTypeScreen from "@/utils/hooks/useTypeScreen";


const Partners = () => {
  const type = useTypeScreen();
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
            {isMobileScreen(type, 'S', 's')}ome big companies that we work
            with, and trust us very much
          </BottomText>
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