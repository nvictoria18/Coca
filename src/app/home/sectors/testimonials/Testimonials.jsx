import colors from "@/app/colors";
import {
    Block,
    Text,
} from "./Testimonials.style"
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import TextContent from "@/components/ui/TextContent/TextContent"

const Testimonials = () => {
    return (
        <Block>
            <Text>
                <TitleOfHead
                    color={colors.black}
                    width={530}
                >
                    What our customer are saying
                </TitleOfHead>
                <TextContent
                    width={376}
                    height={64}
                    color={colors.grayColor}
                    lineHeight={"32px"}          >
                    We are trusted numerous companies from different business to meet their needs
                </TextContent>
            </Text>
        </Block>)
}

export default Testimonials;