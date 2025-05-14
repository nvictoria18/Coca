import colors from "@/app/colors";
import { Copyright } from "./Footer.style";
import { StyledImg } from "../ui/StyledImg/StyledImg";
import { Theme } from "@/types/Themes";
import { JSX } from "react";
import In from '@/assets/logos/In.svg';
import Instagram from '@/assets/logos/instagram.svg';
import Facebook from '@/assets/logos/Social icon.svg';
import Twitter from '@/assets/logos/twitter.svg';
import StyledSvg from "../StyledSvg/StyledSvg";


type ThemeFooter = {
  [K in Theme]: {
    bg: colors.darkColor | colors.white;
    color: colors.white | colors.darkColor;
    colorText: colors.grayColor | colors.darkColor;
    society: JSX.Element[] | null;
    additionalLinks: string[] | null;
    logo: JSX.Element;
    line: colors.grayLineColor | colors.lightColor;
    copyright: colors.white | colors.copyright;
    mobile?: {
      society: JSX.Element[] | null;
      additionalLinks: string[] | null;
    }
    lights?: JSX.Element[];
    laptop?: null;
  }
}


export const themes: ThemeFooter = {
  dark: {
    bg: colors.darkColor,
    color: colors.white,
    colorText: colors.grayColor,
    society: [
      <StyledSvg svgElement={<Facebook className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
      <StyledSvg svgElement={<Twitter className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
      <StyledSvg svgElement={<Instagram className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
      <StyledSvg svgElement={<In className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
    ],
    additionalLinks: [
      'Privacy Policy',
      'Terms & Conditions',
      'Support'
    ],
    logo: <StyledImg className="footer-logo" src="image/Logo (1).svg" />,
    line: colors.grayLineColor,
    copyright: colors.white
  },
  light: {
    bg: colors.white,
    color: colors.darkColor,
    colorText: colors.darkColor,
    society: null,
    additionalLinks: null,
    lights: [
      <StyledImg src="/image/orange light.svg" className="orange-light" />,
      <StyledImg src="/image/green-light.svg" className="green-light" />
    ],
    logo: <StyledImg className="footer-logo" src="/image/Logo.svg" />,
    line: colors.lightColor,
    copyright: colors.copyright,
    mobile: {
      society: [
        <StyledSvg svgElement={<In className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
        <StyledSvg svgElement={<Instagram className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
        <StyledSvg svgElement={<Facebook className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
        <StyledSvg svgElement={<Twitter className="social-media icon"/>} widthDesktop="20px" widthMobile="24px"/>,
      ],
      additionalLinks: [
        'Privacy Policy',
        'Terms & Conditions',
        'Support'
      ],
    },
    laptop: null,
  }
}