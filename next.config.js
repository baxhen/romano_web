/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "react-material-ui-carousel",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: { domains: ["intz.com.br"] },
});
