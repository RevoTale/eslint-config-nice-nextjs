# eslint-config-nice-nextjs

A modern, powerful ESLint configuration for Next.js projects that combines strict TypeScript checking with React best practices. Built on the tope `eslint-config-love`. This configuration ensures high-quality, consistent code across your Next.js application.

## Features

- **Next.js Optimized**: Includes official Next.js rules from `@next/eslint-plugin-next` for both recommended and core web vitals configurations
- **React Support**: Incorporates React and React Hooks rules to ensure proper component patterns
- **TypeScript Integration**: Full support for [TypeScript](https://www.typescriptlang.org/) with strict type checking rules
- **Performance Focus**: Structured for optimal performance with smart file patterns
- **Clean Architecture**: Encourages maintainable code organization with directory-specific rules
- **Path Optimization**: Intelligent handling of import paths and module structures
- **ESLint 9 Compatible**: Built for the latest ESLint flat config system

## Installation

```bash
# Using npm
npm install eslint-config-nice-nextjs --save-dev

# Using yarn
yarn add eslint-config-nice-nextjs --dev

# Using pnpm
pnpm add eslint-config-nice-nextjs --save-dev
```

## Required Peer Dependencies

This configuration requires the following peer dependencies:

```bash
npm install eslint@^9.0 typescript@^5.0 @next/eslint-plugin-next@^15.2.4 @typescript-eslint/utils@^8.29.0 typescript-eslint@^8.29.0 --save-dev
```

> **Note**: [TypeScript](https://www.typescriptlang.org/) (v5.0+) is a crucial dependency for this configuration to work properly.

## Usage

Create an `eslint.config.mjs` file in your project root:

```javascript
// eslint.config.mjs
import niceNextjs from 'eslint-config-nice-nextjs';

export default niceNextjs;
```

### With Prettier

To integrate with Prettier, install the necessary dependencies:

```bash
npm install eslint-plugin-prettier prettier --save-dev
```

Then, update your configuration:

```javascript
// @ts-check
import niceNextjs from 'eslint-config-nice-nextjs';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  ...niceNextjs,
  prettier
];
```

## Configuration Details

This ESLint configuration provides:

1. **Global Ignores**:
   - `.next/**/*`
   - `.pnpm-store/**/*`
   - `node_modules/**/*`

2. **Plugin Integration**:
   - React ([`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react))
   - React Hooks ([`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks))
   - Next.js ([`@next/eslint-plugin-next`](https://nextjs.org/docs/app/building-your-application/configuring/eslint))

3. **Rules Configuration**:
   - React JSX runtime rules
   - React Hooks recommended rules
   - Next.js recommended rules
   - Next.js core web vitals rules
   - TypeScript-specific enforcements from [`eslint-config-love`](https://github.com/mightyiam/eslint-config-love):
     - Strict boolean expressions
     - Explicit function return types
     - No magic numbers
     - Complexity limiting
     - Destructuring preferences

4. **File Patterns**:
   - Applies specific rules to TypeScript and JavaScript files in `src/` and `app/` directories

## Base Configuration

This package extends [`eslint-config-love`](https://github.com/mightyiam/eslint-config-love) (v119+), which provides a solid foundation of rules for TypeScript and JavaScript projects. It combines these rules with Next.js-specific configurations to create an optimal development experience.

## TypeScript Support

Ensure your project has a `tsconfig.json` file at the root level. This configuration is optimized for TypeScript projects but works with JavaScript as well.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to enhance this configuration.

## License

This project is licensed under the [MIT License](#license).
