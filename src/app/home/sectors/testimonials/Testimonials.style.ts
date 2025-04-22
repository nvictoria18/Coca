import styled from "styled-components";
import Bg from "@/image/comments-bg.svg"

export const Block = styled.div`
    height: 769px;
    width: 100%;
    background-color: red;
    background-image: url(${Bg}); 
    background-repeat: no-repeat;
    background-size: contain; // Добавьте это свойство
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