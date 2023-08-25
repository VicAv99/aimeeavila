export interface Profile {
  headline: string;
  leftImage: SanityImage;
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
