export interface IGalleryItem {
  url: string;
  caption: string;
}

export interface IDocument {
  url: string;
  title: string;
}

export interface ICongress {
  edition: string;
  title: string;
  location: string;
  initialDate: string;
  finalDate: string;
  description: string;
  documents: IDocument[];
  gallery?: IGalleryItem[];
}
