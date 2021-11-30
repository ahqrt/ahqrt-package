/**
 * 根据inquirer提示，自动生成eslint 和 prettier的配置
 */
import fs from 'fs-extra'
import path from 'path'
import execa from 'execa'
import chalk from 'chalk'
import inquirer from 'inquirer'

export const init = async () => {
  const templateDir = path.resolve(__dirname, '../template')
  const projectDir = `${process.cwd()}`

  if(
    fs.existsSync(`${projectDir}/.eslintrc.js`) ||
    fs.existsSync(`${projectDir}/.eslintrc.json`)
  ) {
    console.log(chalk.red('the project directory already exists eslint config file, please remove it first'));
    process.exit(0)
  }
  fs.copySync(templateDir, projectDir)
  console.log(chalk.greenBright('generated .editorconfig && .prettierrc.js file'))

  if(!fs.existsSync(`${projectDir}/package.json`)) {
    console.log(chalk.yellow('your project directory cannot contain a package.json file, now we generate it!'));
    execa.commandSync('npm init -y', {
      shell: true,
      stdout: 'inherit',
      stderr: 'inherit'
    })
  }
    /**
   * 处理package.json
   */
    const origin = JSON.parse(fs.readFileSync(`${projectDir}/package.json`, 'utf-8'))
    const packageJson = {
      ...origin,
      gitHooks: origin.gitHooks ?
      {
        ...origin.gitHooks,
        'pre-commit': 'lint-staged',
      }:
      {
        'pre-commit': 'lint-staged',
      },
      'lint-staged': origin['lint-staged'] ?
      {
        ...origin['lint-staged'],
        '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
        '**/*.{md,json}': ['prettier --write'],
      }:
      {
        '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
        '**/*.{md,json}': ['prettier --write'],
      }
    }

    fs.writeFileSync(`${projectDir}/package.json`, JSON.stringify(packageJson))
    console.log(chalk.greenBright('package.json written'));

    /**
     * 生成eslintrc.js
     */
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'eslint',
        message: 'Pick a eslint type',
        choices: ['base', 'react', 'react-native', 'typescript', 'react-typescript'],
      },
      {
        type: 'list',
        name: 'installBy',
        message: 'InstallBy yarn or npm',
        choices: [
          {key: 1, name: 'yarn', value: 'yarn'},
          {key: 2, name: 'npm', value: 'npm'},
        ],
      }
  ])

    const {eslint} = answer
    const eslintConfig = `module.exports = {
  root: true,
  extends: ['@ahqrt/eslint-config-${eslint}'],
}
`
    fs.writeFileSync(`${projectDir}/.eslintrc.js`, eslintConfig)

    const {installBy} = answer
    if(installBy === 'yarn') {
      execa.commandSync(
        `yarn add commitizen -D -W eslint prettier @ahqrt/eslint-config-${eslint} @ahqrt/prettier-config lint-staged yorkie`,
        {
          shell: true,
          stdout: 'inherit',
          stderr: 'inherit'
        }
      )

      if(eslint.indexOf('typescript') !== -1) {
        execa.commandSync(`yarn add commitizen -D -W typescript`, {
          shell: true,
          stdout: 'inherit',
          stderr: 'inherit',
        })
      }
    }
    if(installBy === 'npm') {
      execa.commandSync(
        `npm i commitizen -D eslint prettier @ahqrt/eslint-config-${eslint} @ahqrt/prettier-config lint-staged yorkie`,
        {
          shell: true,
          stdout: 'inherit',
          stderr: 'inherit'
        }
      )

      if(eslint.indexOf('typescript') !== -1) {
        execa.commandSync(`npm i commitizen -D typescript`, {
          shell: true,
          stdout: 'inherit',
          stderr: 'inherit',
        })
      }
    }



}
