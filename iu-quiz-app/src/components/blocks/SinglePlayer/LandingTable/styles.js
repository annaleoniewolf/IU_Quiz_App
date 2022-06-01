import styled from "styled-components";
import theme from "../../../../styles/theme";

export const LandingTable = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Overview = styled.div`
    min-height: 45vh;
    width: 100%;
`

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

export const Responsive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(max-width: 800px) {
        p {
            font-size: 16px;
            line-height: 21px;
        }
    }
`

export const ResponsiveItem = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0px;
    h6 {
        text-align: center;
    }

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

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    
`

export const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: flex-start;
    width: 100%;
    min-height: 58px;
`
export const Option = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
`