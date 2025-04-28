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
import { carts } from "./Carts";

const Overview = () => {
  const { first, second } = carts;
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
          > {
              first.map((frame) => (
                <Frame
                  mR={frame.mR}
                >
                  {frame.icon}
                  <FrameTitle
                    color={colors.white}
                    width={frame.titleWidth}
                  >
                    {frame.title}
                  </FrameTitle>
                  <FrameText
                    color={colors.grayColor}
                    width={frame.textWidth}
                  >
                    {frame.text}
                  </FrameText>

                </Frame>

              ))
            }

          </FramesList>


          <FramesList
            width={481}
          >
            {second.map((frame) => (
                <Frame
                  mR={frame.mR}
                >
                  {frame.icon}
                  <FrameTitle
                    color={colors.white}
                    width={frame.titleWidth}
                  >
                    {frame.title}
                  </FrameTitle>
                  <FrameText
                    color={colors.grayColor}
                    width={frame.textWidth}
                  >
                    {frame.text}
                  </FrameText>

                </Frame>

              ))
            }
           
          </FramesList>

        </FramesBlock>

      </StyledTextBlock>

    </StyledOverview>
  )
}

export default Overview;