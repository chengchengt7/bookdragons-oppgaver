import { CollectionConfig, slugField } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tag",
      required: true,
    },
    slugField(),
  ],
};