import styled from "styled-components";

export const Article = styled.article`
    width: 40%;

    padding: 0 1%;

    border-bottom: 2px solid rgba(166, 166, 166, 0.5);

    & + & {
        margin-top: 3%;
    }
`;

export const Title = styled.h2`
    margin-bottom: 2%;

    font-size: 3rem;
`;
