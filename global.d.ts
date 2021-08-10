declare namespace Api {
  export interface Quote {
    author: string;
    quote: string;
    tags: string[];
    id: string;
    image: string;
    length: number;
  }

  export interface Contents {
    quotes: Quote[];
  }

  export interface QuoteResponse {
    success: string;
    contents: Contents;
  }
}
