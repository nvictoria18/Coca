import { StyledImg } from "@/components/ui/StyledImg/StyledImg";

const articles = {
  laptop: {
    first: [
      {
        image: <StyledImg src="/image/articles 1.png" />,
        title: 'How we perform long-running tasks using AWS services',
        text: 'Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.',
        underline: true,
        widthTitle: '100%',
        widthLText: '88%',
      },
      {
        image: <StyledImg src="/image/articles 3.png" />,
        title: 'Layout Exploration — Simple exercise but big effect',
        text: 'Make alternatives or other options for the design we are making. For example, we are creating a website design. Then there is the testimonial section.',
        underline: false,
        widthTitle: '100%',
        widthLText: '88%',
      }
    ],
    second: [
      {
        image: <StyledImg src="/image/articles 2.png" />,
        title: 'How to ask when doing User Research',
        text: 'Bro, the story is that you want to make an application for buying and selling goods on the market. During user research, what do you think you will ask people?',
        underline: true,
        widthTitle: '70%',
        widthLText: '88%',
      },
      {
        image: <StyledImg src="/image/articles 4.png" />,
        title: 'Webflow Break the Coding Barrier',
        text: 'Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.',
        underline: false,
        widthTitle: '70%',
        widthLText: '88%',
      }
    ]
  },
  mobile: {
    first: [
      {
        image: <StyledImg src="/image/articles 1.png" />,
        title: 'How we perform long-running tasks using AWS services',
        text: 'Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.',
        underline: true,
        widthTitle: '100%',
        widthLText: '100%',
      },
      {
        image: <StyledImg src="/image/articles 2.png" />,
        title: 'How to ask when doing User Research',
        text: 'Bro, the story is that you want to make an application for buying and selling goods on the market. During user research, what do you think you will ask people?',
        underline: true,
        widthTitle: '100%',
        widthLText: '100%',
      },
    ],
    second: [
      {
        image: <StyledImg src="/image/articles 3.png" />,
        title: 'Layout Exploration — Simple exercise but big effect',
        text: 'Make alternatives or other options for the design we are making. For example, we are creating a website design. Then there is the testimonial section.',
        underline: false,
        widthTitle: '100%',
        widthLText: '100%',
      },
      {
        image: <StyledImg src="/image/articles 4.png" />,
        title: 'Webflow Break the Coding Barrier',
        text: 'Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.',
        underline: false,
        widthTitle: '100%',
        widthLText: '100%',
      }
    ]
  }
}
export default articles;