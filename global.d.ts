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

  interface ExperienceEntry {
    name: string;
    period: string;
    company: string;
    location: string;
    current?: boolean;
    description: string;
  }
}
