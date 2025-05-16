import FillingForm from "@/components/ui/FillingForm/FillingForm";
import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import {
  StyledForm,
  FormContainer,
  FormElement,
  Title,
  SubTitle
} from "./Form.style";

const Form = () => {
  return (<StyledForm
    className="form"
  >
    <FormContainer
      className="form-container"
    >
      <StyledImg
        src="/image/contact.svg"
        className="form-container image" />
      <FormElement
        className="form-container element"
      >
        <Title
          className="form-container title"
        >Let’s level up your brand</Title>
        <SubTitle
          className="form-container subtitle"
        >You can reach us anytime <a>hellosansbrothers@gmail.com</a></SubTitle>
        <FillingForm title={'First name'} placeholder={'Last name'}          
        />
      </FormElement>

    </FormContainer>

  </StyledForm>)
}

export default Form;