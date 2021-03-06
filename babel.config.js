module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".js", ".json"],
        alias: {
          "@library": "./src/library",
          "@app": "./src/app",
          "@helpers": "./src/helpers",
        },
      },
    ],
  ],
};
