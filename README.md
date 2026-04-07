# react-mantine-storybook

A production-ready React component library built with **Mantine** and **Tailwind CSS**, organized following **Atomic Design** principles and fully documented with **Storybook**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-react--mantine--storybook.netlify.app-brightgreen?logo=netlify)](https://react-mantine-storybook.netlify.app)
[![CI](https://github.com/Rushi-45/react-mantine-storybook/actions/workflows/ci.yml/badge.svg)](https://github.com/Rushi-45/react-mantine-storybook/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Storybook](https://img.shields.io/badge/Storybook-10.x-ff4785?logo=storybook&logoColor=white)](https://storybook.js.org)
[![Mantine](https://img.shields.io/badge/Mantine-9.x-339af0?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyeiIvPjwvc3ZnPg==)](https://mantine.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

🔗 **[View Live Storybook →](https://react-mantine-storybook.netlify.app)**

---

## Overview

This project provides a set of reusable UI components that follow the [Atomic Design methodology](https://bradfrost.com/blog/post/atomic-web-design/) — from simple atoms like buttons and inputs, all the way up to full page compositions. Every component is:

- **Documented** in Storybook with live controls and auto-generated docs
- **Tested** with Storybook play tests (user interactions via `storybook/test`)
- **Typed** end-to-end with TypeScript
- **Accessible** with `@storybook/addon-a11y` checks on every story
- **Styled** using Mantine's component system with Tailwind CSS utilities

---

## Component Library

### Atoms
> The smallest building blocks. Each does one thing well.

| Component | Description |
|-----------|-------------|
| `Button` | Primary action element — filled, outline, ghost, subtle variants |
| `Input` | Base text input with error/filled/unstyled styles |
| `Label` | Form label with optional required indicator |
| `Badge` | Status pill — success, warning, error, info, default |
| `Avatar` | User avatar with image or auto-generated initials |
| `Spinner` | Animated loading indicator |
| `Checkbox` | Accessible checkbox with label |
| `Toggle` | On/off switch (Mantine `Switch`) |

### Molecules
> Atoms combined into functional UI units.

| Component | Description |
|-----------|-------------|
| `InputField` | Label + input + helper/error text in one unit |
| `SearchBar` | Text input + search button with keyboard support |
| `Card` | Content container — default, bordered, elevated |
| `Alert` | Contextual feedback — info, success, warning, error |

### Organisms
> Complex sections built from molecules and atoms.

| Component | Description |
|-----------|-------------|
| `Navbar` | Responsive navigation bar with logo, links, and CTA |
| `LoginForm` | Full sign-in form with validation state and loading |
| `HeroSection` | Gradient hero with headline, subheadline, and dual CTAs |

### Templates
> Page-level layout shells.

| Component | Description |
|-----------|-------------|
| `AuthLayout` | Centered card layout for authentication screens |
| `DashboardLayout` | Sidebar + main content layout using Mantine `AppShell` |

### Pages
> Fully assembled pages wiring templates and organisms together.

| Component | Description |
|-----------|-------------|
| `LoginPage` | `AuthLayout` + `LoginForm` |
| `DashboardPage` | `DashboardLayout` + stat cards + activity feed |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19.x | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type safety |
| [Mantine](https://mantine.dev) | 9.x | Component system & theming |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| [Storybook](https://storybook.js.org) | 10.x | Component documentation & testing |
| [Vite](https://vite.dev) | 7.x | Build tool |
| [Vitest](https://vitest.dev) | 4.x | Unit & interaction testing |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Rushi-45/react-mantine-storybook.git
cd react-mantine-storybook

# Install dependencies
npm install
```

### Run Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to explore all components interactively.

### Run the Dev App

```bash
npm run dev
```

### Build

```bash
# Build the app
npm run build

# Build Storybook static site
npm run build-storybook
```

---

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Button, Input, Label, Badge, Avatar, Spinner, Checkbox, Toggle
│   ├── molecules/      # InputField, SearchBar, Card, Alert
│   ├── organisms/      # Navbar, LoginForm, HeroSection
│   ├── templates/      # AuthLayout, DashboardLayout
│   └── pages/          # LoginPage, DashboardPage
│
├── stories/
│   ├── atoms/          # Stories for each atom
│   ├── molecules/      # Stories for each molecule
│   ├── organisms/      # Stories for each organism
│   ├── templates/      # Stories for each template
│   └── pages/          # Stories for each page
│
└── index.css           # Global styles (Tailwind + Mantine)

.storybook/
├── main.ts             # Storybook config (addons, framework)
└── preview.tsx         # Global decorators (MantineProvider) & parameters
```

---

## Using a Component

Components can be copied directly into your own project. Each component is self-contained and imports only from `@mantine/core` and sibling components.

**Example — Button:**

```tsx
import Button from './components/Button';

<Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
  Click me
</Button>
```

**Example — LoginForm:**

```tsx
import LoginForm from './components/organisms/LoginForm';

<LoginForm
  onSubmit={(data) => console.log(data)}
  isLoading={false}
  error="Invalid credentials"
/>
```

**Example — DashboardLayout:**

```tsx
import DashboardLayout from './components/templates/DashboardLayout';

<DashboardLayout logo="MyApp" username="Jane Doe">
  <p>Your page content here</p>
</DashboardLayout>
```

---

## Storybook Features

Each story includes:

- **Controls** — live prop editing in the Storybook UI
- **Auto-docs** — auto-generated API documentation from TypeScript types (`tags: ["autodocs"]`)
- **Play tests** — automated interaction tests using `storybook/test`
- **A11y checks** — accessibility violations surfaced per story

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

```bash
# Run linting
npm run lint

# Run type check
npx tsc --noEmit
```

---

## License

MIT © [Rushi-45](LICENSE)
