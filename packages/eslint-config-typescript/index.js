require('./patch')

module.exports = {
    extends: ['@ahqrt/eslint-config-base'],
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                'airbnb-base',
                'airbnb-typescript/base',
                'plugin:@typescript-eslint/recommended'
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
                ecmaFeatures: {
                    impliedStrict: true
                },
                ecmaVersion: 2020
            },
            rules: {
                ...require('@ahqrt/eslint-rules').javascript,
                ...require('@ahqrt/eslint-rules').typescript
            },
            settings: {
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts']
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
