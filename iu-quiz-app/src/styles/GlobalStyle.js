import { createGlobalStyle } from 'styled-components'
import theme from './theme'


const GlobalStyle = createGlobalStyle`
   
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin:0;
    }
    html, body {
        height: 100%;
        position: relative;
        font-family: ${theme.font.primary};

        h1 {
            font-size: 40px;
            line-height: 47px;
            color: ${theme.colors.primary};
            font-weight: 500;
            @media(max-width: 800px) {
                font-size: 25px;
                line-height: 27px;
            }
        }
        h2 {
            font-size: 18px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0.5px;
        }
        h3 {
            
        }
        h4 {
            font-weight: 500;
            color: #000;
            line-height: 21px;
            font-size: 18px;
            margin: 15px 0px;
        }
        h5 {
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: ${theme.colors.primary};
        }
        h6 {
            font-size: 16px;
            line-height: 18px;
            font-weight: 400;
            color: ${theme.colors.primary};
        }
        p {
            font-size: 15px;
            line-height: 18px;
            color: #000;
            margin: 5px 0px;
            
        }
        ul, ol {
            color: ${theme.colors.darkgrey};    
            li {
                color: ${theme.colors.darkgrey};
                font-weight: 400;
                font-size: 20px;
            }
        }
        ol {
            margin:0 40px;
            padding:0;
            li {                
                padding:5px 0 5px 10px;
            }
        }
        ul {
            margin:0;
            padding:0;
            list-style:none;
            li {
                position:relative;
                padding:5px 0 5px 40px;

                &:before {
                    position:absolute;
                    content:'';
                    top:15px;
                    left:15px;
                    width:6px;
                    height:6px;
                    border-radius: 20px;
                    background:${theme.colors.darkgrey};
                }
            }
        }
        table, th, td {
            border: 1px solid ${theme.colors.grey};
            border-collapse: collapse;

        }

        table {
            width: 100%;
            border: none;
            th {
                border: none;
                text-align: start;
                color: ${theme.colors.primary};
                font-size: 16px;
                line-height: 18px;
                font-weight: 400;
                padding: 5px 0px;
            }
            td {
                border-left: none;
                border-right: none;
                padding: 7px 0px;;
            }
        
        }

    }
`

export default GlobalStyle
