import styled, { css } from "styled-components";
import YellowEllipse from '@/image/Ellipse 125.svg';
import GreenEllipse from '@/image/Ellipse 124.svg';
import { inter } from "@/fonts/inter";
import Sales from '@/image/Sales - Light.svg';
import Growth from '@/image/Customer Growth - Light.svg';
import Static from '@/image/Statistic - Light.svg'

const StyledMain = styled.div`
  position: relative;
  height: 785px;
  width: 100%;
  // background-color: black;
`

const StyledYellowEllipse = styled(YellowEllipse)`
  position: absolute;
  bottom: 0px;
  left: 0px;
`

const StyledGreenEllipse = styled(GreenEllipse)`
  position: absolute;
  right: 0px;
  top: 1px;
`

const InsideMain = styled.div``

const StyledText = styled.div`
  position: absolute;
  left: 120px;
  top: 87px;
  width: 740px;
  color: var(--dark-color);
  font-size: 80px;
  line-height: 120%;
  letter-spacing: -3px;
  font-family: var(--font);
  font-weight: 700;
`

const StyledTextBlock = styled.div`
  position: absolute;
  left: 100px;
  top: 393px;
  width: 617px;
  height: 126px;
  display: flex;
  gap: 27px;
`

const Line = styled.div <{
  bg: string,
}> `
  margin-top: 22px;
  width: 78px;
  height: 1px;
  background-color: ${({ bg }) => bg};
`

const Text = styled.div`
  width: 514px;
  letter-spacing: -1px;
  vertical-align: middle;
  white-space: pre-wrap;
  font-size: 32px;
  line-height: 42px;
  color: var(--dark-color);
  font-family: var(--font);
  src: url(${inter});
  font-weight: 600;
`

const StyledEnterEmail = styled.div`
  position: absolute;
  width:471px;
  height: 56px;
  top: 588px;
  left: 120px;
  display: flex;
`

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px var(--light-color) solid;
  width: 100%;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 400;
  color: var(--gray-color);
  font-family: var(--font);
  &:after {
    content: "";
    display: block;
    width: 99%;
    height: 1px;
    background-color: var(--foreground);
  }
  &:focus {
    outline: none;
  }
`

const StyledButton = styled.button`
  background-color: var(--dark-color);
  border: none;
  border-radius: 100px;
  width: 175px;
  height: 56px;
  font-weight: 700;
  line-height: 14px;
  horizontal-align: center;
  font-family: var(--font);
  color: var(--background);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--gray-color);
    color: var(--dark-color);
  }
`
const graphic = css`
  position: absolute;
  box-shadow: 20px 40px 80px var(--shadow);
`

const StyledSales = styled(Sales)`
  ${graphic}
  top: 155.87px;
  right: 186.9px;
`

const StyledGrowth = styled(Growth)`
  ${graphic}
  top: 105px;
  right: 53.79px;
`

const StyledStatic = styled(Static)`
  ${graphic}
  bottom: 135.15px;
  right: 186.9px;
`

export const Main = () => {
  return (
    <StyledMain>
      <StyledYellowEllipse />
      <StyledGreenEllipse />

      <InsideMain>
        <StyledText>Digitally forward creative</StyledText>

        <StyledTextBlock>
          <Line bg="var(--black)" />

          <Text>
            When it comes to interactive
            marketing, we've got you covered.
            Be where the world is going
          </Text>
        </StyledTextBlock>

      </InsideMain>

      <StyledEnterEmail>

        <StyledInput
          placeholder="Enter your email"
        />

        <StyledButton>
          Try for free
        </StyledButton>

      </StyledEnterEmail>

      
      <StyledSales />

      <StyledGrowth />

      <StyledStatic />

    </StyledMain>
  )
}