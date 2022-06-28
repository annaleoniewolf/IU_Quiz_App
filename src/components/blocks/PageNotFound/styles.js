import styled from "styled-components"
import theme from "../../../styles/theme"

export const PageNotFound = styled.div`
    background-image: url("/dashboard-background.png");
    height: 93vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
    }
`

export const Content = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: #fff;
    border-radius: 5px;

    
    h5 {
        text-align: center;
    }

    svg {
        width: 50px;
        height: 50px;
        color: ${theme.colors.primary};
    }
`