module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      features: {
        "focus-within-pseudo-class": false,
      },
    }),
  ],
};
