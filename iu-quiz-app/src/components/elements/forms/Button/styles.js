import styled, { css } from "styled-components"
import theme from "../../../../styles/theme"

export const Button = styled.div`
    background-color: ${theme.colors.primary};
    text-align: center;
    opacity: 1;
    transition: 0.7s;

    :hover {
        cursor: pointer;
        opacity: 0.7;
    }

    a {
        text-decoration: none;
        color: #fff;
    }


    ${({ size }) =>
        size === "normal" &&
        css`
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
        `}
    ${({ size }) =>
        size === "small" &&
        css`
            padding: 10px;
            width: 90px;
            font-size: 12px;
            line-height: 14px;
            text-transform: uppercase;
            font-weight: 500;
            color: #fff;
            margin: 0px;
            letter-spacing: 0.7px;
        `}
        ${({ inactive }) =>
        inactive  &&
        css`
            opacity: 0.5;
            :hover {
                cursor: default;
                opacity: 0.5;
            }
        `}
        ${({ red }) =>
        red  &&
        css`
            background-color: ${theme.colors.red};
        `}


`