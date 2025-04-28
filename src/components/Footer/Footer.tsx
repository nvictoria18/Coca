import colors from "@/app/colors";
import {
    BlockButton,
    Copyright,
    CopyrightBlock,
    DownText,
    FooterContains,
    FooterLinks,
    Info,
    Line,
    LinkItem,
    LinkMain,
    LinkOther,
    Links,
    Lists,
    Other,
    OtherListContainer,
    Paragraph,
    SocialMedia,
    Text
} from './Footer.style';
import TitleOfHead from "../ui/TitleOfHead/TitleOfHead";
import { StyledFooter } from "./Footer.style";
import { Button } from "@/components/ui/Button/Button";
import { FrameText } from "../ui/Frame/FrameText/FrameText";
import { links } from "./Links";
import { themes } from "./FooterTheme";
import { Theme } from "@/types/Themes";
import { logos } from "@/app/home/sectors/partners/Logos";

const Footer = ({
    theme //light
}: Record<'theme', Theme>) => {
    return (

        <StyledFooter
            className="footer"
            bg={themes[theme].bg}
        >
            {themes[theme]?.lights && (
                themes[theme].lights.map((item) => (item))
            )}
            <Text
                className="footer-text">
                <TitleOfHead
                    color={themes[theme].color}
                    size={64}
                    lineHeight="120%"
                    letterSpacing="0px"
                    width={720}
                >
                    Think beyond the wave
                </TitleOfHead>
                <Paragraph
                    theme={theme}
                >
                    <DownText
                        color={themes[theme].colorText}
                    >
                        Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
                    </DownText>
                </Paragraph>
            </Text>
            <BlockButton>
                <Button
                    size={16}
                    width={177}
                    theme={theme}
                >Try for free</Button>
            </BlockButton>
            <FooterContains
                className="footer-container"
            >
                <Lists className="footer-list">
                    <Info>
                        {themes[theme].logo}
                        <FrameText
                            color={themes[theme].colorText}
                            width={292}
                        >
                            We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs
                        </FrameText>
                    </Info>
                    <Links>
                        {links.map((link) => (
                            <LinkItem>
                                <LinkMain
                                    color={themes[theme].color}
                                >
                                    {link.main}
                                </LinkMain>
                                <OtherListContainer>

                                    {link.other.map((item) => (
                                        <LinkOther
                                            color={themes[theme].colorText}
                                            href={item.src}
                                        >
                                            {item.name}
                                        </LinkOther>
                                    ))}

                                </OtherListContainer>
                            </LinkItem>
                        ))}
                    </Links>
                </Lists>
                <Line
                    color={themes[theme].line}
                    className="line" />
                {theme === 'light' ?

                    <Copyright
                        color={themes[theme].copyright}
                    >
                        &copy; Copyright 2023 All Rights Reserved
                    </Copyright> : (
                        <CopyrightBlock>
                            <Other>
                                <SocialMedia>
                                    {themes.dark.society.map((el) => el)}
                                </SocialMedia>
                                <FooterLinks>
                                    {themes.dark.additionalLinks.map((el) => <span>{el}</span>)}
                                </FooterLinks>

                            </Other>
                            <div
                                color={themes[theme].copyright}
                            >
                                &copy; Copyright 2023,t All Rights Reserved
                            </div>
                        </CopyrightBlock>
                    )}
            </FooterContains>
        </StyledFooter>
    )
}

export default Footer;