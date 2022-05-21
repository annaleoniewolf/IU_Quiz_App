import styled from "styled-components"
import theme from "../../../../styles/theme";

export const MyFriends = styled.div`
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
export const MessageButton = styled.div`
    svg{
        color: ${theme.colors.primary}!important;
        width: 30px;
        height: 30px;
        opacity: 0.3;
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