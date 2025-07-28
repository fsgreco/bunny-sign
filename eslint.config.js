import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-useless-escape': 'off',
      'prefer-const': 'off',
    },
  },
  {
    ignores: ['**/node_modules', '**/dist', '**/public', '.github']
  },
  eslintConfigPrettier,
]