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

export const Responsive = styled.div``

export const ResponsiveItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0px;

    hr {
        margin: 10px 0px;
        background-color: ${theme.colors.grey};
        width: 100%;
        height: 1px;
        border: none;

        
    }
    .itemLine {
        border: 1px dashed ${theme.colors.grey};
        height: 0px;
        background-color: transparent;
        margin: 15px auto;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const Option = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
`
