import styled from "styled-components"
import theme from "../../../../styles/theme"

export const ImageUploader = styled.div`

    .upload__image-wrapper {
        position: relative;
    }

    .image-item{
        position: relative;
        width: 144px;
        height: 144px;
        background-color: ${theme.colors.grey};
        border: 1px solid ${theme.colors.darkgrey};
        border-radius: 120px;
    }
`

export const ImageEditor = styled.div`
    
`



export const Icon = styled.div`
    svg {
        color: #fff;
    }
`

export const ImageUploadButton = styled.button`
    width: 37px;
    height: 37px;
    background-color: ${theme.colors.primary};
    border-radius: 120px;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5px;
    right: 5px;
    border: none;
    z-index: 20;

    :hover {
        background-color: #4f6681;
        cursor: pointer;
    }
`