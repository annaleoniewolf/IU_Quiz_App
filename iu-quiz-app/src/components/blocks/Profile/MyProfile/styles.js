import styled from "styled-components"
import theme from "../../../../styles/theme"

export const MyProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10%;
    align-items: center;
    padding: 50px 100px; 
    @media (max-width: 800px) {
        padding: 30px 20px;
    }
    @media (max-width: 400px) {
        padding: 20px 0px;
    }
`
export const ProfileImage = styled.div`
    background-color: #d0d0d0;
    width: 160px;
    height: 160px;
    border-radius: 90px;
    overflow: hidden;
    border: 1px solid ${theme.colors.grey};
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
    @media(max-width: 800px) {
        flex-direction: column;
        width: 100%;
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
    max-width: 600px;

    input {
        position: relative;
        width: 100%;
        border: 1px solid ${theme.colors.grey};
        border-radius: 2px;
        outline: none;
        padding: 1rem;
        background: none;
        z-index: 1;
    }     

    label {
            position: absolute;
            left: 17px;
            top: -9px;
            background-color: #fff;
            color: ${theme.colors.grey};
            font-weight: 400;
            z-index: 50;
        }
`

export const Button = styled.div`
    padding: 30px;
`