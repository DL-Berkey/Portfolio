import styled from "styled-components";

const Introduction = () => {
    return (
        <Wrapper>
            <Greeting>
                안녕하세요. <br />
                저는
                <span> 김영준</span>
                입니다.
            </Greeting>
            <div>
                <p>장점에 대한 이야기 ...</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    padding: 0 1% 2% 1%;
`;

const Greeting = styled.h2`
    margin-bottom: 6%;

    font-size: 3rem;
    font-weight: 400;

    & span {
        font-weight: 600;
    }
`;

export default Introduction;
