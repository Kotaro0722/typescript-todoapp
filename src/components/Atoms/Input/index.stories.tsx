import { StoryObj, Meta } from "@storybook/react";
import Input from "./index";

export default {
  component: Input,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    onEditComplete: value => console.log("edit completed: ", value),
    defaultValue: "",
  },
};
