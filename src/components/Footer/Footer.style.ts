import { device } from "@/app/break-points";
import colors from "@/app/colors";
import { Theme } from "@/types/Themes";
import Link from "next/link";
import styled from "styled-components";

export const StyledFooter = styled.div<{
    bg: colors.white | colors.darkColor
}>`
    height: 830px;
    width: 100%;
    position: relative;
    background-color: ${({ bg }) => bg};
    .orange-light {
        width: 621px;
        height: 621px;

        position: absolute;
        top: 0px;
        left: 174px;
    }
    .green-light {
        width: 525px;
        height: 525px;
        position: absolute;
        top: 125px;
        right: 0px;
    }

    @media (${device.mobile}) {
        height: 630px;

        .orange-light {
            width: 221px;
            height: 221px;
            top: 20px;
            left: 0px;
        }
        .green-light {
            width: 293px;
            height: 293px;
            top: 269px;
            left: 82px;
        }
    }
`

export const Text = styled.div`
    position: absolute;
    z-index: 2;
    top: 112px;
    bottom: 52px;
    left: 120px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (${device.mobile}) {
        top: 51px;
        left: 20px;
        width: 334px;
        gap: 24px;
    }
`

export const Paragraph = styled.div<{
    theme: Theme
}>`
    display: flex;
    gap: 24px;
    width: 643px;
    &:before {
        content: "";
        height: 1px;
        position: relative;
        top: 20px;
        width: 76px;
        display: block;
        background-color: ${({ theme }) => theme === 'light' ? colors.black : colors.white};
    }

    @media (${device.mobile}) {
        width: 334px;
        gap: 8px;

        &:before {
            top: 10px;
            width: 65px;
        } 
    }

`

export const DownText = styled.div<{
    color: string;
}>`
    font-family: ${colors.font};
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    width: 543px;
    height: 102px;
    color: ${({ color }) => color};
    padding-bottom: 52px;

    @media (${device.mobile}) {
        font-size: 16px;
        line-height: 24px;

    }
`

export const BlockButton = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 585px;
    right: 120px;

    @media (${device.mobile}) {
        top: 229px;
        left: 64px;

        .footer.button {
            width: 142px;
            height: 44px;
            font-size: 14px;
        }
    }


`

export const FooterContains = styled.div`
    height: 455px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    top: 375px;

    @media (${device.mobile}) {
        width: 335px;
        height: auto;
        top: 248px;
        left: 24px;
        display: flex;
        align-items: flex-start;
        gap: 0px;
    }
`

export const Lists = styled.div`
    width: 1200px;
    display: flex;
    gap: 144px;

    @media (${device.mobile}) {
        width: 248px;
        gap: 0px;
    }
`

export const Links = styled.div`
    position: relative;
    top: 76px;
    display: flex;
    width: 764px;
    justify-content: space-between;

    @media (${device.mobile}) {
        display: none;
    }
`

export const LinkItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    font-family: ${colors.font};
    display: flex;
    flex-direction: column;
    gap: 26px;
`

export const LinkMain = styled.div<{
    color: string;
}>`
    color: ${({ color }) => color};
    font-weight: 700;
`

export const OtherListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const LinkOther = styled(Link)<{
    color: string
}> `
    color: ${({ color }) => color};
`

export const Line = styled.div<{
    color: string;
}>`
    width: 1200px;
    height: 1px;
    background-color: ${({ color }) => color};
    top: 347px;
    position: absolute;

    @media (${device.mobile}) {
        top: 247px;
        width: 335px;
    }
`

export const Info = styled.div`
    position: relative;
    top: 80px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .footer-logo {
        width: 140px;
    }

    @media (${device.mobile}) {
        gap: 9px;
        .footer-logo {
            width: 95px;
        }

    }
`

export const Copyright = styled.div<{
    color: string
}>`
    width: 1200px;
    justify-content: center;
    display: flex;
    top: 393px;
    position: absolute;
    color: ${({ color = colors.copyright }) => color};
    font-size: 16px;
    font-family: ${colors.font};
    font-weight: 400;
    line-height: 24px;

    @media (${device.mobile}) {
        width: 335px;
    }
`

export const CopyrightBlock = styled.div`
    color: ${colors.white};
    width: 1200px;
    height: 20px;
    font-family: ${colors.font};
    font-weight: 500;
    line-height: 20px;
    font-size: 14px;
    display: flex;
    top: 393px;
    position: absolute;
    justify-content: space-between;

    @media (${device.mobile}) {
        width: 335px;
        top: 288px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        color: ${colors.grayColor};

    }
`

export const SocialMedia = styled.div`
    width: 152px;
    justify-content: space-between;
    display: flex;
    
    @media (${device.mobile}) {
        gap: 24px;
        justify-content: flex-start;
        width: 168px;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    width: 360px;
    justify-content: space-between;

    @media (${device.mobile}) {
        width: 328px;
    }
`

export const Other = styled.div`
    display: flex;
    gap: 72px;

    @media (${device.mobile}) {
        display: flex;
        flex-direction: column;
        color: ${colors.grayColor};
        gap: 24px;
        align-items: center;
        margin-right: 15px;

        .copyright__social-media .mobile {
            color: ${colors.darkColor};
            width: 24px;
            height: 24px;
        }
    }
`