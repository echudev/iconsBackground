module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react/jsx-runtime'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'vscode/',
    'src/vite-env.d.ts',
    'vite.config.ts',
    'commitlint.config.js',
    'tailwind.config.cjs',
    'postcss.config.cjs'
  ],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'no-extra-boolean-cast': 'off',
    'no-var': 'error'
  }
}
