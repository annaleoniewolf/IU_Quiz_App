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
    border: 1px solid ${theme.colors.grey};
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
        status === null &&
        css`
            background-color: ${theme.colors.grey};
        `}
    ${({ status }) =>
    status === false &&
    css`
        background-color: ${theme.colors.red};
    `}
    ${({ status }) =>
    status === true &&
    css`
        background-color: ${theme.colors.green};
    `}
`

export const Result = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
`

export const Users = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const ProfileImage = styled.div`
    background-color: #d0d0d0;
    width: 160px;
    height: 160px;
    border-radius: 90px;
    overflow: hidden;
    border: 1px solid ${theme.colors.grey};
    img {
        max-width:100%;
        max-height:100%;
    }
    
`
export const VerticalLine = styled.div`
    height: 200px;
    width: 1px;
    background-color: ${theme.colors.grey};
`

export const Icon = styled.div`
    svg {
        width: 60px;
        height: 60px;
        color: ${theme.colors.primary};
    }
`