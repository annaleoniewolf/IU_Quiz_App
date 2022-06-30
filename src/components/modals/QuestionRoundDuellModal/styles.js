import styled, { css } from "styled-components"
import theme from "../../../styles/theme"

export const QuestionRoundDuellModal = styled.div`

`

export const Content = styled.div`
    h4 {
        max-width: 750px;
    }
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
        min-width:375px;
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
