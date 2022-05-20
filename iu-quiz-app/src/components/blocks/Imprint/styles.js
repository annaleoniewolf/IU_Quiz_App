import styled from "styled-components"
import { motion } from "framer-motion"
import theme from "../../../styles/theme"

export const Imprint = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 800px) {
        overflow: auto;
    }
`

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    border-radius: 5px;
    padding: 50px 50px;
    width: 800px;
    margin: 20px;
    position: relative;
    @media (max-width: 800px ) {
        margin: 5px;
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

`

export const Icon = styled(motion.div)`
    position: absolute;
    top: 30px;
    left: 30px;
    svg {
        color: ${theme.colors.grey};
    }
`
