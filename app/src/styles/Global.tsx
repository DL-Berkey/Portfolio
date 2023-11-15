import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: "Pretendard-Regular"
    }

    html {
        --green: #AAC8A7;
        --red: #FF9B9B;
        --dark-01: ##1d2125;
        --dark-02: #212529;

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    body {
        width: 1920px;
        height: 929px;

        font-size: 24px;
    }

    #root {
        height: 100%;
    }
`;

export default Global;
