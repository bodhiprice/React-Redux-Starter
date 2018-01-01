module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'prettier',
    'prettier/react',
    'prettier/react'
  ],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // Turn the rule below on if you want to use prop types. Not assumed in this starter.
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0
  }
};
