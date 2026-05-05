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

export type Web = {
  title: String;
  contents: String;
  url: String;
  datetime: String;
};

export type Meta<T> = {
  meta: {
    is_end: boolean;
  };
  documents: T[];
};
