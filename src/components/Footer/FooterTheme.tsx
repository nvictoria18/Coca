import colors from "@/app/colors";
import OrangeLight from "@/image/orange light.svg"
import GreenLight from "@/image/green-light.svg"

import Facebook from "@/image/Social icon.svg";
import Twitter from "@/image/twitter.svg";
import Instagram from "@/image/instagram.svg";
import In from "@/image/In.svg";
import LightLogo from '@/image/Logo.svg';
import DarkLogo from '@/image/Logo (1).svg';
import { Copyright } from "./Footer.style";


export const themes = {
  dark: {
    bg: colors.darkColor,
    color: colors.white,
    colorText: colors.grayColor,
    society: [
      <Facebook />,
      <Twitter />,
      <Instagram />,
      <In />
    ],
    additionalLinks: [
      'Privacy Policy',
      'Terms & Conditions',
      'Support'
    ],
    logo: <DarkLogo />,
    line: colors.grayLineColor,
    copyright: colors.white
  },
  light: {
    bg: colors.white,
    color: colors.darkColor,
    colorText: colors.grayColor,
    society: null,
    additionalLinks: null,
    lights: [
      <OrangeLight className="orange-light" />,
      <GreenLight className="green-light" />
    ],
    logo: <LightLogo />,
    line: colors.lightColor,
    copyright: colors.copyright,
  }
}