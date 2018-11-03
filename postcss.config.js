var tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss("./src/config/tailwind-config"),
    require("autoprefixer")
  ]
};
