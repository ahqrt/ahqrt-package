module.exports = {
    'jsx-a11y/accessible-emoji': 0,
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
        2,
        {
            extensions: ['.jsx', '.tsx']
        }
    ],
    'react/prefer-stateless-function': 0,
    'react/jsx-indent': [
        'error',
        4
    ], // 四空格缩进
    'react/jsx-indent-props': [
        'error',
        4
    ],
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'react/no-unescaped-entities': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/function-component-definition': [0],
    'react/display-name': 1, // 防止在React组件定义中丢失displayName
    'react/forbid-prop-types': [1, { forbid: ['any'] }], // 禁止某些propTypes
    'react/jsx-boolean-value': 1, // 在JSX中强制布尔属性符号
    'react/jsx-closing-bracket-location': 1, // 在JSX中验证右括号位置
    'react/jsx-curly-spacing': [1, { when: 'never', children: true }], // 在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-key': 1, // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-max-props-per-line': [1, { maximum: 3 }], // 限制JSX中单行上的props的最大数量
    'react/jsx-no-bind': 1, // JSX中不允许使用箭头函数和bind
    'react/jsx-no-duplicate-props': 1, // 防止在JSX中重复的props
    'react/jsx-no-literals': 0, // 防止使用未包装的JSX字符串
    'react/jsx-no-undef': 2, // 在JSX中禁止未声明的变量
    'react/jsx-pascal-case': 0, // 为用户定义的JSX组件强制使用PascalCase
    'react/jsx-sort-props': 1, // 强化props按字母排序
    'react/jsx-uses-react': 1, // 防止反应被错误地标记为未使用
    'react/jsx-uses-vars': 1, // 防止在JSX中使用的变量被错误地标记为未使用
    'react/no-danger': 1, // 防止使用危险的JSX属性
    'react/no-did-mount-set-state': 1, // 防止在componentDidMount中使用setState
    'react/no-did-update-set-state': 1, // 防止在componentDidUpdate中使用setState
    'react/no-direct-mutation-state': 1, // 防止this.state的直接变异
    'react/no-multi-comp': 1, // 防止每个文件有多个组件定义
    'react/no-set-state': 0, // 防止使用setState
    'react/no-unknown-property': 1, // 防止使用未知的DOM属性
    'react/prefer-es6-class': 1, // 为React组件强制执行ES5或ES6类
    'react/react-in-jsx-scope': 1, // 使用JSX时防止丢失React
    'react/self-closing-comp': 1, // 防止没有children的组件的额外结束标签
    'react/sort-comp': 2, // 强制组件方法顺序
    'react/no-string-refs': 1,
    'no-extra-boolean-cast': 1, // 禁止不必要的bool转换
    'react/no-array-index-key': 1, // 防止在数组中遍历中使用数组key做索引
    'react/no-deprecated': 1, // 不使用弃用的方法
    'react/jsx-equals-spacing': 1 // 在JSX属性中强制或禁止等号周围的空格
}
