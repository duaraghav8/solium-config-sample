"use strict";

module.exports = {
    rules: {
        "imports-on-top": "error",
        "variable-declarations": "error",
        "linebreak-style": "error",

        "no-empty-blocks": "warning",
        "indentation": ["warning", 2],
        "whitespace": "warning",

        "security/no-throw": "error",

        // Disable deprecated rules
        "double-quotes": "off",
        "no-with": "off"
    }
};
