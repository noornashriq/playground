const esbuildPluginTsc = require("esbuild-plugin-tsc");

module.exports = (serverless) => ({
  plugins: [esbuildPluginTsc()],
});
