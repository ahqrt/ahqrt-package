module.exports = {
    'global-window': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    indent: [
        'error',
        4,
        {
            SwitchCase: 1
        }
    ], // 四空格缩进
    quotes: [1, 'single'], // 单引号
    'no-console': 0, // 不禁用console
    'no-debugger': 1, // 禁用debugger
    'no-var': 1, // 对var警告
    semi: [1, 'never'], // 不强制使用分号
    'no-irregular-whitespace': 1, // 不规则的空白不允许
    'no-trailing-spaces': 1, // 一行结束后面有空格就发出警告
    'eol-last': 1, // 文件以单一的换行符结束
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
    'no-alert': 0, // 禁止使用alert confirm prompt
    'no-lone-blocks': 1, // 禁止不必要的嵌套块
    'no-class-assign': 1, // 禁止给类赋值
    'no-cond-assign': 1, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 1, // 禁止修改const声明的变量
    'no-delete-var': 1, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 1, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 1, // switch中的case标签不能重复
    'no-dupe-args': 1, // 函数参数不能重复
    'no-empty': 1, // 块语句中的内容不能为空
    'no-func-assign': 1, // 禁止重复的函数声明
    'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 1, // 禁止重复声明变量
    'no-spaced-func': 1, // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 1, // 在调用super()之前不能使用this或super
    'no-undef': 2, // 不能有未定义的变量
    'no-use-before-define': 0, // 未定义前不能使用
    camelcase: 1, // 强制驼峰法命名
    'jsx-quotes': [1, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'no-extra-boolean-cast': 1, // 禁止不必要的bool转换
    'no-unreachable': 1, // 不能有无法执行的代码
    'comma-dangle': ['error', 'never'], // 对象字面量项尾不能有逗号
    'no-mixed-spaces-and-tabs': 1, // 禁止混用tab和空格
    'prefer-arrow-callback': 1, // 比较喜欢箭头回调
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'arrow-spacing': 1, //= >的前/后括号
    'no-extra-semi': 1,
    'no-dupe-class-members': 1,
    'global-require': 0,
    'import/prefer-default-export': 0
}
