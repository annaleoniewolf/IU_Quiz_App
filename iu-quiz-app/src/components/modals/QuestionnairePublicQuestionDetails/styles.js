import styled, { css } from "styled-components"
import theme from '../../../styles/theme'

export const QuestionnairePublicQuestionDetails = styled.div`
    hr {
        width: 100%;
        background-color: ${theme.colors.grey};
        height: 1px;
        border: none;
        margin: 20px 0px;
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