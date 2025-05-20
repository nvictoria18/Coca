import { Button } from '@/components/ui/Button/Button';
import {
  InsideMain,
  Line,
  StyledEnterEmail,
  StyledInput,
  StyledMain,
  StyledText,
  StyledTextBlock,
  Text,
  StyledYellowEllipse,
  StyledGreenEllipse,
  ContainerSales,
  Lights
} from './Main.style';

import colors from '@/app/colors';
import { StyledImg } from '@/components/ui/StyledImg/StyledImg';
import useTypeScreen from '@/utils/hooks/useTypeScreen';
import texts  from './text';
import { TypesOfScreen } from '@/types/Screen';

type MainProps = {
  type: TypesOfScreen;
}

const Main = ({
  type
}: MainProps) => {
  return (<>

    <Lights className="main__lights">
      <StyledYellowEllipse>
        <StyledImg className="orange-light" src="/image/Ellipse 125.svg" />
      </StyledYellowEllipse>



      <div style={{ position: 'relative', width: '100%' }}>
        <StyledGreenEllipse className="green-light">
          <StyledImg className="green-light" src="/image/Ellipse 124.svg" />
        </StyledGreenEllipse>
      </div>
    </Lights>

    <StyledMain className="main-sector">

      <InsideMain>
        <StyledText
          className="main__header"
        >Digitally forward <br /> creative</StyledText>

        <StyledTextBlock>
          <Line bg={colors.black} />
          <Text>
            {texts[type]}
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


      <ContainerSales className="images-container">
        <StyledImg
          className='sales'
          src={'/image/Sales - Light.svg'} />


        <StyledImg
          className='growth'
          src={'/image/Customer Growth - Light.svg'} />



        <StyledImg
          className='statistic'
          src={'/image/Statistic - Light.svg'} />
      </ContainerSales>

    </StyledMain>
  </>
  )
}

export default Main;