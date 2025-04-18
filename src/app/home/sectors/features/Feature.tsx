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
  Frame
} from "./Feature.style";
import Check from '@/image/Check.svg'
import colors from "@/app/colors";
import TextContent from "@/components/ui/TextContent/TextContent";
import Image from '@/image/Image.svg';

const Feature = () => {
  return (
    <FeatureBlock>
      <Content>

        <WrappedStatisticGraphic>
          <Image />
          <StatisticGraphic />
        </WrappedStatisticGraphic>

        <Info>
          <Head>
            <TitleOfHead color={colors.darkColor}>
              Passion to increase <br />
              company revenue up <br />
              to 85%
            </TitleOfHead>
            <TextContent
              lineHeight="32px"
              color={colors.grayColor}
            >
              Automate your sales, marketing and <br />
              service in one platform. Avoid date leaks <br />
              and enable consistent messaging
            </TextContent>
          </Head>
          <Frames>

            <Frame>
              <Check />
              <Text>
                Close more deals with single - page contact managment
              </Text>
            </Frame>

            <Frame>
              <Check />
              <Text>
                Enjoy one-click calling, call scripts and voicemail automation
              </Text>
            </Frame>

            <Frame>
              <Check />
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