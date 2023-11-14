import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <a href="#introduce">자기소개</a>
                </li>
                <li>
                    <a href="#skill">스킬</a>
                </li>
                <li>
                    <a href="#project">프로젝트</a>
                </li>
            </ul>
            <span>ver. 0.0.1</span>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 6%;

    & ul {
        display: flex;
        justify-content: center;
        gap: 3%;

        width: 50%;
    }

    & ul li {
        list-style: none;
    }

    & ul li a {
        font-size: 1.8rem;
    }

    & span {
        position: absolute;

        right: 1%;

        font-size: 0.8rem;
    }
`;
export default Header;
