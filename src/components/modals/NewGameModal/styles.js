import styled from "styled-components";
import theme from "../../../styles/theme";

export const NewGameModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        text-decoration:none;
    }
`

export const GameModeSelection = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    @media(max-width: 1300px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Selection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    height: 170px;
    padding: 15px 0px;
`
export const SelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    label {
        color: ${theme.colors.darkgrey};
        margin-bottom: 5px;
    }
`
export const DuellSelect = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const CollabSelect = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
        color: ${theme.colors.red};
    }
`