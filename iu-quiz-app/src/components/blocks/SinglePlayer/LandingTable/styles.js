import styled from "styled-components";
import theme from "../../../../styles/theme";

export const LandingTable = styled.div``

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 0px;
`
export const Id = styled.div`
    color: ${theme.colors.primary};
    text-align: center;
    font-weight: 300;
`

export const Text = styled.div`
    color: ${theme.colors.grey};
`

export const CheckIcon = styled.div`
    margin: 0px auto;
    svg {
        color: ${theme.colors.green};
        width: 27px;
        height: 27px;
        transition: 0.5s;
        :hover {
            opacity: 0.3;
            cursor: pointer;
        }
    }
`

export const XIcon = styled.div`
    margin: 0px auto;
    svg {
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