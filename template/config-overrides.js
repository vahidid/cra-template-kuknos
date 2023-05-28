const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const path = require('path');

module.exports = function override(config, env) {
  // Alias
  config.resolve.alias = {
    "@components": path.resolve(__dirname, "./src/Components/"),
    "@assets": path.resolve(__dirname, "./src/Assets/"),
    "@hooks": path.resolve(__dirname, "./src/Hooks/"),
    "@interfaces": path.resolve(__dirname, "./src/Interfaces/"),
    "@models": path.resolve(__dirname, "./src/Models/"),
    "@pages": path.resolve(__dirname, "./src/Pages/"),
    "@routes": path.resolve(__dirname, "./src/Routes/"),
    "@services": path.resolve(__dirname, "./src/Services/"),
    "@utils": path.resolve(__dirname, "./src/Utils/"),
    "@theme": path.resolve(__dirname, "./src/Theme/"),
  }

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
