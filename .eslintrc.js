module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: ["airbnb-base", "plugin:vue/essential", "prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    plugins: ["node", "prettier", "vue"],
    rules: {
        "func-names": "off",
        "import/no-unresolved": "off",
        "no-console": "off",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-shadow": "off",
        "no-use-before-define": "error",
        "no-var": "error",
        "one-var": "error",
        "prefer-const": "error",
        semi: "error",
        "space-in-parens": "error",
    },
};
