import love from 'eslint-config-love';

import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import type { TSESLint } from '@typescript-eslint/utils';

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
    // Global ignores
    {
        ignores: [
            '.next/**/*',
            '.pnpm-store/**/*',
            'node_modules/**/*'
        ],
    },
    {
        plugins: {
            react: reactPlugin,
            'react-hooks': hooksPlugin,
            '@next/next': nextPlugin,
        },
        rules: {
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...hooksPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },
    {
        ...love,
        files: ['{src,app}/**/*.{js,ts,tsx}'],
        rules: {
            ...love.rules,
            '@typescript-eslint/strict-boolean-expressions': 'error',
            '@typescript-eslint/no-magic-numbers': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
            complexity: 'error',
            '@typescript-eslint/prefer-destructuring': 'error',
        },
    }
);

export default config;