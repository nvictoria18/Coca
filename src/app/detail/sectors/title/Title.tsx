'use client'

import {
  StyledTitleContainer,
  StyledTitle
} from "./Title.style";

const Title = () => {
  return (<StyledTitleContainer
    className="detail title-container"
  >
    <StyledTitle
      className="detail title"
    >
      How we perform long-running tasks using AWS services
    </StyledTitle>
  </StyledTitleContainer>)
}

export default Title;