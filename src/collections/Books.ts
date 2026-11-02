import { CollectionConfig, slugField } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Book title",
      required: true,
    },
    slugField(),
    {
      name: "thumbnail",
      type: "text",
      label: "Book cover URL",
      required: true,
    },
    {
      name: "author",
      type: "text",
      label: "Author",
      required: true,
    },
    {
      name: "price",
      type: "number",
      label: "Price",
      required: true,
    },
    {
      name: "tag",
      label: "Tag",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      required: true,
    },
  ],
};
