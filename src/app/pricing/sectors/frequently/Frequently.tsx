'use client'

import {
  AccordionBlock,
  Content,
  StyledFrequently,
  Text,
  TextBlock,
  Title,
} from "./Frequently.style";
import frequentlyList from './frequentlyList'

import Accordion from '@/components/ui/Accordion/Accordion'

const Frequently = () => {
  return (<StyledFrequently className="frequently">
    <Content
      className="frequently-container"
    >
      <TextBlock
        className="frequently-container text-block"
      >
        <Title
          className="frequently-container title"
        >Frequently asked questions</Title>
        <Text
          className="frequently-container text"
        >Everything you need to know about the product and billing.</Text>
      </TextBlock>

      <AccordionBlock
              className="frequently-container__accordion-container"
      >{frequentlyList.map((frequently, index) => (
        <Accordion
        key={index}
        title={frequently.title}
        text={frequently.text}
        />
      ))}</AccordionBlock>
    </Content>

  </StyledFrequently>

  )
}

export default Frequently;