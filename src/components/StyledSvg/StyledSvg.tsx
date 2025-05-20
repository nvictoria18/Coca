import { device } from "@/app/break-points";
import { JSX } from "react";
import styled from "styled-components";

type StyledSvgProps = {
  svgElement: JSX.Element;
  widthMobile?: string;
  widthDesktop?: string;
  className?: string;
}

const SvgContainer = styled.div<{
  widthDesktop?: string;
  widthMobile?: string;
}>`
  width: ${({ widthDesktop = '24px' }) => widthDesktop};

  @media (${device.mobile}) {
    width: ${({ widthMobile = '24px' }) => widthMobile};
  }
`

const StyledSvg = ({
  className,
  svgElement,
  widthMobile,
  widthDesktop,
}: StyledSvgProps) => {
  return (<SvgContainer
    widthMobile={widthMobile}
    widthDesktop={widthDesktop}
  >
      {svgElement}
    </SvgContainer>);
}

export default StyledSvg;