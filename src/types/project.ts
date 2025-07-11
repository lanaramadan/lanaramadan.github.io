export type Project = {
    name: string;
    webpage: string;
    overview: string;
    description?: string;
    tools: string[];
    links: string[];
    duration: {
        start: string;
        end: string;
    };
    images: string[];
    desktop: boolean;
};
