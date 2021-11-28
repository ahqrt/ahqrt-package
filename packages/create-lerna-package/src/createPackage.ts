import generator  from '@ahqrt/generate-template';
import tmp from 'tmp-promise';
import fs from 'fs-extra';
import chalk from "chalk"
import inquirer from "inquirer"
import ora from "ora"
import path from 'path';
import execa from 'execa';
import { getQuestions, IMeta, isDirEmpty } from "."

export const createPackage = async (name :string, loc?:string) => {
  const answer: IMeta = await inquirer.prompt(getQuestions(name))
  const spinner = ora(chalk.blackBright(`Creating ${name}...`))

  try{
    spinner.start()
    let locPath = ''
    if(loc) {
      locPath = loc
    }else if(answer.name.startsWith('@')) {
      locPath = answer.name.split('/')[1]
    }else {
      locPath = answer.name
    }
    answer.directory = locPath

    const rootDir = `${process.cwd()}/package/${locPath}`
    if(fs.existsSync(rootDir) && !(await isDirEmpty(rootDir))) {
      spinner.fail(
        chalk.red(`cannot initialize new project, because directory packages/${locPath} is not empty `)
      )
      process.exit(0)
    }

    const tmpdir = await tmp.dir({ unsafeCleanup: true })

    fs.copySync(path.join(__dirname, '../template'), tmpdir.path)
    await generator<IMeta>(answer, tmpdir.path)

    fs.copySync(tmpdir.path, rootDir)
    execa.commandSync('yarn install', {
      cwd: rootDir,
      stdout: 'inherit',
      stderr: 'inherit',
      shell: true
    })
    await tmpdir.cleanup()
    spinner.succeed(chalk.greenBright(`The ${name} has been generated at packages/${locPath} `))

  }catch(e:any) {
    spinner.fail(chalk.red(e.message))
    process.exit(0)
  }
}
