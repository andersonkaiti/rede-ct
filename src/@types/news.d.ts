export interface INews {
  title: string;
  content: string;
  // author: {
  //   name: string;
  //   image: {
  //     src: string;
  //     alt: string;
  //   };
  // };
  date: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
  id: string;
  author_id: string;
}
