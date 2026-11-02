import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "copyightName",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "text",
      required: true,
    }
  ],
};