import type { Meta, StoryObj } from "@storybook/react-vite";
import AuthLayout from "../../components/templates/AuthLayout";
import LoginForm from "../../components/organisms/LoginForm";

const meta = {
  title: "Templates/AuthLayout",
  component: AuthLayout,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    logo: "MyApp",
    title: "Welcome back",
    subtitle: "Sign in to your account to continue",
  },
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    children: (
      <p style={{ fontSize: 14, color: "#868e96", textAlign: "center" }}>
        Form content goes here.
      </p>
    ),
  },
};

export const WithLoginForm: Story = {
  args: {
    children: <LoginForm />,
  },
};

export const SignUp: Story = {
  args: {
    title: "Create an account",
    subtitle: "Join thousands of teams already using MyApp",
    children: <LoginForm />,
  },
};
