import colors from "@/app/colors";
import styled from "styled-components";

export const Block = styled.div`
    height: 700px;
    width: 100%;
    position: relative;
    .bg {
        position: absolute;
        top: 182px;
        left: 120px;
    }
`

export const Text = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 69px;
    margin-left: 120px;
    margin-right: 120px;
    align-items: center;
    width: 1200px;
    height: 134px;
`

export const Reviews = styled.div`
    margin: 112px 124px 160px 277px;
    .slider-item {        
        width: 1039px;
    }
`

export const Review = styled.div`
    width: 1039px;
    height: 294px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-sizing: border-box;
`

export const CommentBlock = styled.div`
    width: 898px;
    height: 198px;
    gap: 16px;
    display: flex;
    flex-direction: column;
`

export const CommentGrade = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    height: 26px;
    align-items: center;
`

export const CommentText = styled.div`
    font-family: ${colors.font};
    font-size: 40px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -1px;
    color: ${colors.darkColor};
`

export const Info = styled.div`
    width: 1039px;
    display: flex;
    justify-content: space-between;
`

export const About = styled.div`
    width: 298px;
    height: 56px;
    display: flex;
    gap: 24px;
`

export const AboutText = styled.div`
    width: 207px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const AboutName = styled.div`
    font-family: ${colors.font};
    font-size: 18px;
    color: ${colors.darkColor};
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0px;
`

export const AboutJobTitle = styled.div`
    font-family: ${colors.font};
    font-size: 16px;
    color: ${colors.grayColor};
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0px;    
`