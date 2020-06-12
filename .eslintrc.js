module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'airbnb-typescript/base',
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  settings: {
    'import/core-modules': ['vue'],
  },
  overrides: [
    {
      files: ['./tests/e2e/**/*.{ts,js}'],
      globals: {
        fixture: false,
        test: false,
      },
    },
  ],
};
