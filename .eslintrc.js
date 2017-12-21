module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules":{
        "require-jsdoc": 0,
        "max-len": ["error", {
            "code": 80,
            "ignoreStrings": true,
        }],
        "linebreak-style": 0
    }
};