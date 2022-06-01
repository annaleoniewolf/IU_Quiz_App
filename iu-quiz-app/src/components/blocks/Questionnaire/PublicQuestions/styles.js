import styled from "styled-components"
import theme from "../../../../styles/theme"

export const PublicQuestions = styled.div`
    td, th {
        h6 {
            font-size: 12px;
            font-weight: 300;
            line-height: 14px;
            text-align: center;
        }
        text-align: center;
        :first-child {
            text-align: left;
        }
    }
`

export const Buttons = styled.div`
    position: absolute;
    left: 45%;
    bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 0px;
`
export const BanButton = styled.div`
    svg{
        color: ${theme.colors.red};
        width: 27px;
        height: 27px;
        transition: 0.5s;
        :hover {
            opacity: 0.3;
            cursor: pointer;
        }
    }
`

export const Select = styled.div`
    max-width: 500px;
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
        color: ${theme.colors.darkgrey};
        margin-bottom: 5px;
    }
`