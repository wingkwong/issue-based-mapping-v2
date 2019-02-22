'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  BOARDNAME: '"peanuts_organiser"',
  NODE_ENV: '"development"'
})
