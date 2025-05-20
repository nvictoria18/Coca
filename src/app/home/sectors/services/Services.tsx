import TextContent from "@/components/ui/TextContent/TextContent";
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import {
  Block,
  Cart,
  Content,
  StyledIcon,
  StyledImage,
  Table,
  Text,
  TextOfCart
} from "./Services.style";
import colors from "@/app/colors";
import { framesOfCart } from "./FramesOfCart";
import { FrameTitle } from "@/components/ui/Frame/FrameTitle/FrameTitle";
import { FrameText } from "@/components/ui/Frame/FrameText/FrameText";
import useTypeScreen from "@/utils/hooks/useTypeScreen";
import { textType } from "./textType";
import { isMobileScreen } from "@/utils/isMobileScreen";
import { TypesOfScreen } from "@/types/Screen";
type ServicesProps = {
  type: TypesOfScreen;
}

const Services = ({
  type
}: ServicesProps) => {
  return (
    <Block className="services">
      <Content className="services-container">
        <Text className="services-container text">
          <TitleOfHead
            color={colors.black}
          >
            {textType[type]}
          </TitleOfHead>
          <TextContent
            width={isMobileScreen(type, 462, 335)}
            color={colors.grayColor}
            lineHeight={"32px"}
          >
            Build more meaningful and lasting relationships -
            better understand their needs, identify new
            opportunities to help address any problems faster
          </TextContent>
        </Text>
        <Table
          className="services-container__table"
        >
          {framesOfCart[type].map((frame) => (
            <Cart>
              <StyledImage
                className="cart-images"
              >
                {frame.image}
                <StyledIcon
                  className="cart-icons"
                >
                  {frame.icon}
                </StyledIcon>
              </StyledImage>
              <TextOfCart>
                {
                  frame.width ?
                    <FrameTitle
                      color={colors.black}
                      width={frame.width}
                      fontSizeMobile="16px"
                      lineHeightMobile="24px"
                      letterSpacingMobile="0px"
                    >
                      {frame.title}
                    </FrameTitle>
                    : (
                      <FrameTitle
                        fontSizeMobile="16px"
                        lineHeightMobile="24px"
                        letterSpacingMobile="0px"
                        color={colors.black}
                      >
                        {frame.title}
                      </FrameTitle>
                    )}
                <FrameText
                  width={268}
                  color={colors.grayColor}
                  widthMobile="159px"
                >
                  {frame.content}
                </FrameText>
              </TextOfCart>
            </Cart>
          ))}
        </Table>

      </Content>
    </Block>
  )
}

export default Services;