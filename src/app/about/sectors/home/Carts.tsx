import { StyledImg } from "@/components/ui/StyledImg/StyledImg";
import { JSX } from "react";

type Carts = {
  image: JSX.Element;
  text: null | Record<'title' | 'bottomText', string>;
  button: boolean;
}

const carts: Carts[] = [
  {
    image: <StyledImg className="cart-image" src="/image/Carousel 1.png" />,
    text: null,
    button: false,
  },
  {
    image: <StyledImg className="cart-image" src="/image/Carousel 2.png" />,
    text: {
      title: 'What we believe in',
      bottomText: 'Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...',
    },
    button: true,
  },
  {
    image: <StyledImg className="cart-image" src="/image/Carousel 3.png" />,
    text: null,
    button: false,
  },
  {
    image: <StyledImg className="cart-image" src="/image/Carousel 1.png" />,
    text: null,
    button: false,
  },
  {
    image: <StyledImg className="cart-image" src="/image/Carousel 2.png" />,
    text: {
      title: 'What we believe in',
      bottomText: 'Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...',
    },
    button: true,
  },
  {
    image: <StyledImg className="cart-image" src="/image/Carousel 3.png" />,
    text: null,
    button: false,
  },
]

export default carts;