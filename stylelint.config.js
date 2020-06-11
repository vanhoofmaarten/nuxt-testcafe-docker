module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignoreAtRules: [
          'array',
          'of',
          'at-rules',
          'import',
          'include',
          'custom-media',
        ],
      },
    ],
  },
};
