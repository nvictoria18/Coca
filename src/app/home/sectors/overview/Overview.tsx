import {
  Frame,
  FramesBlock,
  FramesList,
  FrameText,
  FrameTitle,
  StyledHeadTextBlock,
  StyledOverview,
  StyledTextBlock,
  StyledTextOfHead,
  StyledTitleOfHead
} from "./Overview.style";

import Calendar from '@/image/Icon.svg'
import Note from '@/image/Icon (1).svg'
import Check from '@/image/Icon (2).svg'
import Security from '@/image/Icon (3).svg'

const Overview = () => {
  return (
    <StyledOverview>

      <StyledTextBlock>

        <StyledHeadTextBlock>

          <StyledTitleOfHead>
            Coca help our client solve
            complex customer problems
            with date that does more.
          </StyledTitleOfHead>

          <StyledTextOfHead>
            Our platform offers the modern enterprise full control of how date can be
            access and used with industry leading software solutions for identity,
            activation, and date collaboration
          </StyledTextOfHead>

        </StyledHeadTextBlock>

        <FramesBlock>
          <FramesList
            width={453}
          >
            <Frame
              marginRight={54}
            >
              <Calendar />
              <FrameTitle
                width={249}
              >
                Build your date fundamental
              </FrameTitle>
              <FrameText
                width={446}
              >
                Build access to date, develop valuable business insights
                and drive revenue while maintaining full control over
                access and use of date at all times.
              </FrameText>

            </Frame>

            <Frame>
              <Note />
              <FrameTitle
                width={249}

              >
                Activate your date
              </FrameTitle>
              <FrameText
                width={453}
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
              marginRight={80}
            >
              <Check />
              <FrameTitle
                width={249}
              >
                Measure more effective
              </FrameTitle>
              <FrameText
                width={401}
              >
                Effectively measure people-based campaigns with
                the freedom to choose from best-of breed partners
                to optimize and drive media innovation.
              </FrameText>

            </Frame>

            <Frame>
              <Security />
              <FrameTitle

                width={293}
              >
                Strengthen consumer privacy
              </FrameTitle>
              <FrameText
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