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
  StyledGreenEllipse,
  ContainerGrowth,
  ContainerSales,
  ContainerStatistic
} from './Main.style';

import colors from '@/app/colors';
import { StyledImg } from '@/components/ui/StyledImg/StyledImg';

const Main = () => {
  return (
    <StyledMain className="main-sector">
      <div style={{ position: 'relative'}}>
      <StyledYellowEllipse>
        <StyledImg className="orange-light" src="/image/Ellipse 125.svg" />
      </StyledYellowEllipse>

      </div>


      <div style={{ position: 'relative', width: '100%'}}>
      <StyledGreenEllipse className="green-light">
        <StyledImg className="green-light" src="/image/Ellipse 124.svg" />
      </StyledGreenEllipse>
      </div>


      <InsideMain>
        <StyledText>Digitally forward creative</StyledText>

        <StyledTextBlock>
          <Line bg={colors.black} />
          <Text 
          data-text-mobile="Our biggest challenge is making sure we're always designing and building products that will help you run your business better.
          "
          data-text-desktop="When it comes to interactive
          marketing, we've got you covered.
          Be where the world is going
          "
          >
            
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


      <ContainerSales className="sales">
        <StyledSales>
          <StyledImg src={'/image/Sales - Light.svg'} />
        </StyledSales>
      </ContainerSales>

      <ContainerGrowth style={{
        height: 122,
      }} className='growth'>
        <StyledGrowth>
        <StyledImg src={'/image/Customer Growth - Light.svg'} />
      </StyledGrowth>
      </ContainerGrowth>

      <ContainerStatistic>
        <StyledStatic>
          <StyledImg src={'/image/Statistic - Light.svg'} />
        </StyledStatic>
      </ContainerStatistic>

    </StyledMain>
  )
}

export default Main;