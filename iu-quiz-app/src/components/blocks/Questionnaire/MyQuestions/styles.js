import styled from "styled-components";
import theme from "../../../../styles/theme";

export const MyQuestions = styled.div`
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
export const PenButton = styled.div`
    svg{
        color: ${theme.colors.primary};
        width: 25px;
        height: 25px;
        transition: 0.5s;
        :hover {
            opacity: 0.3;
            cursor: pointer;
        }
    }
`

export const DeleteButton = styled.div`
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