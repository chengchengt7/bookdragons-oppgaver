import { Block } from "payload";

export const EmployeeBlock: Block = {
  slug: "employee-block",
  interfaceName: "EmployeeBlockType",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      unique: true,
    },
    {
      name: "employees",
      type: "relationship",
      relationTo: "employees",
      hasMany: true,
      required: true,
    },
  ],
};
