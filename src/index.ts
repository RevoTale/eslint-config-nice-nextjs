 

import { defineConfig, type Config } from 'eslint/config';
import love from 'eslint-config-love';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals';
const config: Config[] = defineConfig(
    // Global ignores
    {
        ignores: [
            '.next/**/*',
            '.pnpm-store/**/*',
            'node_modules/**/*'
        ],
    },
     {
        settings:{
            react:{
                version:'detect'
            }
        },
    },
    // @ts-expect-error -- misused spread, but we need to keep it until the plugin is updated
        {
        
        ...love,
       files: ['**/*.{js,ts,tsx}'],
    },
   {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
 reactPlugin.configs.flat['jsx-runtime'], 
  
    // @ts-expect-error -- misused spread, but we need to keep it until the plugin is updated
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- misused spread, but we need to keep it until the plugin is updated
    reactHooks.configs.flat.recommended,
    nextPlugin.configs['core-web-vitals'],
    nextPlugin.configs.recommended,
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