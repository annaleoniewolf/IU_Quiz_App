import styled from "styled-components";
import theme from "../../../../styles/theme";

export const QuestionRound = styled.div`

`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between;
`

export const Questions = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 800px;
    padding: 20px;
`

export const Question = styled.div`
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
`

export const ProgressBar = styled.div`
    width: 800px;
    padding: 20px;
`

export const Progress = styled.p`
    margin: 0px;
`