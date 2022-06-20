import styled from "styled-components"

export const DeleteQuestionModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        padding: 15px 0px;
        line-height: 20px;
        text-align: center;
        max-width: 500px;
    }
    @media(max-width: 800px) {
        padding: 0px;
    }
     a {
         text-decoration: none;
     }
`