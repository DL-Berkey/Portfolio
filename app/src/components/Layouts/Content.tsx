import styled from "styled-components";

import Introduction from "../Introduction";
import Skill from "../Skill";

const Content = () => {
    return (
        <Wrapper>
            <Introduction />
            <Skill />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2%;

    min-height: 100%;
`;

export default Content;
