import styled from "styled-components"

export const StopModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        padding: 10px 0px;
    }
    @media(max-width: 800px) {
        padding: 0px;
    }
`