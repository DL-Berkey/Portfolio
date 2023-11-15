import styled, { css } from "styled-components";

import { Article, Title } from "../styles";

const Skill = () => {
    return (
        <Wrapper id="skill">
            <Title>기술</Title>
            <span>강점</span>
            <SkillContainer>
                <p>언어</p>
                <Row>
                    <Column $is_strong={"true"}>Javascript</Column>
                    <Seperator>,</Seperator>
                    <Column $is_strong={"true"}>Typescript</Column>
                </Row>
                <p>프론트엔드</p>
                <Row>
                    <Column $is_strong={"true"}>React</Column>
                    <Seperator>,</Seperator>
                    <Column $is_strong={"true"}>Recoil</Column>
                    <Seperator>,</Seperator>
                    <Column>React-Query</Column>
                    <Seperator>,</Seperator>
                    <Column $is_strong={"true"}>React-Router-Dom</Column>
                    {/* <br /> */}
                    <Column $is_strong={"true"}>Styled-Components</Column>
                    <Seperator>,</Seperator>
                    <Column>Vite</Column>
                </Row>
                <p>백엔드</p>
                <Row>
                    <Column $is_strong={"true"}>Express</Column>
                    <Seperator>,</Seperator>
                    <Column>Prisma</Column>
                </Row>
                <p>기타</p>
                <Row>
                    <Column $is_strong={"true"}>Git</Column>
                    <Seperator>,</Seperator>
                    <Column>Firebase</Column>
                </Row>
            </SkillContainer>
            <hr />
        </Wrapper>
    );
};

const Wrapper = styled(Article)`
    // 강점
    & > span {
        position: relative;

        padding-left: 2%;

        font-size: 1.2rem;
    }

    // 강점 선
    & > span::after {
        content: "";

        position: absolute;
        right: -100%;
        top: 50%;

        transform: translateY(-50%);

        width: 2.2rem;
        height: 0.2rem;

        background: var(--green);
    }
`;

const SkillContainer = styled.div`
    & > p {
        font-weight: bold;
        font-style: italic;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    font-size: 1.6rem;

    margin-bottom: 4%;
`;

const Column = styled.span<{ $is_strong?: "true" }>`
    position: relative;

    font-size: 1.4rem;

    // 강점 하이라이팅
    &::after {
        content: "";

        position: absolute;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 3px;

        ${(props) =>
            props.$is_strong &&
            css`
                background-color: var(--green);
            `}
    }
`;

const Seperator = styled.span`
    margin-left: 1%;
    margin-right: 3%;

    font-weight: bold;
    color: var(--red);
`;

export default Skill;
