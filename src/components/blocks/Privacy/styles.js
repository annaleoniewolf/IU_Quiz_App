import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import theme from "../../../styles/theme"

export const Privacy = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ token }) =>
    token === true &&
    css`
        height: 93vh;
    `}
    @media(max-width: 1400px) {
        height: auto;
    }
`

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #fff;
    border-radius: 5px;
    padding: 50px 50px;
    height: 600px;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
    ::-webkit-scrollbar {
        display: none; 
    }
    width: 80%;
    max-width: 1300px;
    margin: 20px;
    position: relative;
    @media (max-width: 800px ) {
        margin: 5px;
    }
    @media(max-width: 1400px) {
        height: auto;
        width: 100%;
        padding: 50px 25px;
    }

    hr {
        border: none;
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.grey};
        margin: 20px;
        margin-top: 30px;
        @media(max-width: 800px) {
            margin: 5px;
            margin-top: 10px;
        }
    }

    p {
        margin: 20px 0px 30px 0px;
    }

    ul {
        li {
            font-size: 16px;
            color: #000;
        }
    }

    a {
        color: ${theme.colors.primary};
        word-break: break-all;
    }

`

export const Icon = styled(motion.div)`
    position: absolute;
    top: 30px;
    left: 30px;
    svg {
        color: ${theme.colors.grey};
    }
`
