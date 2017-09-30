// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },
  extends: [
      // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
      'standard',
      // https://github.com/feross/eslint-config-standard-react
      'standard-react'
  ],
  // https://github.com/yannickcr/eslint-plugin-react
  plugins: [
    'react',
    'babel',
    'promise'
  ],
  // add your custom rules here
  'rules': {
    // 'space-before-function-paren': 0, //允许方法前名前面不加空格
    'jsx-quotes': 0, // 允许jsx使用双引号
    'arrow-parens': 0, // 允许箭头函数不使用括号
    'generator-star-spacing': 0, // 允许 generator 函数中*不加空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0 // 开发环境允许 debugger
  }
}
