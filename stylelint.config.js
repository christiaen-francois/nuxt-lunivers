module.exports = {
  "processors": ["stylelint-processor-html"],
  "extends": ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  "rules": {
    'no-empty-source': null
  },
}
