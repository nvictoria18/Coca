import {
  StyledQuote,
  Content,
  Title,
  Text,
} from "./Quote.style";

const Quote = () => {
  return (<StyledQuote
    className="quote"
  >
    <Content
      className="quote__container"
    >
      <Title
        className="quote__container title"
      >
        Powerful ideas & sales acceleration
      </Title>
      <Text
        className="quote__container text"
      >
        We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.
      </Text>

    </Content>
  </StyledQuote>)
}

export default Quote;