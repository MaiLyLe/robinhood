const path = require('path')

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        localePath: path.resolve('./public/locales'),
    },
    defaultNS: 'common',
    defaultLocale: 'en',
    fallbackLng: 'en',
}
