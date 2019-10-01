module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:relay/recommended',
    'prettier/flowtype',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'flowtype', 'prettier', 'react', 'relay'],
  rules: {
    'no-console': 'off',
    'one-var': 'off',
    'react/prop-types': 'off',
    // Mutations aren't located in the same file as Components
    'relay/unused-fields': 'off',
    'relay/generated-flow-types': 'off'
  },
  settings: {
    react: {
      version: '16.9.0',
      flowVersion: '0.108.0'
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
}
