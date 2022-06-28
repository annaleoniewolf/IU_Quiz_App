import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";

export const AddQuestion = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px;
    @media(max-width: 600px) {
        padding: 20px 0px;
    }
    form {
        width: 100%;
    }
`

export const Columns = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    gap: 40px;
    > div {
        width: 50%;
    }
    @media(max-width: 1000px) {
        flex-direction: column;
        gap: 0px;
        > div {
            width: 100%;
        }
    }

`

export const Column = styled.div`

`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubmitButton = styled.input`
    width: 200px;
    padding: 15px 0px;
    margin: 10px 0px;
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    margin: 0px;
    letter-spacing: 0.7px;
    background-color: ${theme.colors.primary};
    text-align: center;
    opacity: 1;
    margin-top: 30px;
    border: none;
    transition: 0.7s;

    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const Textarea = styled.div`
    position: relative;
    margin: 35px 0px;
    label {
        position: absolute;
        top: -20px;
        left: 0px;
        color: ${theme.colors.primary};
    }
    textarea {
        width: 100%;
        height: 70px;
        border-color: ${theme.colors.primary};
        resize: none;
        border-radius: 4px;
        font-family: ${theme.font.primary};
        padding: 10px 10px 10px 20px;
        :focus {
            outline: none;
        }
    }
    ${({ selected }) =>
    selected === true &&
    css`
        textarea {
            border-color: ${theme.colors.green};
        }
    `}
`

export const Explanation = styled.div`
    position: relative;
    margin: 35px 0px;
    label {
        position: absolute;
        top: -20px;
        left: 0px;
        color: ${theme.colors.primary};
    }
    textarea {
        width: 100%;
        height: 230px;
        border-color: ${theme.colors.primary};
        resize: none;
        border-radius: 4px;
        font-family: ${theme.font.primary};
        padding: 10px 10px 10px 20px;
        :focus {
            outline: none;
        }
    }
    ${({ selected }) =>
    selected === true &&
    css`
        textarea {
            border-color: ${theme.colors.green};
        }
    `}
`

export const AnswerSelector = styled.div`
    position: absolute; 
    top: 20px;
    left: -12px;
    background-color: ${theme.colors.primary};
    color: #fff;
    border-radius: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    transition: 0.8s;

    ${({ selected }) =>
    selected === true &&
    css`
        background-color: ${theme.colors.green};
    `}

    :hover {
        cursor: pointer;
        background-color: ${theme.colors.green};
    }
`

export const Select = styled.div`
    label {
        color: ${theme.colors.primary};
    }
`

export const InputBox = styled.div``

export const Header = styled.div``

export const TextAreaContainer = styled.div``
