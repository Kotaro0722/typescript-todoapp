import { StoryObj, Meta } from "@storybook/react";
import AddTaskButton from "./index";

export default {
  component: AddTaskButton,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof AddTaskButton> = {};
