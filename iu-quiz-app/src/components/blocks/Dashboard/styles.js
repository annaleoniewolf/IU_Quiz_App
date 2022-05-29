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

export const CakeChart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        text-align: center;
        font-weight: 300;
        font-size: 14px;
        line-height: 14px;
    }
    max-width: 170px;
`

export const CakeCharts = styled.div`
    display: flex;
    justify-content: space-between;
`

export const VerticalLine = styled.div`
    background-color: ${theme.colors.grey};
    width: 1px;
    height: 100px;
    margin: 0px 20px;
`

export const GameOverview = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
`

export const SinglePlayOverview = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
`
