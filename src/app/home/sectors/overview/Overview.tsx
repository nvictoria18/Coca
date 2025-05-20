import {
  Frame,
  FramesBlock,
  FramesList,
  StyledHeadTextBlock,
  StyledOverview,
  StyledTextBlock,
} from "./Overview.style";

import colors from "@/app/colors";
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import TextContent from "@/components/ui/TextContent/TextContent";
import { FrameTitle } from "@/components/ui/Frame/FrameTitle/FrameTitle";
import { FrameText } from "@/components/ui/Frame/FrameText/FrameText";
import { cartsDesktop } from "./Carts";
import { useEffect, useState } from "react";
import { size } from "@/app/break-points";
import { texts } from "./Text";
import { TypesOfScreen } from "@/types/Screen";
import useTypeScreen from "@/utils/hooks/useTypeScreen";

type OverviewProps = {
  type: TypesOfScreen;
}

const Overview = ({
  type
}: OverviewProps) => {
  const { first, second } = cartsDesktop(type);
  const text = texts[type];

  return (
    <div style={{backgroundColor: colors.darkColor}}>

    <StyledOverview className="overview">

      <StyledTextBlock className="overiew-container">

        <StyledHeadTextBlock className="overview-container__text-block">

          <TitleOfHead
            width={816}
            height={201}
            color={colors.white}
          >
            {text}
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

        <FramesBlock
          className="overview-container__frames"
        >
          <FramesList
            className="overview-container__frame-list"
            width={453}
          > {
              first.map((frame) => (
                <Frame
                  mR={frame.mR}
                  className="frame"
                >
                  {frame.icon}
                  <FrameTitle
                    className="frame-title"
                    color={colors.white}
                    width={frame.titleWidth}
                  >
                    {frame.title}
                  </FrameTitle>
                  <FrameText
                    mobileHeight={frame.mobileHeight}
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
            className="overview-container__frame-list"
            width={481}
          >
            {second.map((frame) => (
              <Frame
                mR={frame.mR}
              >
                {frame.icon}
                <FrameTitle
                  className="frame-title"
                  color={colors.white}
                  width={frame.titleWidth}
                >
                  {frame.title}
                </FrameTitle>
                <FrameText
                  mobileHeight={frame.mobileHeight}
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
    </div>
  )
}

export default Overview;