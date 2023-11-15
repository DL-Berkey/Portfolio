import styled from "styled-components";

import { Article, Title } from "../../styles";
import ProjectItem from "./ProjectItem";

const Project = () => {
    return (
        <Wrapper id="project">
            <Title>프로젝트</Title>
            <span>완료된 프로젝트</span>
            <ProjectItem
                name="포토폴리오"
                img={[
                    { alt: "포토폴리오 이미지", src: "#" },
                    { alt: "포토폴리오 이미지", src: "#" },
                    { alt: "포토폴리오 이미지", src: "#" },
                    { alt: "포토폴리오 이미지", src: "#" },
                ]}
                content="내용내용"
                link={[{ to: "#", isBlank: true, name: "깃허브" }]}
                tag={[{ name: "React", tagType: "front" }]}
            />

            <span>진행 중인 프로젝트</span>
            <ProjectItem
                name="포토폴리오"
                img={[
                    { alt: "포토폴리오 이미지", src: "#" },
                    { alt: "포토폴리오 이미지", src: "#" },
                    { alt: "포토폴리오 이미지", src: "#" },
                    { alt: "포토폴리오 이미지", src: "#" },
                ]}
                content="내용내용"
                link={[{ to: "#", isBlank: true, name: "깃허브" }]}
                tag={[{ name: "React", tagType: "front" }]}
            />
        </Wrapper>
    );
};

const Wrapper = styled(Article)`
    & > span {
        padding: 0 3%;

        font-size: 1.8rem;
        font-style: italic;
        color: white;

        background: var(--green);
    }
`;

export default Project;
