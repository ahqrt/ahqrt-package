require('./patch')

module.exports = {
    overrides: [
        {
            files: ['*.js'],
            extends: ['airbnb-base'],
            parserOptions: {
                ecmaFeatures: {
                    impliedStrict: true
                },
                sourceType: 'module',
                ecmaVersion: 2020
            },
            rules: require('@ahqrt/eslint-rules').javascript
        }
    ]
}
