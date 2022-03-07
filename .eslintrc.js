module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    '@antfu',
  ],
  rules: {
    'semi': ['error', 'never'],
    'no-console': 'off',
    'react/no-unknown-property': 'off',
  },
}
