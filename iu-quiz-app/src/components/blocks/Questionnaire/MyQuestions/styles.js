import styled from "styled-components";
import theme from "../../../../styles/theme";

export const MyQuestions = styled.div``

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 0px;
`
export const PenButton = styled.div`
    svg{
        color: ${theme.colors.primary};
    }
`

export const DeleteButton = styled.div`
    svg{
        color: ${theme.colors.red};
    }
`