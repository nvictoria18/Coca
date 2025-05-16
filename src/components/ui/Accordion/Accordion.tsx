import { useState } from "react";
import { StyledImg } from "../StyledImg/StyledImg";
import {
  StyledAccordion,
  VisibleBlock,
  Title,
  HiddenTextAccordion,
  Btn,
  Content
} from "./Accordion.style";

type AccordionProps = {
  title: string;
  text: string;
}

const Accordion = ({
  title,
  text
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenAccordion = () => {
    setIsOpen((prev) => !prev);
  }

  return (<StyledAccordion
    className="accordion"
  >
    <Content
      className="accordion-container"
    >
      <VisibleBlock
        className="accordion visible-block"

      >

        <Title
          className={`accordion title ${isOpen ? 'open' : 'hidden'}`}

        >{title}</Title>
        <Btn
          className="accordion button"
          onClick={() => handleOpenAccordion()}
        >{
            isOpen ? <>
              <StyledImg className="accordion close"
                src="/image/close accordion.svg"
              />

            </> :
              <StyledImg className="accordion apen"
                src="/image/open accordion.svg"
              />
          }
        </Btn>
      </VisibleBlock>
      <HiddenTextAccordion
        className={`accordion text ${isOpen ? 'open' : 'hidden'}`}
      >
        {text}
      </HiddenTextAccordion>

    </Content>
  </StyledAccordion>)
}

export default Accordion;