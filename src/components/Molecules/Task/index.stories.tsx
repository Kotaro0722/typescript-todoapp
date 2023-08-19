import { StoryObj, Meta } from "@storybook/react";
import Task from "./index";

export default {
  component: Task,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof Task> = {
  args: {
    onTaskNameChange: value => console.log("taskname changed: ", value),
    onTaskComplete: () => console.log("task completed"),
    taskName: "taskname",
    defaultIsEditing: true,
  },
};
