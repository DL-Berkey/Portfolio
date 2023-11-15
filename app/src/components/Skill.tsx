import styled, { css } from "styled-components";

const Skill = () => {
    return (
        <Wrapper>
            <h2>기술</h2>
            <span>강점</span>
            <SkillContainer>
                <p>언어</p>
                <Row>
                    <Column isStrong={true}>Javascript</Column>
                    <Seperator>,</Seperator>
                    <Column isStrong={true}>Typescript</Column>
                </Row>
                <p>프론트엔드</p>
                <Row>
                    <Column isStrong={true}>React</Column>
                    <Seperator>,</Seperator>
                    <Column isStrong={true}>Recoil</Column>
                    <Seperator>,</Seperator>
                    <Column>React-Query</Column>
                    <Seperator>,</Seperator>
                    <Column isStrong={true}>React-Router-Dom</Column>
                    <br />
                    <Column isStrong={true}>Styled-Components</Column>
                    <Seperator>,</Seperator>
                    <Column>Vite</Column>
                </Row>
                <p>백엔드</p>
                <Row>
                    <Column isStrong={true}>Express</Column>
                    <Seperator>,</Seperator>
                    <Column>Prisma</Column>
                </Row>
                <p>기타</p>
                <Row>
                    <Column isStrong={true}>Git</Column>
                    <Seperator>,</Seperator>
                    <Column>Firebase</Column>
                </Row>
            </SkillContainer>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    width: 30%;

    padding: 0 1%;

    border-bottom: 2px solid rgba(166, 166, 166, 0.5);

    & h2 {
        margin-bottom: 2%;

        font-size: 3rem;
    }

    & > span {
        position: relative;

        padding-left: 2%;

        font-size: 1.2rem;
    }

    // 선
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
    font-size: 1.6rem;

    margin-bottom: 4%;
`;

const Column = styled.span<{ isStrong?: boolean }>`
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
            props.isStrong &&
            css`
                background-color: var(--green);
            `}
    }

    // 컬럼 간 여백
    & + & {
        margin-left: 4%;
    }
`;

const Seperator = styled.span`
    margin-left: 1%;
    margin-right: 3%;

    font-weight: bold;
    color: var(--red);
`;

export default Skill;
