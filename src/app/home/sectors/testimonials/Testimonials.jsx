import colors from "@/app/colors";
import {
    Block,
    Review,
    Text,
    CommentBlock,
    CommentGrade,
    CommentText,
    Info,
    About,
    AboutText,
    AboutName,
    AboutJobTitle,
    Reviews
} from "./Testimonials.style"
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import TextContent from "@/components/ui/TextContent/TextContent";
import Bg from "@/image/comments-bg.svg"
import { reviews } from "./Reviews";
import Slider from "@/components/ui/Slider/Slider";
import Star from '@/image/Star.svg';

const Testimonials = () => {
    return (
        <Block>
            <Bg className="bg" />
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
            <Reviews>
                <Slider
                    width={1039}
                >
                    {reviews.map((review) => (
                        <Review className="slider-item">
                            <CommentBlock>
                                <CommentGrade>
                                    {Array.from({ length: Math.floor(Number(review.stars))}).map((star) => <Star />)}
                                    {review.stars}
                                </CommentGrade>
                                <CommentText>
                                    {review.comment}
                                </CommentText>
                            </CommentBlock>

                            <Info>
                                <About>
                                    {review.avatar}
                                    <AboutText>
                                        <AboutName>
                                            {review.author}
                                        </AboutName>
                                        <AboutJobTitle>
                                            {review.about}
                                        </AboutJobTitle>
                                    </AboutText>
                                </About>
                            </Info>
                        </Review>)
                    )}
                </Slider>
            </Reviews>
        </Block>)
}

export default Testimonials;