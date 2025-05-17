export interface INews {
  title: string;
  content: string;
  author: {
    name: string;
    image: {
      src: string;
      alt: string;
    };
  };
  date: string;
}
