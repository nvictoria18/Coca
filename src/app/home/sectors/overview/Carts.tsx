import Calendar from '@/image/Icon.svg'
import Note from '@/image/Icon (1).svg'
import Check from '@/image/Icon (2).svg'
import Security from '@/image/Icon (3).svg'
import { ReactNode } from 'react'

type Keys = 'first' | 'second'

type Carts = {
  [K in Keys]: {
    mR: 80 | 54 | 0;
    icon: ReactNode;
    title: string,
    titleWidth: number,
    text: string;
    textWidth: number;
  }[];
}

export const carts: Carts = {
  first: [
    {
      mR: 54,
      icon: <Calendar />,
      title: 'Build your date fundamental',
      titleWidth: 249,
      text: 'Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.',
      textWidth: 446
    },
    {
      mR: 0,
      icon: <Check />,
      title: 'Measure more effective',
      titleWidth: 249,
      textWidth: 453,
      text: 'Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.',
    },
  ],
  second: [
    {
      mR: 80,
      icon: <Note />,
      titleWidth: 249,
      textWidth: 401,
      title: 'Activate your date',
      text: 'Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.',
    },
    {
      mR: 0,
      icon: <Security />,
      titleWidth: 293,
      textWidth: 481,
      title: 'Strengthen consumer privacy',
      text: 'Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.',
    }
  ]
}