module.exports = {
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'no-param-reassign': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'es5',
      },
    ],
  },
};
