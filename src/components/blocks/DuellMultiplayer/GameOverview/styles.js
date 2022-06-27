import styled, { css } from "styled-components"
import theme from "../../../../styles/theme"

export const GameOverview = styled.div`

`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
    }
`
export const Frames = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 20px;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`
export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 35px;
    width: 320px;
    border: 1px solid ${theme.colors.primary};
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-top: 20px;
`
export const AnswersOverview = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`
export const Answer = styled.div`
   width: 80px; 
   height: 40px;
   margin: 10px 0px;
   background-color: ${theme.colors.grey};
   ${({ status }) =>
        status === "none" &&
        css`
            background-color: ${theme.colors.grey};
        `}
    ${({ status }) =>
    status === "false" &&
    css`
        background-color: ${theme.colors.red};
    `}
    ${({ status }) =>
    status === "right" &&
    css`
        background-color: ${theme.colors.green};
    `}
`