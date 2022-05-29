import styled from "styled-components"
import { motion } from "framer-motion"
import theme from "../../../styles/theme"

export const Chat = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 10px;
`

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 50px 100px;
    @media(max-width: 800px) {
        padding: 20px;
    }

    hr {
        border: none;
        width: 80%;
        height: 1px;
        background-color: ${theme.colors.grey};
        margin: 20px;
        margin-top: 30px;
    }

    p {
        margin: 20px 0px 30px 0px;
        text-align: center;
    }
`

export const Icon = styled(motion.div)`
    svg {
        color: ${theme.colors.primary};
    }
`