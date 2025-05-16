import { FillingFormContainer, Label, Input } from "./FillingForm.style";

const FillingForm = ({
  title,
  placeholder
}) => {
  return (
    <FillingFormContainer>
      <Label>{title}</Label>
      <Input
      placeholder={placeholder}/>
    </FillingFormContainer>
  )
}

export default FillingForm;