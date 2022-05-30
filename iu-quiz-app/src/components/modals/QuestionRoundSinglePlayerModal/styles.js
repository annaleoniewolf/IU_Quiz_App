import styled, { css } from "styled-components"
import theme from "../../../styles/theme"

export const QuestionRoundSinglePlayerModal = styled.div`

`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between;
`

export const Answers = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 800px;
    padding: 20px;
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
`

export const Progress = styled.p`
    margin: 0px;
`