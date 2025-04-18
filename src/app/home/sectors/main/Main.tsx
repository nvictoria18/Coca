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

export const Main = () => {
  return (
    <StyledMain>
      <StyledYellowEllipse />
      <StyledGreenEllipse />

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

      <StyledEnterEmail>

        <StyledInput
          placeholder="Enter your email"
        />

        <Button>
          Try for free
        </Button>

      </StyledEnterEmail>

      
      <StyledSales />

      <StyledGrowth />

      <StyledStatic />

    </StyledMain>
  )
}