type Prettify<T> = {
    [K in keyof T]: T[K];
};

type TagType = "front" | "back" | "other";

interface ProjectItemData {
    name: string;
    img: {
        src: string;
        alt: string;
    }[];
    content: string;
    link: {
        name: string;
        to: string;
        isBlank: boolean;
    }[];
    tag: {
        name: string;
        tagType: TagType;
    }[];
}
