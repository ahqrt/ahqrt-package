module.exports = {
    'no-const-assign': 2,
    '@typescript-eslint/semi': [1, 'never'],
    '@typescript-eslint/no-use-before-define': [
        2,
        {
            functions: true,
            classes: true,
            variables: false
        }
    ],
    '@typescript-eslint/explicit-member-accessibility': [2, { accessibility: 'no-public' }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': [1, { allow: ['arrowFunctions'] }],
    '@typescript-eslint/explicit-function-return-type': [
        0,
        {
            allowExpressions: true,
            allowTypedFunctionExpressions: true
        }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': [
        'error',
        4,
        {
            SwitchCase: 1
        }
    ], // 四空格缩进
    '@typescript-eslint/comma-dangle': ['error', 'never'], // 对象字面量项尾不能有逗号
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }]
}
