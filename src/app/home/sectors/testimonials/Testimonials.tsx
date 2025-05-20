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
    Bg,
    Reviews
} from "./Testimonials.style"
import TitleOfHead from "@/components/ui/TitleOfHead/TitleOfHead";
import TextContent from "@/components/ui/TextContent/TextContent";
import { reviews } from "./Reviews";
import Slider from "@/components/ui/Slider/Slider";
import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import useTypeScreen from "@/utils/hooks/useTypeScreen";
import { isMobileScreen } from "@/utils/isMobileScreen";
import { TypesOfScreen } from "@/types/Screen";

type TestimonialsProps = {
  type: TypesOfScreen;
}

const Testimonials = ({
    type
}: TestimonialsProps) => {
    console.log(type)
    return (
        <Block className="testimonials">
            <Bg className="testimonials__background-image">
                <StyledImg src="/image/comments-bg.svg" />
            </Bg>
            <Text
                className="testimonials__text"
            >
                <TitleOfHead
                    color={colors.black}
                    width={isMobileScreen(type, 530, 247)}
                >
                    What our customer are saying
                </TitleOfHead>
                <TextContent
                    className="testimonials__text-content"
                    width={isMobileScreen(type, 376, 229)}
                    height={64}
                    color={colors.grayColor}
                    lineHeight={"32px"}          >
                    We are trusted numerous companies from different business to meet their needs
                </TextContent>
            </Text>
            <Reviews className="testimonials__reviews">
                <Slider
                    className="testimonials slider"
                    width={isMobileScreen(type, 1039, 303)}
                >
                    {reviews.map((review) => (
                        <Review className="testimonials__reviews rewiews-item">
                            <CommentBlock className="rewiews-item__comment">
                                <CommentGrade className="rewiews-item__comment_grade">
                                    {Array.from({ length: Math.floor(Number(review.stars))}).map((star) => <StyledImg className="star" src="/image/Star.svg" />)}
                                    {review.stars}
                                </CommentGrade>
                                <CommentText className="rewiews-item__comment_text">
                                    {review.comment}
                                </CommentText>
                            </CommentBlock>

                            <Info className="rewiews-item__information">
                                <About className="rewiews-item about">
                                    {review.avatar}
                                    <AboutText className="about__text">
                                        <AboutName className="about__name">
                                            {review.author}
                                        </AboutName>
                                        <AboutJobTitle className="about__job-title">
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