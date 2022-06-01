import styled from "styled-components"

export const StopModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        padding: 15px 0px 30px 0px;
        text-align: center;
    }
    @media(max-width: 800px) {
        padding: 0px;
    }
     a {
         text-decoration: none;
     }
`