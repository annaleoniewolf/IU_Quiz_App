import styled, { css } from "styled-components"

export const Card = styled.div`
    -webkit-box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.23); 
    box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.23);
    background-color: #fff;
    border-radius: 5px;
    width: 530px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    margin: 20px;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll; 
      ::-webkit-scrollbar {
            display: none; 
      }
    ${props => props.size === "normal" && css`
        height: 300px;
  `}
  ${props => props.size === "small" && css`
        height: 200px;
  `}
  ${props => props.size === "large" && css`
        height: 400px;
  `}
`