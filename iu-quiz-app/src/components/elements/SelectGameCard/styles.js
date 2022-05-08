import styled, { css } from "styled-components"
import theme from "../../../styles/theme"


export const SelectGameCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    transition: 0.7s;
    padding: 20px;
    width: 250px;
    border: 2px solid ${theme.colors.primary};
    p {
        text-align: center;
        font-weight: 300;
    }
    :hover {
        background-color: ${theme.colors.primary};
        cursor: pointer;
        svg {
            color: #fff;
        }
        h4 {
            color: #fff;
        }
        p {
            color: #fff;
        }
    }
    ${({selected}) => {
        return css`
            ${selected &&
                css`
                    background-color: ${theme.colors.primary};
                    svg {
                        color: #fff!important;
                    }
                    h4 {
                        color: #fff;
                    }
                    p {
                        color: #fff;
                    }
                `
            }
        `
    }}
`

export const Icon = styled.div`
    height: 55px;
    width: 55px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    svg {
        color: ${theme.colors.primary};
    }
`