import { ReactNode } from 'react'
import { StyledImg } from '@/components/ui/StyledImg/StyledImg'
import { TypesOfScreen } from '@/types/Screen'
import { isMobileScreen } from '@/utils/isMobileScreen';

type Keys = 'first' | 'second'

const MOBILE_TEXT_WIDTH = 335;

type Carts = (type: TypesOfScreen) => ({
  [K in Keys]: {
    mR: 80 | 54 | 0;
    icon: ReactNode;
    title: string,
    titleWidth: number,
    text: string;
    textWidth: number;
    mobileHeight: 80 | 60,
  }[];
});

export const cartsDesktop: Carts = (type) => ({
  first: [
    {
      mR: 54,
      icon:<StyledImg src={'/image/Icon.svg'}
      alt="calendar"
      className='icon'
      />,
      title: 'Build your date fundamental',
      titleWidth: 249,
      text: 'Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.',
      textWidth: isMobileScreen(type, 446, MOBILE_TEXT_WIDTH),
      mobileHeight: 60,
    },
    {
      mR: 0,
      icon:<StyledImg
      src={'/image/Icon (1).svg'}
      className='icon'
      />,
      title: isMobileScreen(type, 'Activate your date', 'Measure more effective'),
      titleWidth: 249,
      textWidth: isMobileScreen(type, 453, MOBILE_TEXT_WIDTH),
      text: 'Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.',
      mobileHeight: 60,
    },
  ],
  second: [
    {
      mR: 80,
      icon:<StyledImg
      src={'/image/Icon (2).svg'}
      className='icon'
      />,
      titleWidth: 249,
      textWidth: isMobileScreen(type, 401, MOBILE_TEXT_WIDTH),
      title: isMobileScreen(type, 'Measure more effective', 'Activate your date'),
      text: 'Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.',
      mobileHeight: 80,
    },
    {
      mR: 0,
      icon:<StyledImg
      src={'/image/Icon (3).svg'}
      className='icon'
      />,
      titleWidth: 293,
      textWidth: isMobileScreen(type, 481, MOBILE_TEXT_WIDTH),
      title: 'Strengthen consumer privacy',
      text: 'Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.',
      mobileHeight: 80,
    }
  ]
})
