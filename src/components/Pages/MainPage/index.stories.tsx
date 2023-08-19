import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";
import { StoryObj, Meta } from "@storybook/react";
import MainPage from "./index";

export default {
  component: MainPage,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: StoryObj<typeof MainPage> = {
  decorators: [
    Story => (
      <div>
        <AlertHandlerProvider>
          <AlertManager />
          <Story />
        </AlertHandlerProvider>
      </div>
    ),
  ],
};
