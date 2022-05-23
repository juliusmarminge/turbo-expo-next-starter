const withTM = require("next-transpile-modules")(["@tens/api"]);

module.exports = withTM({
  reactStrictMode: true,
});
