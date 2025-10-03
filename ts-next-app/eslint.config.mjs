import niceNextjs from '../dist/index.js';

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...niceNextjs
];

export default eslintConfig;
