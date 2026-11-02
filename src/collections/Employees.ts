import { CollectionConfig, slugField } from "payload";

export const Exployees: CollectionConfig = {
  slug: "employees",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Name",
      required: true,
    },
    slugField(),
    {
      name: "profile",
      type: "text",
      label: "Profile Picture",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
      label: "Bio",
      required: true,
    },
  ],
};
