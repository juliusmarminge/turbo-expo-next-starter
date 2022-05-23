const withTM = require("next-transpile-modules")(["@tens/api", "@tens/react"]);

module.exports = withTM({
  reactStrictMode: true,
});
