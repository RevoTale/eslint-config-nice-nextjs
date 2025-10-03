import love from 'eslint-config-love'
import { globalIgnores } from 'eslint/config'

export default [
    globalIgnores(['**/node_modules/**', '**/dist/**', '**/build/**','./ts-next-app/**']),
  {
    ...love,
    files: [ '**/*.ts'],
  },
]