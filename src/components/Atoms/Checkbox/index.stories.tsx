import { StoryObj, Meta } from "@storybook/react";
import Checkbox from "./index";

export default {
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
