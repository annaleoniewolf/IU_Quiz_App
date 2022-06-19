import styled from "styled-components"
import theme from "../../../styles/theme"

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    height: 75px;
    width: 100%;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid ${theme.colors.grey};
    a {
        text-decoration: none;
    }
    h1 {
        opacity: 1;
        transition: 0.3s;
        :hover {
            opacity: 0.7;
        }
    }
    @media (max-width: 1000px) {
        justify-content: space-between;
        padding: 20px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 90px;
    top: 7px;
    gap: 30px;
    p {
        color: ${theme.colors.primary};
        font-size: 20px;
        line-height: 25px;
        font-weight: 500;
        opacity: 1;
        transition: 0.3s;
        :hover {
           opacity: 0.7;
            cursor: pointer;
        }
        @media(max-width: 800px) {
            font-size: 15px;
            line-height: 20px;
        }   
    }
    @media(max-width: 800px) {
        position: static;
        gap: 10px;
    } 
`

export const Icon = styled.div`
    svg {
        color: ${theme.colors.primary};
        opacity: 0.3;
        width: 56px;
        height: 43px;
        @media (max-width: 500px) {
            width: 34px;
            height: 26px;
        }
    }
`