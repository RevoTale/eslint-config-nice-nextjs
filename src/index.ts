import love from 'eslint-config-love';

import tseslint,   { type ConfigArray } from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';


const config: ConfigArray = tseslint.config(
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
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- self shoot
            '@typescript-eslint/no-magic-numbers': ['error', {ignore: [0, 1]}],
            '@typescript-eslint/explicit-function-return-type': 'error',
            complexity: 'error',
            '@typescript-eslint/prefer-destructuring': 'error',
        },
    }
);

export default config;