import theme from '../../../../styles/theme'
import styled from 'styled-components'

export const Guidlines = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    hr {
        border: none;
        height: 1px;
        width: 40px;
        background-color: ${theme.colors.grey};
        margin: 20px 0px;
    }

    ul {
        
        li {
            font-size: 16px;
            color: #000;
        }
    }

`