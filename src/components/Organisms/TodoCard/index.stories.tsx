import { StoryObj, Meta } from "@storybook/react";
import TodoCard from "./index";

export default {
  component: TodoCard,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof TodoCard> = {};
