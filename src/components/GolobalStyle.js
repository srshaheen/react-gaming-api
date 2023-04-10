import { createGlobalStyle } from "styled-components";

const GolbalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background: darkgrey;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        padding: 1.5rem;
        color: #333;
    }
    p{
        color: #696969;
        line-height: 200%;
        font-size: 1.2rem;
    }
    a{
        text-decoration: none;
        color: #333;
    }
`

export default GolbalStyle;