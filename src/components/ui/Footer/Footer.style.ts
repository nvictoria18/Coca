import colors from "@/app/colors";
import styled from "styled-components";

export const StyledFooter = styled.div`
    height: 851px;
    width: 100%;
    position: relative;
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
    left: 120px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const Paragraph = styled.div`
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
        background-color: ${colors.black}
    }
`

export const DownText = styled.div`
    font-family: ${colors.font};
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    width: 543px;
    height: 102px;
    color: ${colors.darkColor};
`

export const BlockButton = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 605.5px;
    right: 120px
`

export const FooterContains = styled.div`
    width: 1200px;
    position: relative;
    top: 375px;
    left: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Lists = styled.div`
    width: 1200px;
    display: flex;
    gap: 144px
`

export const Links = styled.div`
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
`

export const LinkMain = styled.span`
    font-weight: 700;
`

export const LinkOther = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${colors.lightColor};
    position: absolute;
    top: 347px;

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

`

export const Copyright = styled.div`
    width: 1200px;
    justify-content: center;
    display: flex;
    color: ${colors.copyright};
    font-size: 16px;
    font-family: ${colors.font};
    font-weight: 400;
    line-height: 24px;
    top: 393px;
    position: absolute;
`