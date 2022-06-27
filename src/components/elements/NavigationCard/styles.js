import styled from "styled-components"
import theme from "../../../styles/theme"

export const NavigationCard = styled.div`
    background-color: #fff;
    position: relative;
    width: 280px;
    height: 300px;
    -webkit-box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.23); 
    box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.23);
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 20px;
    svg {
        color: ${theme.colors.primary};
        position: absolute;
        top: 35px;
        left: 105px;
    }
    h4 {

    }

    p {
        text-align: center;
        font-size: 14px;
        line-height: 14px;
    }
`

export const Button = styled.div`
    position: absolute;
    left: 53px;
    bottom: 35px;
`
export const Title = styled.div`
    position: absolute;
    top: 104px;
    width: 100%;
    text-align: center;
`
export const Text = styled.div`
    position: absolute;
    top: 152px;
    left: 25px;
    max-width: 230px;
`