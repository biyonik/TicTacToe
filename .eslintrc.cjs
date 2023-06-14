module.exports = {
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    parserOptions: {
        "ecmaVersion": 2021,
        "ecmaFeatures": {
            "jsx": true,
            'experimentalObjectRestSpread': true,
            'modules': true,
            'spread': true,
            'restParams': true,
            'blockBindings': true,
            'arrowFunctions': true,
        },
        "sourceType": "module"
    },
    settings: {react: {version: '18.2'}},
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/prop-types': 'off',
    },
}
