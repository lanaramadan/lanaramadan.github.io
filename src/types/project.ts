export type Project = {
  name: string;
  webpage: string;
  overview: string;
  description?: string;
  tools: string[];
  links?: {
    github?: string;
    figmaDemo?: string;
    pitchDeck?: string;
  };
  duration: {
    start: string;
    end: string;
  };
  images: string[];
  color?: string;
  desktop: boolean;
};
