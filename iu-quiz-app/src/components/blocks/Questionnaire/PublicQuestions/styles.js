import styled from "styled-components"
import theme from "../../../../styles/theme"

export const PublicQuestions = styled.div`
    td, th {
        h6 {
            font-size: 12px;
            font-weight: 300;
            line-height: 14px;
            text-align: center;
            min-width: 180px;
        }
        text-align: center;
        :first-child {
            text-align: left;
        }
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Questions = styled.div`
    min-height: 45vh;
    width: 100%;
`

export const Buttons = styled.div`
    padding: 20px 0px;
    margin: 0px auto;
`
export const BanButton = styled.div`
    svg{
        color: ${theme.colors.red};
        width: 27px;
        height: 27px;
        opacity: 0.3;
    }
`

export const Select = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
        color: ${theme.colors.darkgrey};
        margin-bottom: 5px;
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