import articles from "./articlesList";
import {
  ArticlesContainer,
  Content,
  ArticleCouple,
  ArticleTitle,
  ArticleText,
  Image,
  Text,
  Article
} from "./Articles.style";
import useTypeScreen from "@/utils/hooks/useTypeScreen";

const Articles = () => {
  const type = useTypeScreen();
  return (
    <ArticlesContainer
      className="articles"
    >
      <Content
        className="articles-container"
      >

        <ArticleCouple
          className="articles-container couple"
        >
          {articles[type].first.map((article) => (
            <Article
              className="articles-container item"

            >

              <Image
                className="articles-container image"
              >
                {article.image}
              </Image>
              <Text
                className="articles-container text-block"

              >
                <ArticleTitle
                  width={article.widthTitle}
                  className={`articles-container title ${article.underline ? 'underline' : null}`}

                >
                  {article.title}
                </ArticleTitle>
                <ArticleText
                  width={article.widthLText}
                  className="articles-container text"

                >
                  {article.text}
                </ArticleText>
              </Text>
            </Article>
          ))}
        </ArticleCouple>

        <ArticleCouple
          className="articles-container"
        >
          {articles[type].second.map((article) => (
            <Article
              className="articles-container item"
            >
              <Image
                className="articles-container image"
              >
                {article.image}
              </Image>
              <Text
                className="articles-container text-block"

              >
                <ArticleTitle
                  className={`articles-container title ${article.underline ? 'underline' : null}`}
                  width={article.widthTitle}
                >
                  {article.title}
                </ArticleTitle>
                <ArticleText
                  width={article.widthLText}
                  className="articles-container text"
                >
                  {article.text}
                </ArticleText>
              </Text>

            </Article>
          ))}
        </ArticleCouple>

      </Content>

    </ArticlesContainer>
  )
}

export default Articles;