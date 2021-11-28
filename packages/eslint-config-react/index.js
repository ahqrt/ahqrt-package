require('./patch');

module.exports = {
  overrides: [
    {
      files: ['*.jsx', '*.js'],
      extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier'],
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true,
        },
        ecmaVersion: 2020,
      },
      rules: {
        ...require('@ahqrt/eslint-rules').javascript,
        ...require('@ahqrt/eslint-rules').javascriptReact,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};