import styled, { css } from "styled-components"
import theme from '../../../styles/theme'

export const QuestionDetails = styled.div`
    hr {
        width: 100%;
        min-width: 600px;
        background-color: ${theme.colors.grey};
        height: 1px;
        border: none;
        margin: 20px 0px;
        @media (max-width: 700px) {
            min-width: auto;
        }
    }
    p {
        max-width: 600px;
    }
`

export const Answer = styled.div`
    ${({ correct }) =>
    correct === true &&
    css`
        h6 {
            color: ${theme.colors.green};
        }
    `}
`