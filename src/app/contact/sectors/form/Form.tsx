import FillingForm from "@/components/ui/FillingForm/FillingForm";
import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import {
  StyledForm,
  FormContainer,
  FormElement,
  Title,
  SubTitle,
  Container,
  FormCouple,
  Forms,
} from "./Form.style";
import TextArea from "@/components/ui/TextArea/TextArea";
import { Button } from "@/components/ui/Button/Button";

const Form = () => {
  return (<StyledForm
    className="form"
  >
    <Container
      className="form-container-all"
    >
      <StyledImg
        src="/image/contact.png"
        className="form-container image" />
    <FormContainer
      className="form-container"
    >
      <FormElement
        className="form-container element"
      >
        <Title
          className="form-container title"
        >Let’s level up your brand</Title>
        <SubTitle
          className="form-container subtitle"
        >You can reach us anytime <a href="*">hellosansbrothers@gmail.com</a></SubTitle>
        <Forms
          className="form-container forms"
        >
          <FormCouple
            className="form-container couple"
          >
        <FillingForm title={'First name'} placeholder={'First name'}          
        />
        <FillingForm title={'Last name'} placeholder={'Last name'}          
        />
            
          </FormCouple>
          <FillingForm title={'Email'} placeholder={'you@company.com'}/>
          <FillingForm title={'Phone number'} placeholder={'+1 (555) 000-0000'} type="phone"/>
          <TextArea title={'Message'} placeholder="Leave us a message..."/>
        </Forms>
        <Button 
          className="form-container button"
        theme={"light"}>Get Started</Button>
      </FormElement>

    </FormContainer>


    </Container>

  </StyledForm>)
}

export default Form;