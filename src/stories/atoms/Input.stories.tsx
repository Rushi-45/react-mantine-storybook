import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "storybook/test";
import Input from "../../components/atoms/Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Type something...",
    inputSize: "medium",
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "unstyled"],
    },
    inputSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: { error: true, placeholder: "Invalid value" },
};

export const Filled: Story = {
  args: { variant: "filled", placeholder: "Filled style" },
};

export const Small: Story = {
  args: { inputSize: "small" },
};

export const Large: Story = {
  args: { inputSize: "large" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Disabled input" },
};

export const TypeTest: Story = {
  args: { placeholder: "Type here..." },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "Hello Storybook");
    await expect(input).toHaveValue("Hello Storybook");
  },
};
