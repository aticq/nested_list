import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        background-color: #f7f8fa;
        color: #1d1d1f;
        line-height: 1.6;
        font-size: 16px;
        margin: 15px;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #1d1d1f;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }

    p {
        margin-bottom: 1.5rem;
    }

    a {
        color: #ff5c00;
        text-decoration: none;
        transition: color 0.3s;
    }

    a:hover {
        color: #e04e00;
    }
    
    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyle;
