import styled from "styled-components"
import theme from "../../../../styles/theme"

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`
export const Element = styled.div`
    position: relative;
    height: 48px;
    margin: 25px 0px;
    height: 23px;
    width: 100%;
    max-width: 400px;

    input {
        width: 100%;
        border: 1px solid ${theme.colors.grey};
        border-radius: 2px;
        outline: none;
        padding: 1rem;
        background: none;
        z-index: 1;
    }

    input:focus + label,
        input:valid + label {
            top: -.5rem;
            left: .8rem;
            color: ${theme.colors.primary};
            font-weight: 500;
            z-index: 10;
        }
        input:not(:placeholder-shown) input:not(:focus) + label {
            top: -.5rem;
            left: .8rem;
            font-weight: 500;
            z-index: 10;
        }

        input:focus,
        input:valid {
            border: 1.5px solid ${theme.colors.primary};
        }
    
        label {
            position: absolute;
            left: 1rem;
            top: 1rem;
            padding: 0 .25rem;
            background-color: #fff;
            color: ${theme.colors.darkgrey};
            transition: .3s;
        }
`