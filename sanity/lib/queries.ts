import { groq } from "next-sanity";

export const profileQuery = groq`*[_type == "profile"][0]{
  _id,
  title,
  headline,
  primaryImage {alt, "image": asset->url},
  leftImage {alt, "image": asset->url},
  rightImage {alt, "image": asset->url},
  shortBio,
  email,
  location,
  fullBio,
  "resumeUrl": resumeUrl.asset->url,
  socialLinks,
  skills
}`;

export const socialLinksQuery = groq`*[_type == "profile"][0].socialLinks`;
