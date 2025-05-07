import { device } from "@/app/break-points";
import colors from "@/app/colors";
import styled from "styled-components";

export const Block = styled.div`
    height: 700px;
    width: 100%;
    position: relative;

    .testimonials__background-image {
        position: absolute;
        top: 182px;
        left: 120px;
    }

    @media (${device.mobile}) {
        padding-top: 5px;
        height: 543px;
        .testimonials__background-image {
            top: 218.68px;
            left: 20px;
            width: 32px;
            height: auto;
        }
    }
`

export const Bg = styled.div``

export const Text = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 69px;
    margin-left: 120px;
    margin-right: 120px;
    align-items: center;
    width: 1200px;
    height: 134px;

    @media (${device.mobile}) {
        width: 247px;
        flex-direction: column;
        margin: 0px;
        margin-left: 20px;
        margin-top: 17px;
        gap: 20px;

        .testimonials__text-content {
            padding-right: 20px;
        }
    }
`

export const Reviews = styled.div`
    margin: 112px 124px 160px 277px;
    .slider-item {        
        width: 1039px;
    }

    @media (${device.mobile}) {
        margin: 0px;
        margin: 88px 52px;
    }
`

export const Review = styled.div`
    width: 1039px;
    height: 294px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-sizing: border-box;

    @media (${device.mobile}) {
        gap: 8px;
        width: 303px;
    }
`

export const CommentBlock = styled.div`
    width: 898px;
    height: 198px;
    gap: 16px;
    display: flex;
    flex-direction: column;

    @media (${device.mobile}) {
        height: 161px;
        width: 303px;
        gap: 10px;
    }
`

export const CommentGrade = styled.div`
    width: 20px;
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    height: 26px;
    align-items: center;

    @media (${device.mobile}) {
        padding-top: 8px;
        font-size: 14px;
        .star {
            width: 16px;
            height: 16px;
        }
    }
`

export const CommentText = styled.div`
    font-family: ${colors.font};
    font-size: 40px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -1px;
    color: ${colors.darkColor};

    @media (${device.mobile}) {
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: 0px;
    }
`

export const Info = styled.div`
    width: 1039px;
    display: flex;
    justify-content: space-between;

    @media (${device.mobile}) {
        width: 303px;
    }
`

export const About = styled.div`
    width: 298px;
    height: 56px;
    display: flex;
    gap: 24px;

    .avatar {
        width: 56px;
        height: 56px;
    }

    @media (${device.mobile}) {
        padding-top: 4px;
        gap: 12px;

        .avatar {
            width: 40px;
            height: 40px;
        }
    }
`

export const AboutText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (${device.mobile}) {

    }
`

export const AboutName = styled.div`
    font-family: ${colors.font};
    font-size: 18px;
    color: ${colors.darkColor};
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0px;
    width: 100%;
    display: inline;

    @media (${device.mobile}) {
        line-height: 20px;
        font-size: 14px;
        letter-spacing: 0%;
    }
`

export const AboutJobTitle = styled.div`
    font-family: ${colors.font};
    font-size: 16px;
    color: ${colors.grayColor};
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0px;

    @media (${device.mobile}) {
        font-size: 12px;
    }
`