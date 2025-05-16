import { ReactNode, useState } from "react";
import { StyledImg } from "../StyledImg/StyledImg";
import { Btn, SwitchContainer } from "./Switch.style";

const Switch = ({
  label
}: {
  label?: ReactNode
}) => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const handleClick = () => {
    setSwitchBtn((prev) => !prev)
  }
  return (
    <SwitchContainer
      className="switch-container"
    ><label>
      <Btn onClick={handleClick}>
        <StyledImg className={`switch-container switch ${switchBtn ? 'active' : ''}`} src="/image/switch.svg" />
      </Btn>
      <StyledImg className="switch-container bg" src="/image/switch bg.svg" />
      </label>
    </SwitchContainer>
  )
}

export default Switch;