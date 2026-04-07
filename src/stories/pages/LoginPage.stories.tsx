import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import LoginPage from "../../components/pages/LoginPage";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    onSubmit: fn(),
  },
  argTypes: {
    isLoading: { control: "boolean" },
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: { isLoading: true },
};

export const WithError: Story = {
  args: {
    error: "Invalid credentials. Please check your email and password.",
  },
};
