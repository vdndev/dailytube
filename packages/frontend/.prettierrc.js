// Some settings are automatically inherited from .editorconfig

module.exports = {
  semi: true,
  quotes: "double",
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
};
