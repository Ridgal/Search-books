export interface IBooks {
  valueSearch: string;
  categories: string;
  sort: string;
  maxResults: number;
  volumeInfo?: any;
};

export interface CardProps {
  thumbnail: string;
  title: string;
  authors: string;
  language: string;
  description: string;
  infoLink: string;
  publishedDate: number;
  publisher: string;
  pageCount: number;
};