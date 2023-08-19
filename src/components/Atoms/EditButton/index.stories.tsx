import { StoryObj, Meta } from "@storybook/react";
import EditButton from "./index";

export default {
  component: EditButton,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof EditButton> = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
