 

import { defineConfig } from 'eslint/config';
import love from 'eslint-config-love';
import nextPlugin from '@next/eslint-plugin-next';
import type { Config } from '@eslint/config-helpers';
const config: Config[] = defineConfig(
    // Global ignores
    {
        ignores: [
            '.next/**/*',
            '.pnpm-store/**/*',
            'node_modules/**/*'
        ],
    },
    // @ts-expect-error -- misused spread, but we need to keep it until the plugin is updated
    nextPlugin.flatConfig.coreWebVitals,
    nextPlugin.flatConfig.recommended,
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