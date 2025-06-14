'use client'

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
import { isMobileScreen } from "@/utils/isMobileScreen";
import { TypesOfScreen } from "@/types/Screen";

type MapsProps = {
  type: TypesOfScreen;
}

const Maps = ({
  type
}: MapsProps) => {

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
          {isMobileScreen(type, <StyledImg
            className="maps__container image"
            src="/image/Map.svg"
          />, <StyledImg
            className="maps__container image"
            src="/image/Map mobile.svg"
          />)}

        </Image>

        <List
          className="list"

        >
          {
            lists.map((list) => (
              <ListItem
                key={list.title}
                className="list-item"
              >
                <ListTitle
                  className="list-item title"
                >{list.title}</ListTitle>
                <ListText
                  className="list-item text"

                >{list.text}</ListText>
                <ListInfo
                  mb={list.mb}
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