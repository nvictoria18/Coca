import { StyledImg } from "../StyledImg/StyledImg";
import { FillingFormContainer, Label, Input, ButtonPhone, InputContainer } from "./FillingForm.style";

type FillingForm = {
  title: string;
  placeholder: string;
  type?: string;
}

const FillingForm = ({
  title,
  placeholder,
  type,
}: FillingForm) => {
  return (
    <FillingFormContainer
      className="form-input"
    >
      <Label
        className="input-container label"

      >{title}</Label>
      {type === 'phone' ? (
        <InputContainer
          className="input-container"
        >
          <ButtonPhone
            className="input-container button"
          >
            US
            <StyledImg src="/image/chevron-down for form.svg" />
          </ButtonPhone>
          <Input
            type="phone"
            className="input-container input"

            placeholder={placeholder} />
        </InputContainer>

      ) :
        (<>
          <Input placeholder={placeholder}
            className="input-container input"

          />
        </>)
      }
    </FillingFormContainer >
  )
}

export default FillingForm;