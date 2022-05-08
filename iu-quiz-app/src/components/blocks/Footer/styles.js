import styled from 'styled-components'

export const Footer = styled.div`
    background-color: #041119;
    padding: 20px;
    height: 7vh;
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    left: 0px;

    a {
        color: #fff;
        margin: 0px 20px;
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`