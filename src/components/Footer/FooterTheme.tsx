import colors from "@/app/colors";
import { Copyright } from "./Footer.style";
import { StyledImg } from "../ui/StyledImg/StyledImg";
import { Theme } from "@/types/Themes";
import { JSX } from "react";

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
      <StyledImg src="/image/Social icon.svg" />,
      <StyledImg src="/image/twitter.svg" />,
      <StyledImg src="/image/instagram.svg" />,
      <StyledImg src="/image/In.svg" />
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
        <StyledImg src="/image/Social icon.svg" />,
        <StyledImg src="/image/twitter.svg" />,
        <StyledImg src="/image/instagram.svg" />,
        <StyledImg src="/image/In.svg" />
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