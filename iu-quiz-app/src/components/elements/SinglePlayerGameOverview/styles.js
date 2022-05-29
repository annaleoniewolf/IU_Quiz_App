import styled from "styled-components"
import theme from "../../../styles/theme"

export const SinglePlayerGameOverview = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    align-items: center;

    svg {
        color: ${theme.colors.primary};
        
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
        font-weight: 300;
        font-size: 14px;
        line-height: 14px;
        max-width: 250px;
    }
`