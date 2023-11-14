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

    body {
        width: 1920px;
        height: 929px;
    }
`;

export default Global;
