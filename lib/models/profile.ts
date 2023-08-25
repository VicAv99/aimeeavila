export interface Profile {
  email: string;
  fullBio: string;
  headline: string;
  leftImage: SanityImage;
  location: string;
  primaryImage: SanityImage;
  resumeUrl: string;
  rightImage: SanityImage;
  shortBio: string;
  skills: string[];
  socialLinks: StringObject[];
  title: string;
}

export interface SanityImage {
  alt?: string;
  image: string;
}

export interface StringObject {
  [key: string]: string;
}
