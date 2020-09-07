module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
  // parser: 'vue-eslint-parser',
  // parserOptions: {
  //   parser: 'babel-eslint',
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  // },
}
