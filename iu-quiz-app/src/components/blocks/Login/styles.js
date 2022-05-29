import styled from "styled-components";
import theme from "../../../styles/theme";
import { motion } from "framer-motion";

export const Login = styled.div`
    background-image: url("/landing-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: hidden;
    @media(max-width: 1400px) {
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
`
export const Information = styled.div`
    z-index: 20;
    width: 45%;
    height: 100%;
    background-color: #041119;
    position: absolute;
    left: 0px;
    clip-path: polygon(0 0, 51% 0, 75% 100%, 0% 100%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 40px;

    @media(max-width: 1400px) {
        clip-path: none;
        position: static;
        width: 80%;
        align-items: center;
        margin: 20px;
    }
    @media(max-width: 800px) {
        width: 100%;
    }

`

export const InformationContent = styled(motion.div)`
    overflow: hidden;
    h2 {
        color: #fff;
        font-size: 30px;
        line-height: 32px;
        font-weight: 500;
        max-width: 300px;
        @media(max-width: 1400px) {
            max-width: 600px;
        }
    }
    p {
        margin: 20px 0px;
        font-size: 16px;
        max-width: 300px;
        line-height: 21px;
        color: #fff;
        @media(max-width: 1400px) {
            max-width: 600px;
        }
    }

    hr {
        border: none;
        height: 1px;
        background-color: #fff;
        width: 30px;
        margin: 20px 0px 0px 0px;
    }
`

export const Content = styled(motion.div)`
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    width: 600px;
    z-index: 50;
    margin-right: 25%;
    overflow: hidden;

    @media(max-width: 1400px) {
        width: 80%;
        margin: 20px 0px;
        
    }
    @media(max-width: 800px) {
        width: 100%;
    }

    hr {
        border: none;
        height: 1px;
        background-color: ${theme.colors.primary};
        width: 50px;
        margin: 15px 0px 0px 0px;
    }
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
    max-width: 300px;
    @media(max-width: 1400px) {
        max-width: 600px;
    }

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