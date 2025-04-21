import colors from "@/app/colors";
import styled from "styled-components";

export const PartnersBlock = styled.div`
  height: 352px;
  box-sizing: border-box;
  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 1200px;
    background-color: ${colors.grayLineColor};
    margin: auto;
  }
  &:before {
    content: "";
    display: block;
    height: 1px;
    width: 1200px;
    margin: auto;
    background-color: ${colors.grayLineColor};
  }
`

export const InsideBlock = styled.div`
  margin: 22px 13.5px;
  height: 308px;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  
`

export const TablePartners = styled.div`
  height: 180px;
  display: grid;
  grid-template-rows: repeat(2, 90px);
  grid-template-columns: repeat(4, 160px);
  gap: 0px 30px;
`

export const Text = styled.div`
  width: 323px;
  height: 147px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`