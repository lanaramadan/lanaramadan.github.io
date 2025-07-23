export type Project = {
    name: string;
    webpage: string;
    overview: string;
    description?: string;
    tools: string[];
    links?: {
        github?: string;
    }
    duration: {
        start: string;
        end: string;
    };
    images: string[];
    color?: string,
    desktop: boolean;
};
