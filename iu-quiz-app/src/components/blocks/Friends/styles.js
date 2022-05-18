import styled from "styled-components"
import theme from "../../../styles/theme"

export const Friends = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    max-width: 1300px;
    width: 100%;
    table {
        tr {
            td, th {
                :first-child {
                    width: 50%;
                    text-align: start;
                }

                text-align: center;
                vertical-align: middle;
                width: 10%;

                svg {
                    color: ${theme.colors.red};
                }
            }
        }
    }
`

export const Chat = styled.div`
    svg {
        color: ${theme.colors.primary}!important;
        opacity: 0.5;
    }
`

export const Button = styled.div`
    position: absolute;
    left: 45%;
    bottom: 50px;
`