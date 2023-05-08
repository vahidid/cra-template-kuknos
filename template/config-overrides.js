const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(
    new SentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'kuknos',
      project: process.env.REACT_APP_SLUG,
      include: 'build',
      configFile: 'sentry.properties',
      release: process.env.SENTRY_RELEASE,
    })
  );

  return config;
};
