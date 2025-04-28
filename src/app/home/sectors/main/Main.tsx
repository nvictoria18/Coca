import { Button } from '@/components/ui/Button/Button';
import {
  InsideMain,
  Line,
  StyledEnterEmail,
  StyledGrowth,
  StyledInput,
  StyledMain,
  StyledSales,
  StyledStatic,
  StyledText,
  StyledTextBlock,
  Text,
  StyledYellowEllipse,
  StyledGreenEllipse
} from './Main.style';

import colors from '@/app/colors';
import { StyledImg } from '@/components/ui/StyledImg/StyledImg';

const Main = () => {
  return (
    <StyledMain className="main-sector">
      <StyledYellowEllipse className="orange-light">
        <img src="/image/Ellipse 125.svg" className='svg' />

      </StyledYellowEllipse>

      <StyledGreenEllipse className="green-light">
        <img src="/image/Ellipse 124.svg" className='svg' />
      </StyledGreenEllipse>


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

        <Button
          theme="light"
          width={175}
          size={16}
        >
          Try for free
        </Button>

      </StyledEnterEmail>

      <StyledSales className='sales'>
        <StyledImg src={'/image/Sales - Light.svg'} />
      </StyledSales>

      <StyledGrowth className='growth'>
        <StyledImg src={'/image/Customer Growth - Light.svg'} />
      </StyledGrowth>

      <StyledStatic className='statistic'>
        <StyledImg src={'/image/Statistic - Light.svg'} />
      </StyledStatic>



    </StyledMain>
  )
}

export default Main;