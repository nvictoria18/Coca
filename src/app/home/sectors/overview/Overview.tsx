import {
  Frame,
  FramesBlock,
  FramesList,
  StyledHeadTextBlock,
  StyledOverview,
  StyledTextBlock,
} from "./Overview.style";

import Calendar from '@/image/Icon.svg'
import Note from '@/image/Icon (1).svg'
import Check from '@/image/Icon (2).svg'
import Security from '@/image/Icon (3).svg'
import colors from "@/app/colors";
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import TextContent from "@/components/ui/TextContent/TextContent";
import { FrameTitle } from "@/components/ui/Frame/FrameTitle/FrameTitle";
import { FrameText } from "@/components/ui/Frame/FrameText/FrameText";

const Overview = () => {
  return (
    <StyledOverview>

      <StyledTextBlock>

        <StyledHeadTextBlock>

          <TitleOfHead
            width={816}
            height={201}
            color={colors.white}>
            Coca help our client solve
            complex customer problems
            with date that does more.
          </TitleOfHead>

          <TextContent
            width={660}
            height={81}
            lineHeight="150%"
            color={colors.grayColor}
          >
            Our platform offers the modern enterprise full control of how date can be
            access and used with industry leading software solutions for identity,
            activation, and date collaboration
          </TextContent>

        </StyledHeadTextBlock>

        <FramesBlock>
          <FramesList
            width={453}
          >
            <Frame
              mR={54}
            >
              <Calendar />
              <FrameTitle
                color={colors.white}
                width={249}
              >
                Build your date fundamental
              </FrameTitle>
              <FrameText
                color={colors.grayColor}
                width={446}
              >
                Build access to date, develop valuable business insights
                and drive revenue while maintaining full control over
                access and use of date at all times.
              </FrameText>

            </Frame>

            <Frame
              mR={0}
            >
              <Note />
              <FrameTitle
                width={249}
                color={colors.white}
              >
                Activate your date
              </FrameTitle>
              <FrameText
                width={453}
                color={colors.grayColor}
              >
                Accurately address your specific audiences at scale across
                any channel, platform, publisher or network and safely
                translate date between identity space to improve results.
              </FrameText>

            </Frame>


          </FramesList>


          <FramesList
            width={481}
          >
            <Frame
              mR={80}
            >
              <Check />
              <FrameTitle
                color={colors.white}
                width={249}
              >
                Measure more effective
              </FrameTitle>
              <FrameText
                color={colors.grayColor}
                width={401}
              >
                Effectively measure people-based campaigns with
                the freedom to choose from best-of breed partners
                to optimize and drive media innovation.
              </FrameText>

            </Frame>

            <Frame
              mR={0}
            >
              <Security />
              <FrameTitle
                color={colors.white}
                width={293}
              >
                Strengthen consumer privacy
              </FrameTitle>
              <FrameText
                color={colors.grayColor}
                width={481}
              >
                Protect your customer date with leading privacy-preserving
                technologies and advanced techniques to minimize date
                movement while still enabling insight generation.
              </FrameText>

            </Frame>

          </FramesList>

        </FramesBlock>

      </StyledTextBlock>

    </StyledOverview>
  )
}

export default Overview;