import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, userEvent, within, expect } from "storybook/test";
import SearchBar from "../../components/molecules/SearchBar";

const meta = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  args: {
    placeholder: "Search...",
    onSearch: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: { defaultValue: "react components" },
};

export const CustomPlaceholder: Story = {
  args: { placeholder: "Search users..." },
};

export const SearchTest: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "Mantine");
    const button = canvas.getByRole("button", { name: /search/i });
    await userEvent.click(button);
    await expect(args.onSearch).toHaveBeenCalledWith("Mantine");
  },
};
