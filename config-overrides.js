/**
 * Created by 熊超超 on 2017/10/3.
 */
const { injectBabelPlugin } = require('react-app-rewired')
module.exports = function override (config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config)
  return config
}
