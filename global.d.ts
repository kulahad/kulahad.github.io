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

declare namespace Data {
  export interface SocialLinks {
    name: string;
    link: string;
  }
  export interface EducationEntry {
    name: string;
    period: string;
    location: string;
    gpa: number;
  }
  export interface ExperienceEntry {
    name: string;
    period: string;
    company: string;
    location: string;
    current?: boolean;
    description: string;
  }

  export interface TechnologiesEntry {
    category: string;
    technologies: string[];
  }
  export interface CertificationsEntry {
    name: string;
    issuer: string;
    issueDate: string;
    description: string;
  }
}

declare module "vanta/dist/vanta.net.min";
