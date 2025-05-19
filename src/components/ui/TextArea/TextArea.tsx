import { TextAreaContainer, Label, Input } from "./TextArea.style";

type TextAreaProps = {
  title: string;
  placeholder: string;
}
const TextArea = ({
  title,
  placeholder,
}: TextAreaProps) => {
  return (
    <TextAreaContainer
      className="text-area"
    >
      <Label
        className="text-area label"

      >{title}</Label>
      <Input
        rows={4}
        className="text-area input"

        placeholder={placeholder} />
    </TextAreaContainer >
  )
}

export default TextArea;