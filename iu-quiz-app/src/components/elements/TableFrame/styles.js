import styled, { css } from "styled-components"
import theme from '../../../styles/theme'

export const TableFrame = styled.div`
    border: 2px solid ${theme.colors.primary};
    width: 100%;
    margin: 30px 0px;
    position: relative;

    @media(max-width: 1300px) {
        
        border: none;
    }
`

export const Content = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 20px;
    min-height: 650px;
    max-height: 650px;
    @media(max-width: 1300px) {
        min-height: 650px;
        height: auto;
    }
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
    ::-webkit-scrollbar {
        display: none; 
    }
`
export const Labels = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.primary};
    width: 100%;
    padding: 20px;
    gap: 40px;

    @media(max-width: 800px) {
        flex-direction: column;
        gap: 10px;
    }

    
`
export const Tab = styled.div`
    h2 {
        color: #fff;
        font-weight: 400;
    }
	cursor: pointer;
	-webkit-user-select: none; /* Safari */
	user-select: none;

	${({ active }) => {
		return (
			active &&
			css`
				text-decoration: underline white;
			`
		)
	}}
`

export const Button = styled.div`
    button {
        background-color: #fff;
        border: none;
        color: ${theme.colors.primary};
        font-weight: 600;
        border: 1px solid ${theme.colors.primary};
        transition: 0.5s;
        :hover {
            cursor: pointer;
            background-color: ${theme.colors.primary};
            color: #fff;
            border: 1px solid #fff;
        }
        padding: 5px 10px;
        ${({ active }) => {
		return (
			active &&
			css`
				background-color: ${theme.colors.primary};
                border-color: #fff;
                color: #fff;
			`
		)
	    }}
    }
`