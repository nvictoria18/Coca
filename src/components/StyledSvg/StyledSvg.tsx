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
  widthdesktop?: string;
  widthmobile?: string;
}>`
  width: ${({ widthdesktop = '24px' }) => widthdesktop};

  @media (${device.mobile}) {
    width: ${({ widthmobile = '24px' }) => widthmobile};
  }
`

const StyledSvg = ({
  className,
  svgElement,
  widthMobile,
  widthDesktop,
}: StyledSvgProps) => {
  return (<SvgContainer
    widthmobile={widthMobile}
    widthdesktop={widthDesktop}
  >
      {svgElement}
    </SvgContainer>);
}

export default StyledSvg;