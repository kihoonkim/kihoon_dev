---
name: shadcn-ui
description: Guidelines and instructions for using shadcn-ui components in Next.js projects.
---

# shadcn-ui Skill

This project uses `shadcn-ui` for UI components.

## Core Principles

1. **Component Installation**: `shadcn-ui` components are not installed as regular npm packages. Instead, their source code is downloaded directly into the project's `components/ui` directory.
2. **Adding Components**: ALWAYS use the CLI to add new components:
   ```bash
   npx shadcn@latest add <component-name>
   ```
   For example: `npx shadcn@latest add button`

3. **Styling Structure**: The UI components use Tailwind CSS classes and specific Tailwind configurations (like `colors.background`, `radius`, etc.) defined in `globals.css` and `tailwind.config.ts`.
4. **Customization**: Since the component source code is in the repository, you can and should customize it directly if the default props or styling do not meet the design requirements.
5. **Radix Primitives**: Most complex components are built on top of Radix UI primitives. Be careful when modifying the underlying state logic of these primitives.
