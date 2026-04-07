import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, userEvent, within, expect } from "storybook/test";
import LoginForm from "../../components/organisms/LoginForm";

const meta = {
  title: "Organisms/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
  argTypes: {
    isLoading: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 380, margin: "0 auto", padding: 24, background: "white", borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: { isLoading: true },
};

export const WithError: Story = {
  args: { error: "Invalid email or password. Please try again." },
};

export const FillAndSubmit: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(canvas.getByLabelText(/password/i), "secret123");
    await userEvent.click(canvas.getByRole("button", { name: /sign in/i }));
    await expect(args.onSubmit).toHaveBeenCalledWith({
      email: "jane@example.com",
      password: "secret123",
      remember: false,
    });
  },
};
