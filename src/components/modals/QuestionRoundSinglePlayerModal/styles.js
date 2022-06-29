import styled, { css } from "styled-components"
import theme from "../../../styles/theme"
import { motion } from "framer-motion";

export const QuestionRoundSinglePlayerModal = styled.div`

`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between;
    h4 {
        max-width: 600px;
    }
`

export const Answers = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 800px;
    padding: 20px;
    @media(max-width: 1300px) {
        padding: 0px 0px 20px 0px;
    }
`

export const Answer = styled.div`
    border: 1px solid ${theme.colors.primary};
    padding: 20px;
    width: 375px;
    height: 150px;
    transition: .5s;

    :hover {
        cursor: pointer;
        background-color: ${theme.colors.primary};
        p {
            color: #fff;
        }
    }

    @media(max-width: 1300px) {
        width: 45%;
    }
    @media(max-width: 800px) {
        width: 100%;
    }

    ${({selected}) => {
        return css`
            ${selected &&
                css`
                    background-color: ${theme.colors.primary};
                    svg {
                        color: #fff!important;
                    }
                    h4 {
                        color: #fff;
                    }
                    p {
                        color: #fff;
                    }
                `
            }
        `
    }}
`

export const ProgressBar = styled.div`
    width: 800px;
    padding: 20px;
    @media(max-width: 1300px) {
        width: 100%;
    }
    @media(max-width: 800px) {
        padding: 0px;
    }
`

export const Progress = styled.p`
    margin: 0px;
`

export const FeedbackContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Feedback = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    p {
        line-height: 25px;
    }
`

export const SadFace = styled.div`
    svg {
        color: ${theme.colors.red};
        width: 70px;
        height: 70px;
    }
`

export const WinkFace = styled.div`
    svg {
        color: ${theme.colors.orange};
        width: 70px;
        height: 70px;
    }
`

export const HappyFace = styled.div`
    svg {
        color: ${theme.colors.green};
        width: 70px;
        height: 70px;
    }
`