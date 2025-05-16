import styled from "styled-components";

export const SwitchContainer = styled.label`
  position: relative;
  width: 44px;
  height: 24px;
  display: block;


  .switch-container.bg {
    position: absolute;
    z-index: 1;
  }
`

export const Btn = styled.div`
  border: none;
  background-color: transparent;
  .switch-container.switch {
    width: 24px;
    height: 24px;
    position: absolute;
    z-index: 2;
    bottom: 0px;
    right: 20px;
    transition: all 0.2s ease-in-out;
  }

  .switch-container.switch.active {
    top: 0px;
    right: 2px;
  }
`

