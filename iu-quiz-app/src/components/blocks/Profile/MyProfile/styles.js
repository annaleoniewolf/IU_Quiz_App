import styled from "styled-components"
import theme from "../../../../styles/theme"

export const MyProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10%;
    align-items: center;
    padding: 50px 100px; 
`

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

export const Name = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 600px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3px;
    width: 100%;
`
export const Element = styled.div`
    position: relative;
    height: 48px;
    margin: 25px 0px;
    height: 23px;
    width: 100%;
    max-width: 600px;

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

export const SubmitButton = styled.input`
    width: 170px;
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