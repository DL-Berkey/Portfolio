import { useRef, WheelEvent, MouseEvent } from "react";

import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

const TagContainer = (props: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return <Wrapper ref={containerRef}>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 4%;

    height: fit-content;

    /* overflow-x: scroll; */
`;

export default TagContainer;
