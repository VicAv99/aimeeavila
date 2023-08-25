import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import profile from "./schemas/profile";

import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, profile],
};
