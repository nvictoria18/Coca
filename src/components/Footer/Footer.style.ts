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
        position: absolute;
        top: 0px;
        left: 174px;
    }
    .green-light {
        position: absolute;
        top: 125px;
        right: 0px;
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
`

export const BlockButton = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 605.5px;
    right: 120px
`

export const FooterContains = styled.div`
    height: 455px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    top: 375px;
`

export const Lists = styled.div`
    width: 1200px;
    display: flex;
    gap: 144px;
`

export const Links = styled.div`
    position: relative;
    top: 76px;
    display: flex;
    width: 764px;
    justify-content: space-between;
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

export const LinkOther = styled(Link) <{
    color: string
}>`
    display: flex;
    flex-direction: column;
    gap: 16px;
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
`

export const Info = styled.div`
    position: relative;
    top: 80px;
    display: flex;
    flex-direction: column;
    gap: 4px;
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
`

export const SocialMedia = styled.div`
    width: 152px;
    justify-content: space-between;
    display: flex;
`

export const FooterLinks = styled.div`
    display: flex;
    width: 360px;
    justify-content: space-between;
`

export const Other = styled.div`
    display: flex;
    gap: 72px;
`