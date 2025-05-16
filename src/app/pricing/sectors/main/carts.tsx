import colors from "@/app/colors";
import { StyledImg } from "@/components/ui/StyledImg/StyledImg";

const cartsOfPricing = [
  {
    image: <StyledImg className="cart-icon" src="/image/heart.svg" />,
    flag: false,
    title: 'Starter',
    background: colors.white,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$100',
    theme: 'light',
    checkIcon: {
      mobile: {
        check: '/image/check mobile.svg',
        notCheck: '/image/not-check mobile.svg'
      },
      laptop: {
        check: '/image/check mobile.svg',
        notCheck: '/image/not-check.svg'
      }
    },
    included: [
      {
        text: 'Unlimited Upload',
        check: true,
      },
      {
        text: 'Advanced Statistic',
        check: true,
      },
      {
        text: 'Profile Badge',
        check: true,
      },
      {
        text: 'Access to the community',
        check: true,
      },
      {
        text: 'History of all Liked Photos',
        check: false,
      },
      {
        text: 'Directory Listing',
        check: false,
      },
      {
        text: 'Customize Your Profile',
        check: false,
      },
      {
        text: 'Display Your Workshops',
        check: false,
      }
    ]
  },
  {
    image: <StyledImg className="cart-icon" src="/image/lightning.svg" />,
    flag: true,
    background: '#161A34',
    title: 'Popular',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$1400',
    theme: 'dark',
    checkIcon: {
      mobile: {
        check: '/image/check mobile.svg',
        notCheck: '/image/not-check mobile.svg'
      },
      laptop: {
        check: '/image/Check.svg',
        notCheck: '/image/not-check.svg'
      }
    },
    included: [
      {
        text: 'Unlimited Upload',
        check: true,
      },
      {
        text: 'Advanced Statistic',
        check: true,
      },
      {
        text: 'Profile Badge',
        check: true,
      },
      {
        text: 'Access to the community',
        check: true,
      },
      {
        text: 'History of all Liked Photos',
        check: false,
      },
      {
        text: 'Directory Listing',
        check: true,
      },
      {
        text: 'Customize Your Profile',
        check: false,
      },
      {
        text: 'Display Your Workshops',
        check: false,
      }
    ]
  },
  {
    image: <StyledImg className="cart-icon" src="/image/crown.svg" />,
    flag: false,
    title: 'Enterprise',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$2100',
    background: colors.white,
    theme: 'light',
    checkIcon: {
      mobile: {
        check: '/image/check mobile.svg',
        notCheck: '/image/not-check mobile.svg'
      },
      laptop: {
        check: '/image/Check.svg',
        notCheck: '/image/not-check.svg'
      }
    },
    included: [
      {
        text: 'Unlimited Upload',
        check: true,
      },
      {
        text: 'Advanced Statistic',
        check: true,
      },
      {
        text: 'Profile Badge',
        check: true,
      },
      {
        text: 'Access to the community',
        check: true,
      },
      {
        text: 'History of all Liked Photos',
        check: true,
      },
      {
        text: 'Directory Listing',
        check: true,
      },
      {
        text: 'Customize Your Profile',
        check: true,
      },
      {
        text: 'Display Your Workshops',
        check: true,
      }
    ]
  },
]

export default cartsOfPricing;