import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import {
  StyledMaps,
  Content,
  Title,
  MapsContainer,
  List,
  ListItem,
  ListTitle,
  ListText,
  ListInfo,
  Image,
} from "./Maps.style";
import lists from "./lists";

const Maps = () => {
  return (<StyledMaps
    className="maps"
  >

    <Content

      className="maps__container"

    >
      <Title
        className="maps__container title"

      >Contact our team to find out more</Title>
      <MapsContainer
        className="maps__container maps"
      >
        <Image

          className="maps__container image__container"
        >
          <StyledImg
            className="maps__container image"
            src="/image/Map.svg"
          />

        </Image>

        <List
          className="list"

        >
          {
            lists.map((list) => (
              <ListItem
                className="list-item"
              >
                <ListTitle
                  className="list-item title"
                >{list.title}</ListTitle>
                <ListText
                  className="list-item text"

                >{list.text}</ListText>
                <ListInfo
                  mB={list.mb}
                  className="list-item information"
                >{list.info}</ListInfo>
              </ListItem>

            ))
          }

        </List>

      </MapsContainer>
    </Content>
  </StyledMaps>)
}

export default Maps;