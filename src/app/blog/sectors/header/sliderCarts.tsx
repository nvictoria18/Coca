import { StyledImg } from "@/components/ui/StyledImg/StyledImg";

const sliderCarts = [
  {
    image: <StyledImg className="blog-cart" src="/image/blogCart1.png" />,
    date: 'Published in Insight Jan 30, 2021',
    author: null,
    title: 'Practice making User Flow',
    text: "In this article, we'll cover how to create user flows",
    widthTextPost: '70%',
  },
  {
    image: <StyledImg className="blog-cart" src="/image/blogCart2.png" />,
    author: 'by : Albert Sans',
    date: 'Published in Insight Jan 30, 2021',
    title: 'Overview of the Design Principles',
    text: "What are Design Principles?… To understand design principles, we first discuss the principles. ",
    widthTextPost: '95%',
  },
  {
    image: <StyledImg className="blog-cart crop" src="/image/blogCart3.png" />,
    author: 'by : Albert Sans',
    date: 'Published in Insight Jan 30, 2021',
    title: 'Using Grid in website design',
    text: `Andi: "What's the grid like?" Toni: “Like below…”`,
    widthTextPost: '65%',
  }
]

export default sliderCarts;