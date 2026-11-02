import { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero-block",
  interfaceName: "HeroBlockType",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      unique: true,
    },
    {
      name: "hero-img",
      type: "text",
      label: "Hero image",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
    },
    {
      name: "cta",
      type: "text",
      label: "CTA button",
      required: true,
    },
  ],
};
