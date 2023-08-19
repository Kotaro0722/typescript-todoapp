import { StoryObj, Meta } from "@storybook/react";
import Title from "./index";

export default {
  component: Title,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof Title> = {};
