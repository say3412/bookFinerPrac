export type Book = {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
};

export type Meta = {
  meta: {
    is_end: boolean;
  };
  documents: Book[];
};
