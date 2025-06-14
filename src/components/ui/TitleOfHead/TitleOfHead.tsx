import { device } from "@/app/break-points";
import colors from "@/app/colors"
import { ReactNode } from "react";
import styled from "styled-components"

type TitleProps = {
  children?: string | ReactNode;
  className?: string;
  color: string;
  width?: number;
  height?: number | string;
  size?: number;
  letterspacing?: string;
  lineheight?: string;
  sizemobile?: number;
  lineheightmobile?: string;
  letterspacingmobile?: string;
  fontweigthmobile?: number;
  heightmobile?: number;
}

export const StyledTitleOfHead = styled.div<{
  color: string;
  width?: number;
  height?: number | string;
  size?: number;
  letterSpacing?: string;
  lineheight?: string;
  sizemobile?: number;
  lineheightmobile?: string;
  letterspacingmobile?: string;
  fontweigthmobile?: number;
  heightmobile?: number;
}>`
  width: ${({ width }) => width }px;
  height: ${({ height }) => height = 'auto' }px;
  color: ${({ color }) => color };
  font-size: ${({ size = 56 }) => size}px;
  font-family: ${colors.font};
  font-weight: 600;
  line-height: ${({lineheight = '120%'}) => lineheight};
  letter-spacing:  ${({ letterSpacing = '-2px' }) => letterSpacing};
  vertical-align: middle;

  @media (${device.mobile}) {
    font-size: ${({ sizemobile = 24 }) => sizemobile}px;
    line-height: ${({ lineheightmobile = '34px' }) => lineheightmobile};
    letter-spacing: ${({ letterspacingmobile = '0px'}) => letterspacingmobile};
    letter-spacing: ${({ fontweigthmobile = 600 }) => fontweigthmobile};
    height: ${({ heightmobile = 102 }) => heightmobile}px;
  }
`

const TitleOfHead: React.FC<TitleProps> = ({
  className,
  children,
  color,
  width,
  height,
  size,
  letterspacing,
  lineheight,
  sizemobile,
  lineheightmobile,
  letterspacingmobile,
  fontweigthmobile,
  heightmobile,
}) => {
  return (<StyledTitleOfHead
    width={width}
    color={color}
    height={height}
    size={size}
    letterSpacing={letterspacing}
    lineheight={lineheight}
    sizemobile={sizemobile}
    lineheightmobile={lineheightmobile}
    letterspacingmobile={letterspacingmobile}
    fontweigthmobile={fontweigthmobile}
    heightmobile={heightmobile}
    className={className}
  >
    {children}
  </StyledTitleOfHead>)
}

export default TitleOfHead;