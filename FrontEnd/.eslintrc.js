module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
