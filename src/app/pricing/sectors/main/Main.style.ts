import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const StyledMain = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .orange-light {
    position: absolute;
    width: 551px;
    height: 551px;
    top: 0px;
    left: 51px;
  }

  .green-light {
    position: absolute;
    width: 525px;
    height: 525px;
    top: 186px;
    right: 0px;
  }

  @media (${device.mobile}) {
    .orange-light {
      width: 118px;
      height: 118px;
      top: 14px;
      right: 244px;
    }

    .green-light {
      width: 240px;
      height: 240px;
      top: 177px;
      left: 222px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 91px;
  align-items: center;
  flex-direction: column;
  max-width: 1198px;

  @media (${device.mobile}) {
    padding-top: 32px;
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;
  width: 903px;
  justify-content: center;

  @media (${device.mobile}) {
    max-width: 335px;
    width: 100%;
    gap: 16px;
  }

`

export const TextBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media (${device.mobile}) {
    gap: 16px;
  }

 `

export const Flag = styled.div`
  background-color: ${colors.accentBg};
  color: ${colors.accent};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  border-radius: 16px;
  padding: 4px 12px;
  flex: none;
  width: 144px;
  text-align: center;

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`

export const Title = styled.div`
  color: ${colors.darkColor};
  font-weight: 700;
  font-size: 72px;
  line-height: 120%;
  letter-spacing: -3px;
  text-align: center;

  @media (${device.mobile}) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
  }
`

export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 256px;
  @media (${device.mobile}) {
    width: 231px;

  }
`

export const SwitchContainer = styled.div``

export const SwitchText = styled.div`
  color: ${colors.grayColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }
`

export const CartsContainer = styled.div`
  margin-top: 186px;
  margin-bottom: 78px;
  display: flex;
  width: 1198px;
  gap: 32px;


  .active {
    transform: translateY(-70px);
  }

  @media (${device.mobile}) {
    margin-top: 56px;
    width: 375px;
    margin-bottom: 54px;

    flex-direction: column;
    align-items: center;
    .active {
      transform: translateY(0px);
    }
  }
`

export const Cart = styled.div<{
  bg: string;
}>`
  width: 378px;
  border: 1px solid ${colors.lightGrayColoLine};
  border-radius: 16px;
  padding: 40px 24px;
  background-color: ${({ bg = colors.white }) => bg};
  display: flex;
  flex-direction: column;
  gap: 16px;
  transform: translateY(0);
  transition: all 0.2s ease-in-out;

  
  .dark {
    color: ${colors.white};
  }
  
  .light {
    color: ${colors.darkColor};
  }
  
  .carts-container.button {
    align-self: center;
    margin-top: 24px;
    
  }
  
  @media (${device.mobile}) {
    padding: 24px 20px;
    width: 335px;
    box-sizing: border-box;

      
    .carts-container.button {
      height: 40px;
      width: 124px;
      font-size: 14px;
      box-sizing: border-box;

    }
  }
`


export const CartIcons = styled.div`
  display: flex;
  justify-content: space-between;

  .carts-container.flag {
    background-color: ${colors.accent};
    color: ${colors.white};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    height: 32px;
    letter-spacing: 0px;
    border-radius: 100px;
    box-sizing: border-box;
    padding: 6px 12px;
    width: 118px;
    text-align: center;
  }

  @media (${device.mobile}) {

    .carts-container.flag {
      height: 28px;
      border-radius: 100px;
      box-sizing: border-box;
      padding: 4px 12px;
      text-align: center;
    }
  }
`

export const Image = styled.div`
  width: 40px;
  height: 40px;

  @media (${device.mobile}) {
    width: 32px;
    height: 32px;
  }
`


export const TextCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;

  .carts-container.title.dark {
    color: ${colors.white};
  }


`

export const TitleCart = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.darkColor};
  line-height: 34px;
  letter-spacing: 0px;


`

export const BottomTextCart = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grayColor};
  line-height: 26px;
  letter-spacing: 0px;

  @media (${device.mobile}) {
    font-size: 14px;
    line-height: 20px;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  align-items: flex-end;

  @media (${device.mobile}) {
    min-width: 114px;
    width: 45%;
  }
`

export const Count = styled.div`
  font-size: 56px;
  font-weight: 600;
  color: ${colors.darkColor};
  line-height: 120%;
  letter-spacing: -2px;

  @media (${device.mobile}) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
  }
`


export const Mouth = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grayColor};
  line-height: 26px;
  letter-spacing: 0px;
`

export const Included = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const TextIncluded = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.darkColor};
  line-height: 24px;
  letter-spacing: 0px;

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`


export const ItemsIncluded = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  
`

export const ItemIncluded = styled.div<{
  color: string;
}>`

  width: 265px;
  display: flex;
  gap: 8px;
  align-items: center;

  .not-check {
    text-decoration: line-through;
    color: ${colors.grayColor};
  }

  .check {
    color: ${({ color = colors.darkColor }) => color};
  }
`

export const CheckContainer = styled.div<{
  color?: string;
}>`
  width: 24px;
  height: 24px;
  color: ${({ color = colors.grayColor }) => color};
`

export const TitleIncluded = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.darkColor};
  line-height: 26px;
  letter-spacing: 0px;

  @media (${device.mobile}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
` 

// export const StyledMain = styled.div``


// export const StyledMain = styled.div``

// export const StyledMain = styled.div``

// export const StyledMain = styled.div``



