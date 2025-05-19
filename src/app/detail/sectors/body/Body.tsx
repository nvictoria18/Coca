import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import socialMedia from "./socialMedia";
import {
  Article,
  Author,
  Avatar,
  AvatarComment,
  CommentAttrs,
  CommentBlock,
  CommentInfo,
  CommentJob,
  CommentName,
  CommentText,
  Content,
  Cover,
  Info,
  Information,
  Job,
  Name,
  Paragraph,
  SocialMedia,
  SocialMediaContainer,
  StyledBody,
  TimeStamp,
  TitleOfArticle,
  Written,
  ArticleText
} from "./Body.style";
import { isMobileScreen } from "@/utils/isMobileScreen";
import useTypeScreen from "@/utils/hooks/useTypeScreen";

const Body = () => {
  const type = useTypeScreen();
  return (<StyledBody
    className="body"
  >
    <Content
      className="body-container"
    >
      <Author
        className="author"
      >
        <Info
          className="author information"
        >
          <Avatar
            className="author avatar"
          >
            <StyledImg
              className="avatar image"
              src="/image/avatar detail.png"></StyledImg>
          </Avatar>
          <Information
            className="author name-job"
          >
            <Name
              className="author name"
            >Renee Wells</Name>
            <Job
              className="author job"
            >Product Designer, Quotient</Job>
          </Information>
        </Info>
        <TimeStamp
          className="author timestamp"
        >
          10 min read  November 10, 2023
        </TimeStamp>
      </Author>
      <Article
        className="detail article"
      >
        <Cover
          className="article cover"
        >
          <StyledImg
            className="article cover-image"
            src="/image/cover.png"
          />
        </Cover>

        <ArticleText
          className="article text"
        >
          <Paragraph
            className="article paragraph"
          >
            Depending on the input, this can result in using a lot of processing power and time. The whole process would take approximately 5 seconds to return a result to the client. Keep in mind we’re talking about 1 item, a contact from a contact book. After a while, a new requirement is added. Solution must support companies that manage their contacts organized in files. We agreed to develop a web application that would support upload of dataset files, like .csv. The new web application should support third party integrations. Some of them are the ESP/CRM services, like Mailchimp. User does not need to see the result immediately. System can later notify the user about the result, when the process finishes. This information is the key that we need to leverage on when developing our solution. So here’s how we did it.
          </Paragraph>

          <Paragraph
            className="article paragraph"
            style={{ marginTop: '32px' }}
          >
            <TitleOfArticle
              className="article subtitle"
            >Initial approach</TitleOfArticle>
            Our initial approach went like this: The web application would read a .csv file line-by-line and submit an array of entries to the backend REST API. Processing is in real time, immediately after the user makes a request for the process to start, he expects a result. Another approach is to apply vertical scaling to AWS architecture. Meaning we used larger, more expensive instances that have more RAM and processing power. This system worked well for smaller datasets, maybe up to 5k entries, but for larger datasets multiple problems arose. This solution is prone to failure due to long request time. Also, because of some 3rd party services that aren’t optimized for large scale loads or they don’t have batch endpoints. 3rd party services also tend to protect their architecture from making a huge bill on their end. The whole process was done in real-time. The request can take a lot of time hanging in there while the backend would do all the work and return the result to the client. The request was limited to 300 seconds (at time of writing the article) before AWS would cancel it… Also I need to mention that the user has to wait a few minutes to see the results. They can’t use the app during the process, which makes for a bad user experience.          </Paragraph>

          {isMobileScreen(type,
            <CommentBlock
              className="comment"
            >
              <AvatarComment>
                <StyledImg
                  className="comment avatar"
                  src="/image/Comment.png"
                />
              </AvatarComment>
              <CommentAttrs
                className="comments attributes"
              >
                <SocialMediaContainer
                  className="social-media-container"
                >
                  <SocialMedia>
                    {socialMedia.map((item) => <StyledImg src={item} className="social-media" />)}
                  </SocialMedia>
                  <span>Share this article</span>
                </SocialMediaContainer>

                <CommentInfo
                  className="comment information"

                >
                  <Written
                    className="comment written-by"
                  >
                    Written by
                  </Written>
                  <CommentName

                    className="comment name"

                  >
                    Renee Wells
                  </CommentName>

                  <CommentJob
                    className="comment job"

                  >
                    Product Designer, Quotient
                  </CommentJob>

                  <CommentText
                    className="comment text"

                  >
                    Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.
                  </CommentText>

                </CommentInfo>
              </CommentAttrs>
            </CommentBlock>
            , <>
              <CommentBlock
                style={{ marginTop: '32px' }}
                className="comment"
              >
                <AvatarComment>
                  <StyledImg
                    className="comment avatar"
                    src="/image/Comment.png"
                  />
                </AvatarComment>
                <CommentAttrs
                  className="comments attributes"
                >
                  <SocialMediaContainer
                    className="social-media-container"
                  >
                    <SocialMedia>
                      {socialMedia.map((item) => <StyledImg src={item} className="social-media" />)}
                    </SocialMedia>
                    <span>Share this article</span>
                  </SocialMediaContainer>

                  <CommentInfo
                    className="comment information"

                  >
                    <Written
                      className="comment written-by"
                    >
                      Written by
                    </Written>
                    <CommentName

                      className="comment name"

                    >
                      Renee Wells
                    </CommentName>

                    <CommentJob
                      className="comment job"

                    >
                      Product Designer, Quotient
                    </CommentJob>
                  </CommentInfo>
                </CommentAttrs>
              </CommentBlock>
              <CommentText
                className="comment text"
              >
                Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.
              </CommentText>
            </>
          )}
        </ArticleText>
      </Article>
    </Content>

  </StyledBody>)
}

export default Body;