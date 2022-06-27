import styled from "styled-components"
import theme from "../../../styles/theme"

export const Friends = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 1400px) {
        height: auto;
    }
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