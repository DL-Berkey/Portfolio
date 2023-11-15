import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <a href="#introduce">소개</a>
                </li>
                <li>
                    <a href="#skill">기술</a>
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
    position: sticky;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 6%;

    margin-bottom: 2%;

    border-bottom: 1px solid gray;
    background: white;

    & ul {
        display: flex;
        justify-content: center;
        gap: 3%;

        width: 50%;
    }

    & ul li a {
        font-size: 2rem;
    }

    & span {
        position: absolute;

        right: 1%;

        font-size: 0.8rem;
    }
`;
export default Header;
