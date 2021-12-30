require('./patch')

module.exports = {
    extends: ['@ahqrt/eslint-config-react'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'airbnb',
                'airbnb-typescript',
                'airbnb/hooks',
                'plugin:@typescript-eslint/recommended'
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    impliedStrict: true,
                    jsx: true
                },
                ecmaVersion: 2020
            },
            rules: {
                ...require('@ahqrt/eslint-rules').javascript,
                ...require('@ahqrt/eslint-rules').typescript,
                ...require('@ahqrt/eslint-rules').javascriptReact
            },
            settings: {
                react: {
                    version: 'detect'
                },
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx']
                },
                'import/resolver': {
                    // use <root>/tsconfig.json
                    typescript: {
                        // always try to resolve types under `<roo/>@types` directory even it
                        // doesn't contain any source code, like `@types/unist`
                        alwaysTryTypes: true
                    }
                }
            }
        }
    ]
}
