import styled from "styled-components";

import TagContainer from "./TagContainer";
import Tag from "./Tag";
import PageLink from "../common/PageLink";

type Props = Prettify<ProjectItemData>;

const ProjectItem = (props: Props) => {
    const { name, img, content, link, tag } = props;

    return (
        <Wrapper>
            <Name>
                <PageLink to="http://naver.com" isBlank={true}>
                    {"제목: " + name}
                </PageLink>
            </Name>
            <ImageContainer>
                {img.map(({ src, alt }, idx) => (
                    <Img key={src + alt + String(idx)} src={src} alt={alt} />
                ))}
            </ImageContainer>
            <Content>{content}</Content>
            <LinkContainer>
                <span>관련 링크: </span>
                {link.map(({ to, isBlank, name }, idx) => (
                    <PageLink
                        key={name + String(idx)}
                        to={to}
                        isBlank={isBlank}
                    >
                        {name}
                    </PageLink>
                ))}
            </LinkContainer>
            <TagContainer>
                {tag.map(({ tagType, name }, idx) => (
                    <Tag key={name + String(idx)} tagType={tagType}>
                        {name}
                    </Tag>
                ))}
            </TagContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4%;

    height: 40rem;

    margin-top: 4%;
    margin-bottom: 10%;

    font-size: 1.4rem;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;

    height: 40%;

    overflow-y: scroll;
`;

const Img = styled.img`
    min-width: 15rem;

    border: 2px solid gray;
    border-radius: 10px;

    & + & {
        margin-left: 5%;
    }
`;

const Name = styled.span`
    width: fit-content;
    height: fit-content;

    padding-bottom: 1%;

    font-size: 1.6rem;

    border-bottom: 1px solid gray;
`;

const Content = styled.p`
    flex: 1;

    height: 0;

    padding: 0 2%;

    font-size: 1.4rem;
    line-height: 1.3;
`;

const LinkContainer = styled.div`
    display: flex;
    gap: 2%;

    height: fit-content;
`;
export default ProjectItem;
