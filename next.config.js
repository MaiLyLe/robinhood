// next.config.js
const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const path = require('path')
const { i18n } = require('./next-i18next.config')

module.exports = withPlugins(
    [withSvgr],
    // your other plugins here
    {
        i18n,
    },
)
