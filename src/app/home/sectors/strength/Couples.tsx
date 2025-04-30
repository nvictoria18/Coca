import { TypesOfScreen } from "@/types/Screen"
import { isMobileScreen } from "@/utils/isMobileScreen"

type Couples = (typeOfScreen: TypesOfScreen) => {
  width: 176 | 151 | 199 | 160 | 143;
  title: string;
  text: string;
  line: boolean;
}[];

const LAPTOP_FONT_SIZE = 64;

const MOBILE_FONT_SIZE = 32;

export const fontSize = (type: TypesOfScreen) => isMobileScreen(type, LAPTOP_FONT_SIZE, MOBILE_FONT_SIZE);

export const couples: Couples = (typeOfScreen) => ([
  {
    width: isMobileScreen(typeOfScreen, 176, 160),
    title: '17k',
    text: 'happy customers on worldwide',
    line: true
  },
  {
    width: isMobileScreen(typeOfScreen, 151, 143),
    title: '15+',
    text: 'Hours of work experience',
    line: isMobileScreen(typeOfScreen, true, false),
  },
  {
    width: isMobileScreen(typeOfScreen, 199, 160),
    title: '50+',
    text: 'Creativity & passionate members',
    line: true,
  },
  {
    width: isMobileScreen(typeOfScreen, 199, 143),
    title: '100+',
    text: 'Integrations lorem ipsum integrations',
    line: false,
  },
])