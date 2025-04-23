import colors from "@/app/colors";
import {
    BlockButton,
    Copyright,
    DownText,
    FooterContains,
    Info,
    Line,
    LinkItem,
    LinkMain,
    LinkOther,
    Links,
    Lists,
    Paragraph,
    Text
} from './Footer.style';
import TitleOfHead from "../TitleOfHead/TitleOfHead";
import { StyledFooter } from "./Footer.style";
import OrangeLight from "@/image/orange light.svg"
import GreenLight from "@/image/green-light.svg"
import { Button } from "@/components/ui/Button/Button";
import Logo from '@/image/Logo.svg'
import { FrameText } from "../Frame/FrameText/FrameText";
import { links } from "./Links";

const Footer = () => {
    return (
        <StyledFooter>
            <OrangeLight className="orange-light" />
            <GreenLight className="green-light" />
            <Text>
                <TitleOfHead
                    color={colors.darkColor}
                    size={64}
                    lineHeight="120%"
                    width={720}
                >
                    Think beyond the waveа
                </TitleOfHead>
                <Paragraph>
                    <DownText>
                        Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
                    </DownText>
                </Paragraph>
            </Text>
            <BlockButton>
                <Button>Try for free</Button>
            </BlockButton>
            <FooterContains>
                <Lists>
                    <Info>
                        <Logo />
                        <FrameText
                            color={colors.darkColor}
                            width={292}
                        >
                            We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs
                        </FrameText>
                    </Info>
                    <Links>
                        {links.map((link) => (
                            <LinkItem>
                                <LinkMain>
                                    {link.main}
                                </LinkMain>
                                {link.other.map((item) => (
                                    <LinkOther>
                                        {item}
                                    </LinkOther>
                                ))}
                            </LinkItem>
                        ))}
                    </Links>
                </Lists>

                <Line />
                <Copyright>
                    &copy; Copyright 2023 All Rights Reserved
                </Copyright>
            </FooterContains>
        </StyledFooter>
    )
}

export default Footer;