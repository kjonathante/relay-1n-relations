module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:relay/recommended',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'prettier', 'react', 'relay'],
  rules: {
    'no-console': 'off',
    'one-var': 'off',
    'react/prop-types': 'off',
    // Mutations aren't located in the same file as Components
    'relay/unused-fields': 'off'
  },
  settings: {
    react: {
      version: '16.9.0'
    }
  }
}
