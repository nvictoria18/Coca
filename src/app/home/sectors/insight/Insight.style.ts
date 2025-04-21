import colors from "@/app/colors";
import styled from "styled-components";

export const Block = styled.div`
  padding: 60px 120px 91px;
  /* background-color: ${colors.black}; */
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

`

export const Text = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const Carts = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: nowrap;
  position: relative;
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 582px;
  height: 481px;

  img {
    width: 582px;
    height: 332px;
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FontInfo = styled.span`
  color: ${colors.grayColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
`

