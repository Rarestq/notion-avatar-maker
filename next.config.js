const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA(
  {
    i18n: {
      locales: ['en', 'zh', `tw`, 'ko', `ja`, `de`, `es`, `fr`, `nl`, `pt`, `ar`],
      defaultLocale: 'en',
    },
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: 'raw-loader',
      });
      return config;
    },
  }
);
