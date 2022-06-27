import styled from "styled-components"

export const Modal = styled.div`
  position: relative;
`
export const CloseButton = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
`
export const ModalContent = styled.div`
    padding: 20px 20px;
    max-height: 70vh;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll; 
      ::-webkit-scrollbar {
            display: none; 
      }
`
