import { SliderLeftBtn } from "@/components/ui/Slider/SliderLeftBtn";
import articles from "./articles";
import {
  Content,
  MainBlock,
  SliderBlock,
  StyledArticlesSection,
  Title,
  Image,
  Text,
  Article,
  TitleArticle,
  MainText,
  SliderBtns,
  TextArticle,
  SliderItems
} from "./ArticlesSection.style";
import { SliderRightBtn } from "@/components/ui/Slider/SliderRightBtn";
import { Button } from "@/components/ui/Button/Button";
import colors from "@/app/colors";
import { useState } from "react";

const ArticlesSection = () => {
  const [index, setIndex] = useState(0);

  const handlerSliderRight = () => {
    setIndex((prev) => prev > (Math.floor(articles.length / 3) - 2) ? prev : prev + 1)
  }
  
  const handlerSliderLeft = () => {
    setIndex((prev) => prev < 1 ? prev : prev - 1);
  }

  return (<StyledArticlesSection
    className="articles-section"
  >
    <Content
      className="articles-section container"

    >
      <MainBlock
        className="articles-section main"

      >
        <MainText
          className="articles-section main-text"

        >
          <Title
            className="articles-section title"
          >
            Articles
          </Title>
          <Text
            className="articles-section text"
          >
            Complex tech decoded by engineers, business trends analyzed by experts.
          </Text>

        </MainText>
        <SliderBtns
          className="slider__buttons"
        >
          <SliderRightBtn
            className="slider__buttons right"
            handlerSliderRight={handlerSliderRight}
          />
          <SliderLeftBtn
            className="slider__buttons left"
            handlerSliderLeft={handlerSliderLeft}
          />
        </SliderBtns>
      </MainBlock>
      <SliderBlock
        className="articles-section__slider"
      >
        <SliderItems
          transform={-index}
          className="articles-section__slider-items"
        >

          {
            articles.map((article) => (
              <Article
                className="articles-section__slider article"
                widthDesktop={article.widthDesktop}
                widthMobile={article.widthMobile}
              >
                <Image
                  className="articles-section__slider article__image"
                >
                  {article.image}
                </Image>
                <TextArticle
                  className="articles-section__slider article__text"
                >
                  <TitleArticle
                    className="articles-section__slider article__title"

                  >
                    {article.title}
                  </TitleArticle>
                  <Text
                    className="articles-section__slider article__bottom-text"

                  >
                    {article.text}
                  </Text>
                </TextArticle>
                <Button
                  className="articles-section__slider button"
                  border={`1px solid ${colors.lightColor}`}
                  theme={"dark"}
                  size={16}>
                  Read More
                </Button>
              </Article>
            ))
          }

        </SliderItems>

      </SliderBlock>
    </Content>

  </StyledArticlesSection>

  )
}

export default ArticlesSection;