import styled from "styled-components";

export const Questionnaire = styled.div`
    background-image: url("/dashboard-background.png");
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px) {
        height: auto;
    }
`

export const Content = styled.div`
    max-width: 1300px;
    width: 100%;
`

