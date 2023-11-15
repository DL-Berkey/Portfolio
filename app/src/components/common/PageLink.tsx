import styled from "styled-components";

import { FiExternalLink } from "react-icons/fi";

interface Props {
    isBlank: boolean;
    to: string;
    children: string;
}

const PageLink = (props: Props) => {
    return (
        <Link href={props.to} target={props.isBlank ? "_blank" : undefined}>
            <span>{props.children}</span>
            <FiExternalLink />
        </Link>
    );
};

const Link = styled.a`
    display: flex;
    align-items: center;

    & svg {
        color: var(--a_blue);

        transform: scale(0.8);
    }
`;

export default PageLink;
