
import type  { ConfigArray } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import love from 'eslint-config-love';
//Temporary disable next.js plugin until it supports eslint v9
const config: ConfigArray = defineConfig(
    // Global ignores
    {
        ignores: [
            '.next/**/*',
            '.pnpm-store/**/*',
            'node_modules/**/*'
        ],
    },
    // @ts-expect-error -- workaround until tseslint or eslint-config-love will abandon their '.config.' funtion in favor of  eslint v9 defineConfig
    {
        ...love,
       files: ['{src,app}/**/*.{js,ts,tsx}'],
    },
    {
        files: ['{src,app}/**/*.{js,ts,tsx}'],
        rules: {
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