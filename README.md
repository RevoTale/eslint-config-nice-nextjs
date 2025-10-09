# eslint-config-nice-nextjs

An ESLint setup for Next.js apps. It uses the ESLint flat config style (ESLint 9+) and pulls in React, React Hooks, Next.js, and TypeScript rules so you get useful checks out of the box.

## Features

- Ready for `eslint.config.mjs`
- Includes `@next/eslint-plugin-next` (recommended + core web vitals)
- Adds `eslint-plugin-react` and `eslint-plugin-react-hooks`
- Extends `eslint-config-love` for stronger TypeScript rules
- Sets common browser and Node globals
- Applies extra strict rules to code in `app/` and `src/`

## Install

```bash
# pnpm
pnpm add -D eslint-config-nice-nextjs

# npm
npm install --save-dev eslint-config-nice-nextjs

# yarn
yarn add --dev eslint-config-nice-nextjs
```

### Peer packages

Your project should already depend on:

- `eslint@^9`
- `eslint-config-next@^15.5.4`
- `@next/eslint-plugin-next@^15.2.4`
- `eslint-plugin-react@^7.37.5`
- `eslint-plugin-react-hooks@^7`
- `typescript` (optional but recommended)

Install any you are missing:

```bash
pnpm add -D eslint@^9 eslint-config-next@^15.5.4 @next/eslint-plugin-next@^15.2.4 eslint-plugin-react@^7.37.5 eslint-plugin-react-hooks@^7 typescript
```

## Use it

Create `eslint.config.mjs` in your project (or update the existing file):

```javascript
import niceNextjs from 'eslint-config-nice-nextjs';

export default niceNextjs;
```

To tweak ignores or rules, spread the config and add your own blocks:

```javascript
import niceNextjs from 'eslint-config-nice-nextjs';

export default [
   { ignores: ['.turbo/**', 'cypress/**'] },
   ...niceNextjs,
   {
      files: ['tests/**/*.{ts,tsx}'],
      rules: { 'no-console': 'off' },
   },
];
```

### With Prettier

```bash
pnpm add -D prettier eslint-plugin-prettier
```

```javascript
import niceNextjs from 'eslint-config-nice-nextjs';
import prettier from 'eslint-plugin-prettier/recommended';

export default [...niceNextjs, prettier];
```

## What you get

- Ignores for `.next/**`, `.pnpm-store/**`, and `node_modules/**`
- React flat presets, including the JSX runtime rules
- React Hooks recommended rules
- Next.js recommended + core web vitals rules
- TypeScript-focused rules from `eslint-config-love`
- Shared browser+Node globals
- Extra strict rules for files inside `app/` and `src/`

See `src/index.ts` if you want the full detail.

## Example app

The repo includes `ts-next-app/`, which uses the built config from `dist/`:

```bash
cd ts-next-app
pnpm lint
```

Some files in that app break the rules on purpose so you can see the errors. Fix them or ignore them if you want a clean run. This app used for the CI testsbefore releasing the new version.

## Contribute

Open an issue or PR if you spot something. Run lint and build before sending changes. Update this README and add a Changeset when you change the published rules.

## License

[MIT](LICENSE)
