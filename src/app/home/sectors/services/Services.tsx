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

const Services = () => {

  console.log()
  return (
    <Block>
      <Content>
        <Text>
          <TitleOfHead
            color={colors.black}
          >
            Advertise, analyze, and
            optimize! We do it all for
            you
          </TitleOfHead>
          <TextContent
            width={462}
            color={colors.grayColor}
            lineHeight={"32px"}
          >
            Build more meaningful and lasting relationships -
            better understand their needs, identify new
            opportunities to help address any problems faster
          </TextContent>
        </Text>
        <Table>
          {framesOfCart.map((frame) => (
            <Cart>
              <StyledImage>
                {frame.image}
                <StyledIcon>
                  {frame.icon}
                </StyledIcon>
              </StyledImage>
              <TextOfCart>
                {
                  frame.width ?
                    <FrameTitle
                      color={colors.black}
                      width={frame.width}
                    >
                      {frame.title}
                    </FrameTitle>
                    : (
                      <FrameTitle
                        color={colors.black}
                      >
                        {frame.title}
                      </FrameTitle>
                    )}
                <FrameText
                  width={268}
                  color={colors.grayColor}
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