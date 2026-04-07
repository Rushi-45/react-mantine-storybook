import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import DashboardLayout from "../../components/templates/DashboardLayout";

const meta = {
  title: "Templates/DashboardLayout",
  component: DashboardLayout,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    logo: "MyApp",
    username: "Jane Doe",
    children: (
      <div style={{ background: "white", borderRadius: 12, padding: 24, border: "1px solid #e9ecef" }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Main Content</h2>
        <p style={{ marginTop: 8, fontSize: 14, color: "#868e96" }}>
          Page content renders here inside the main area.
        </p>
      </div>
    ),
  },
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomSidebar: Story = {
  args: {
    sidebarItems: [
      { label: "Overview", icon: "📊", active: true, onClick: fn() },
      { label: "Reports", icon: "📄", onClick: fn() },
      { label: "Team", icon: "👥", onClick: fn() },
      { label: "Billing", icon: "💳", onClick: fn() },
      { label: "Settings", icon: "⚙", onClick: fn() },
    ],
  },
};
