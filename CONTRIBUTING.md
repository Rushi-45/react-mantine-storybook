# Contributing

Thank you for your interest in contributing! Here's everything you need to get started.

## Development Setup

```bash
git clone https://github.com/Rushi-45/react-mantine-storybook.git
cd react-mantine-storybook
npm install
npm run storybook
```

## Adding a New Component

Follow the Atomic Design structure when deciding where a component belongs:

| Layer | Rule of thumb |
|---|---|
| **Atom** | Single-purpose, no dependencies on other custom components |
| **Molecule** | Combines 2–3 atoms into a functional unit |
| **Organism** | A full UI section (e.g. a form, a nav bar) |
| **Template** | A page layout shell with no real content |
| **Page** | A template wired up with real organisms |

### Steps

1. **Create the component** in the right layer under `src/components/`
2. **Create the story** in the matching folder under `src/stories/`
3. **Follow the story conventions** (see below)
4. **Run checks** before opening a PR

### Story Conventions

Every story file must follow this pattern:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import MyComponent from "../../components/atoms/MyComponent";

const meta = {
  title: "Atoms/MyComponent",       // matches the folder layer
  component: MyComponent,
  tags: ["autodocs"],               // required — enables auto-generated docs
  args: {
    onClick: fn(),                  // use fn() for all callback props
  },
  argTypes: {
    variant: {                      // document every variant/size prop
      control: "select",
      options: ["a", "b", "c"],
    },
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Minimum required stories:
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
```

Add a `play` test for any story that involves user interaction:

```tsx
import { userEvent, within, expect } from "storybook/test";

export const ClickTest: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
```

## Before Submitting a PR

```bash
# Lint
npm run lint

# Type check
npx tsc --noEmit

# Make sure Storybook builds without errors
npm run build-storybook
```

All three must pass with zero errors.

## Pull Request Guidelines

- Keep PRs focused — one component or fix per PR
- Use the PR template provided
- Link any related issues in your PR description
- Add or update stories for every component you change

## Reporting Bugs

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) and include:
- Which component and story is affected
- Steps to reproduce
- Expected vs actual behaviour

## Suggesting Components

Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md). Before opening one, check existing issues to avoid duplicates.
