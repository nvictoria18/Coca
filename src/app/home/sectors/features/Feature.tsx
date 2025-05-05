import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import {
  Content,
  FeatureBlock,
  Frames,
  Head,
  Info,
  StatisticGraphic,
  WrappedStatisticGraphic,
  Text,
  Frame,
  Check,
  WrappedImg
} from "./Feature.style";
import colors from "@/app/colors";
import TextContent from "@/components/ui/TextContent/TextContent";
import { StyledImg } from "@/components/ui/StyledImg/StyledImg";

const Feature = () => {
  return (
    <FeatureBlock className="features">
      <Content className="features-container">

        <WrappedStatisticGraphic className="features-container imgs">
          <WrappedImg>
            <StyledImg src="/image/Image.svg" />
          </WrappedImg>
          <StatisticGraphic>
            <StyledImg src="/image/Bar Chart.svg" />
          </StatisticGraphic>
        </WrappedStatisticGraphic>

        <Info className="features__info">
          <Head>
            <TitleOfHead color={colors.darkColor}>
              Passion to increase
              company revenue up
              to 85%
            </TitleOfHead>
            <TextContent
              lineHeight="32px"
              color={colors.grayColor}
            >
              Automate your sales, marketing and
              service in one platform. Avoid date leaks
              and enable consistent messaging
            </TextContent>
          </Head>

          <Frames className="features__frames">
            <Frame>
              <Check>
                <StyledImg src="/image/Check.svg" className="check" />
              </Check>
              <Text>
                Close more deals with single - page contact managment
              </Text>
            </Frame>

            <Frame>
              <Check>
                <StyledImg src="/image/Check.svg" className="check" />
              </Check>
              <Text>
                Enjoy one-click calling, call scripts and voicemail automation
              </Text>
            </Frame>

            <Frame>
              <Check>
                <StyledImg src="/image/Check.svg" className="check" />

              </Check>
              <Text>
                Take stages and milestones of your deals to keep the sales process an track
              </Text>
            </Frame>

          </Frames>
        </Info>
      </Content>
    </FeatureBlock>
  )
}

export default Feature;