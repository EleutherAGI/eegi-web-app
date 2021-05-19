const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        isDevelopment && require.resolve("react-refresh/babel")
    ].filter(Boolean)
};
