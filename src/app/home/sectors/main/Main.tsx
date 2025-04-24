import { Button } from '@/components/ui/Button/Button';
import {
  InsideMain,
  Line,
  StyledEnterEmail,
  StyledGreenEllipse,
  StyledGrowth,
  StyledInput,
  StyledMain,
  StyledSales,
  StyledStatic,
  StyledText,
  StyledTextBlock,
  StyledYellowEllipse,
  Text
} from './Main.style';
import colors from '@/app/colors';

const Main = () => {
  return (
    <StyledMain className="main-sector">
      <StyledYellowEllipse className="orange-light" />
      <StyledGreenEllipse className="green-light" />

      <InsideMain>
        <StyledText>Digitally forward creative</StyledText>

        <StyledTextBlock>
          <Line bg={colors.black} />
          <Text>
            When it comes to interactive
            marketing, we've got you covered.
            Be where the world is going
          </Text>
        </StyledTextBlock>

      </InsideMain>

      <StyledEnterEmail className='input-email'>

        <StyledInput
          placeholder="Enter your email"
        />

        <Button theme="light">
          Try for free
        </Button>

      </StyledEnterEmail>

      
      <StyledSales />

      <StyledGrowth />

      <StyledStatic />

    </StyledMain>
  )
}

export default Main;