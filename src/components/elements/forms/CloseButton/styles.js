import styled from "styled-components";
import theme from "../../../../styles/theme";

export const CloseButton = styled.div`
    margin-bottom: 15px;
    svg {
        transition: 0.5s;
        color: ${theme.colors.primary};
        opacity: 1;
    }
    :hover {
        cursor: pointer;
        svg {
            opacity: 0.7;
        }
    }
`