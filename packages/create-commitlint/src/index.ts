import fs from 'fs-extra'
import path from 'path'
import execa from 'execa'
import chalk from 'chalk'
export const init = () => {
  const templateDir = path.resolve(__dirname, '../template')
  const projectDir = `${process.cwd()}`

  fs.copySync(templateDir, projectDir)
  console.log(chalk.green('拷贝配置成功'))
  const origin = JSON.parse(fs.readFileSync(`${projectDir}/package.json`, 'utf-8'))

  const config = {
    ...origin,
    scripts: {
      ...origin.scripts,
      commit: 'git cz',
    },
    config: origin.config ?
    {
      ...origin.config,
      commitizen: {
        path: 'cz-customizable'
      }
    }: {
      commitizen: {
        path: 'cz-customizable'
      }
    },
    gitHooks: origin.gitHooks ?
    {
      ...origin.gitHooks,
      'commit-msg': 'commitlint -e -V'
    }:
    {
      'commit-msg': 'commitlint -e -V'
    }
  }

  fs.writeFileSync(`${projectDir}/package.json`, JSON.stringify(config));

  console.log(chalk.green('添加成功， 接下来自动安装依赖'));

  execa.commandSync(
    'yarn add commitizen cz-customizable @commitlint/cli commitlint-config-cz yorkie -D -W',
    {
      shell: true,
      stdout: 'inherit',
      stderr: 'inherit'
    }
  )
}
