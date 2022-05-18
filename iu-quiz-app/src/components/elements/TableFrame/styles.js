import styled from "styled-components"
import theme from '../../../styles/theme'

export const TableFrame = styled.div`
    border: 2px solid ${theme.colors.primary};
    width: 100%;
    position: relative;
`

export const Title = styled.div`
    background-color: ${theme.colors.primary};
    width: 100%;
    padding: 20px;
    h2 {
        color: #fff;
    }
`
export const Content = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 20px;
    min-height: 650px;
    max-height: 650px;
`