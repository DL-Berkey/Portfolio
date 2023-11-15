import styled, { css } from "styled-components";

interface Props {
    tagType: TagType;
    children: string;
}

const Tag = (props: Props) => {
    return <Wrapper $tag_type={props.tagType}>{props.children}</Wrapper>;
};

export default Tag;

const Wrapper = styled.span<{ $tag_type: TagType }>`
    /* width: fit-content; */
    /* height: 90%; */

    padding: 0 1%;
    margin-bottom: 2%;

    font-size: 1.2rem;
    font-weight: bold;
    color: white;

    border-radius: 5px;

    white-space: nowrap;

    background: ${(props) => {
        switch (props.$tag_type) {
            case "front":
                return css`var(--front)`;
            case "back":
                return css`var(--back)`;
            case "other":
                return css`gray`;
        }
    }};
`;
