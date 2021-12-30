import generator from '@ahqrt/generate-template'
import tmp from 'tmp-promise'
import fs from 'fs-extra'
import chalk from 'chalk'
import inquirer from 'inquirer'
import ora from 'ora'
import path from 'path'
import execa from 'execa'

export const isDirEmpty = (dirname: string): Promise<any> =>
    // eslint-disable-next-line implicit-arrow-linebreak
    fs.promises.readdir(dirname).then((files) => files.length === 0)

/**
 * package.json 配置项
 */
export interface IMeta {
    name: string
    version: string
    description: string
    author: string
    email: string
    url: string
    directory: string
}

/**
 * inquirer
 */
export const getQuestions = (name: string) => {
    const { stdout: author } = execa.commandSync('git config user.name')
    const { stdout: email } = execa.commandSync('git config user.email')

    return [
        {
            type: 'input',
            message: 'package name',
            name: 'name',
            default: name
        },
        {
            type: 'input',
            message: 'version',
            name: 'version',
            default: '1.0.0'
        },
        {
            type: 'input',
            message: 'description',
            name: 'description'
        },
        {
            type: 'input',
            message: 'author',
            name: 'author',
            validate: (input) => {
                if (/[/\\]/im.test(input)) {
                    console.log(` ${chalk.red('Name cannot contain special characters')}`)
                    return false
                }
                return true
            },
            default: author
        },
        {
            type: 'input',
            message: 'email',
            name: 'email',
            default: email
        },
        {
            type: 'input',
            message: 'url',
            name: 'url',
            default: 'https://github.com/ahqrt'
        }
    ]
}

export const createPackage = async (name: string, loc?: string) => {
    const answer: IMeta = await inquirer.prompt(getQuestions(name))
    const spinner = ora(chalk.blackBright(`Creating ${name}...`))

    try {
        spinner.start()
        let locPath = ''
        if (loc) {
            locPath = loc
        }
        else if (answer.name.startsWith('@')) {
            locPath = answer.name.split('/')[1]
        }
        else {
            locPath = answer.name
        }
        answer.directory = locPath

        const rootDir = `${process.cwd()}/packages/${locPath}`
        if (fs.existsSync(rootDir) && !(await isDirEmpty(rootDir))) {
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
    }
    catch (e: any) {
        spinner.fail(chalk.red(e.message))
        process.exit(0)
    }
}
