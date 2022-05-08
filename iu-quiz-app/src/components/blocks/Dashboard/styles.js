import styled from "styled-components"
import theme from "../../../styles/theme"


export const Dashboard = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NavigationCards = styled.div`
    width: 650px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const Overview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    hr {
        width: 100%;
        border: none;
        height: 1px;
        background-color: ${theme.colors.grey};
        margin: 20px 0px;
    }
`