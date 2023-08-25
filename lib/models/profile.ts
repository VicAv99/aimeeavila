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
  socialLinks: string[];
  title: string;
}

export interface SanityImage {
  alt?: string;
  image: string;
}
