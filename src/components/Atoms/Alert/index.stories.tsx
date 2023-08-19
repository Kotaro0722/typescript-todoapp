import { StoryObj, Meta } from "@storybook/react";
import Alert from "./index";

export default {
  component: Alert,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof Alert> = {
  args: {
    visible: true,
    errorText: "text",
  },
};
