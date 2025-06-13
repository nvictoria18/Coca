'use client'

import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import carts from "./carts";
import { Button } from "@/components/ui/Button/Button";
import cartsOfPricing from "./carts";
import {
  StyledMain,
  Content,
  TextBlock,
  Flag,
  Title,
  Discount,
  SwitchContainer,
  SwitchText,
  Cart,
  CartIcons,
  TextCart,
  TitleCart,
  BottomTextCart,
  Price,
  Count,
  Mouth,
  Included,
  TextIncluded,
  ItemsIncluded,
  ItemIncluded,
  Image,
  CartsContainer,
  Block,
  CheckContainer,
  TitleIncluded
} from "./Main.style";
import Switch from "@/components/ui/Switch/Switch";
import colors from "@/app/colors";
import { useState } from "react";
import useTypeScreen from "@/utils/hooks/useTypeScreen";
import { isMobileScreen } from "@/utils/isMobileScreen";

const Main = () => {
  const [top, setTop] = useState<string>(cartsOfPricing[1].title);
  const type = useTypeScreen();


  const handlerTop = (title: string) => {
    setTop((prev) => prev === title ? '' : title)
  }

  return (<StyledMain
    className="main"
  >
    <StyledImg className="green-light" src="/image/pricing green light.png" />
    <StyledImg className="orange-light" src="/image/pricing orange light.png" />

    <Content
      className="main-container"
    >
      <Block className="main-container block">

        <TextBlock
          className="main-container text-block"

        >
          <Flag
            className="main-container flag"

          >Pricing plans 🤑</Flag>
          <Title
            className="main-container title"

          >Choose a plan for a more advanced business</Title>
        </TextBlock>
        <Discount
          className="main-container discount"

        >
          <SwitchContainer
            className="main-container switcher"
          >
            <Switch/>

          </SwitchContainer>
          <SwitchText
            className="main-container switcher text"
          >Annual pricing (save 20%)</SwitchText>
        </Discount>

      </Block>

      <CartsContainer
        className="carts-container"
      >{cartsOfPricing.map((cart) => (
        <Cart
          className={`carts-container cart ${top === cart.title ? 'active' : ''}`}
          bg={cart.background}
          onClick={() => handlerTop(cart.title)}
        >
          {cart.flag ? (
            <CartIcons className="cart-container icons">
              <Image
                className="carts-container icon"

              >{cart.image}</Image>
              <Flag className="carts-container flag">Best Offers🔥</Flag>
            </CartIcons>) : (<Image
              className="carts-container icon"
            >{cart.image}</Image>)}
          <TextCart className={cart.theme}>
            <TitleCart
              className={`carts-container title ${cart.theme}`}

            >{cart.title}</TitleCart>
            <BottomTextCart
              className={`carts-container botttom-cart ${cart.theme}`}
            >
              {cart.text}
            </BottomTextCart>
          </TextCart>
          <Price
            className="carts-container price"
          >
            <Count
              className={`carts-container count ${cart.theme}`}
            >{cart.price}</Count>
            <Mouth
              className={`carts-container mouth`}
              style={{ color: cart.theme == 'dark' ? colors.white : colors.grayColor }}
            >
              /mo
            </Mouth>
          </Price>

          <Included className="carts-container included">
            <TextIncluded className={`carts-container text-included ${cart.theme}`}>What’s included:</TextIncluded>
            <ItemsIncluded
              className="items-included"
            >
              {cart.included.map((include) => {
                return (
                  <ItemIncluded
                    color={cart.theme === 'dark' ? colors.white : colors.darkColor}
                    className="item-included item"
                  >
                    {include.check ?
                      <>
                        <CheckContainer>
                          <StyledImg src={cart.checkIcon && cart.checkIcon[type]?.check} />
                        </CheckContainer>
                        <TitleIncluded className={`items-included ${include.check ? 'check' : 'not-check'}`}>{include.text}</TitleIncluded>
                      </>
                      : (
                        <>
                          <CheckContainer color="#7E8492">
                            <StyledImg src={cart.checkIcon && cart.checkIcon[type]?.notCheck} />
                          </CheckContainer>
                          <TitleIncluded className={`items-included ${include.check ? 'check' : 'not-check'}`}>{include.text}</TitleIncluded>
                        </>
                      )}

                  </ItemIncluded>
                )
              })}
            </ItemsIncluded>
          </Included>
          <Button
            className="carts-container button"
            size={isMobileScreen(type, 16, 14)}
            theme="dark"
            width={isMobileScreen(type, 160, 124)}
            border={`1px solid ${colors.lightColor}`}
          >Choose Plan</Button>
        </Cart>
      ))

        }</CartsContainer>

    </Content>
  </StyledMain>)
}

export default Main;