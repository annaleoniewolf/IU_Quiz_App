import styled from "styled-components"
import theme from "../../../styles/theme"

export const UserOverview = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    width: 100%;
`

export const Image = styled.div`
    background-color: #d0d0d0;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    overflow: hidden;
    border: 1px solid ${theme.colors.grey};
`

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`