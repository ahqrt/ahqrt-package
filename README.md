## 项目介绍
本项目是使用lerna + yarn workSpace 搭建的monorepo的工具库。
主要想做的功能就是，集成现有的一些配置，方便业务开发。

### packages目录分析

#### create-commitlint 
该包是为了方便生成 git commit 校验， 项目中使用了该包之后，会对commit 的信息做校验，不符合规则的提交会被驳回。

提交规则和现项目中的规则一致，具体可以查看包中`template`文件夹中的`.zc-config.js`。

### create-lerna-package
该包是为了方便生成lerna package。

### create-style
该包是为了方便生成eslint 和 prettier文件，统一代码中的格式。

### eslint-config-*
eslint 各个不同类型项目的不同配置，现阶段的使用，已经不需要手动安装这些包，可以统一使用`create-style`cli工具，自行选择要生成的代码格式规范。

### generate-template
该包是为了配置生成模版的包，使用的是handlebars，需要定制生成的模版使用.tpl作为第二后缀，目的是为了不损失代码提示的情况下可以清晰知道哪些文件使用了模版语法，具体使用example可以查看`create-lerna-package`包的使用，该包使用比较简单，方便阅读。
