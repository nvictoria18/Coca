import { device } from "@/app/break-points";
import styled, { WebTarget } from "styled-components";

export const Block = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
  position: relative;

  @media (${device.desktop}){
  }

  @media (${device.laptop[0]}) and (${device.laptop[1]}) {
  }

  @media (${device.mobile}) {
    height: 1163px;
  }
`

export const Content = styled.div`
  padding: 160px 120px 100px;
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 1003px;
  gap: 80px;


  @media (${device.mobile}) {
    width: 335px;
    height: auto;
    gap: 32px;
    padding: 25px 20px;

  }
`

export const Text = styled.div`
  width: 601px;
  height: 321px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${device.mobile}) {
    width: 335px;
    height: 144px;
    gap: 16px;
  }
`

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 568px);
  grid-template-rows: repeat(2, 273px);
  gap: 56px 64px ;
  width: 1200px;
  height: 602px;

  @media (${device.mobile}) {
    width: 335px;
    grid-template-columns: repeat(1, 335px);
    grid-template-rows: repeat(4, 216px);
    gap: 24px;
  }
`

export const Cart = styled.div`
  display: flex;
  gap: 60px;
  width:568px;
  height: 373px;

  @media (${device.mobile}) {
    width: 335px;
    gap: 16px;
    height: 216px;
  }
`

export const TextOfCart = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 268px; 
  //TODO чо?
  width: 238px;
  margin: 17.5px 0px;

  @media (${device.mobile}) {
    height: 216px;
    width: 159px;
    margin: 0px;
    gap: 8px;
  }
`

export const StyledImage = styled.div`
  width: 240px;
  height: 216px;
  position: relative;
  img {
    position: relative;
    width: 100%;
    object-fit: cover;
    object-position: 60%;
  }

  @media (${device.mobile}) {
    .cart-images {
      width: 160px;
      height: 216px;
      
    }
    img {
      height: 100%;

    }
    .icon {
      width: 40px;
    }
  }
`

export const StyledIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px


`