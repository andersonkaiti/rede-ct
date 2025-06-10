export interface IETP {
  name: string;
  description: string;
  members: {
    role: string;
    name: string;
    image: {
      src: string;
      alt: string;
    };
    lattesUrl: string;
  }[];
  text?: string;
}
