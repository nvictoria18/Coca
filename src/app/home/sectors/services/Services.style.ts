import styled, { WebTarget } from "styled-components";

export const Block = styled.div`
  padding: 160px 120px 100px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 1003px;
  gap: 80px;
`

export const Text = styled.div`
  width: 601px;
  height: 321px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 568px);
  grid-template-rows: repeat(2, 273px);
  gap:56px 64px ;
  width: 1200px;
  height: 602px;
`

export const Cart = styled.div`
  display: flex;
  gap: 60px;
  width:568px;
  height: 373px;
`

export const TextOfCart = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 268px;
  width: 238px;
  margin: 17.5px 0px;
`

export const StyledImage = styled.div`
  width: 240px;
  height: 273px;
  position: relative;
  img {
    position: relative;
  }
`

export const StyledIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px
`