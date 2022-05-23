const withTM = require("next-transpile-modules")(["api"]);

const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig;
