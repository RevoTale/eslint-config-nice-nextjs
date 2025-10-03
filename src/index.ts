/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-misused-spread -- workaround until tseslint or eslint-config-love will abandon their '.config.' funtion in favor of  eslint v9 defineConfig */

import type  { ConfigArray } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import love from 'eslint-config-love';
import nextPlugin from '@next/eslint-plugin-next';
import type { Linter } from 'eslint';
const config: ConfigArray = defineConfig(
    // Global ignores
    {
        ignores: [
            '.next/**/*',
            '.pnpm-store/**/*',
            'node_modules/**/*'
        ],
    },
   nextPlugin.flatConfig.coreWebVitals as Linter.Config,
     nextPlugin.flatConfig.recommended as Linter.Config,

    // @ts-expect-error -- misused spread, but we need to keep it until the plugin is updated
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