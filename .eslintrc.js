module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'jest/globals': true
    },
    extends: [
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-jest'
    ],
    rules: {
        indent: [1, 4]
    }
}
