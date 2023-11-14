import { css } from "styled-components";

export const Article = css`
    width: 70%;

    background: white;
    border-radius: 10px;

    & + & {
        margin-top: 2%;
    }
`;
