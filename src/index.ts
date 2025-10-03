import love from 'eslint-config-love';

import type  { ConfigArray } from 'typescript-eslint';
import hooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const config: ConfigArray = defineConfig(
    // Global ignores
    {
        ignores: [
            '.next/**/*',
            '.pnpm-store/**/*',
            'node_modules/**/*'
        ],
    },
    ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript','eslint-config-love'],
  }),
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"],
        plugins: {
        'react-hooks': hooksPlugin,
        },
        extends: ['react-hooks/recommended'],
    },
    {
        files: ['{src,app}/**/*.{js,ts,tsx}'],
        rules: {
            ...love.rules,
            '@typescript-eslint/strict-boolean-expressions': 'error',
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- self shoot
            '@typescript-eslint/no-magic-numbers': ['error', {ignore: [0, 1]}],
            '@typescript-eslint/explicit-function-return-type': 'error',
            complexity: 'error',
            '@typescript-eslint/prefer-destructuring': 'error',
        },
    }
);

export default config;