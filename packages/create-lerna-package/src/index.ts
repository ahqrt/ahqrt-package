import { program } from 'commander'
import chalk from 'chalk'
import fs from 'fs-extra'
import execa from 'execa'
import { createPackage } from './createPackage'

export const isDirEmpty = (dirname: string): Promise<any> => {
  return fs.promises.readdir(dirname).then(files => {
    return files.length === 0;
  });
};

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
  const {stdout: author} = execa.commandSync('git config user.name')
  const {stdout: email} = execa.commandSync('git config user.email')

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
      name: 'description',
    },
    {
      type: 'input',
      message: 'author',
      name: 'author',
      validate: input => {
        if (/[/\\]/im.test(input)) {
          console.log(` ${chalk.red('Name cannot contain special characters')}`);
          return false;
        }
        return true;
      },
      default: author,
    },
    {
      type: 'input',
      message: 'email',
      name: 'email',
      default: email,
    },
    {
      type: 'input',
      message: 'url',
      name: 'url',
      default: 'https://github.com/ahqrt',
    },
  ]
}


export const init = ():void => {
  const packageJson = require('../package.json')

  program
    .version(packageJson.version)
    .description(packageJson.description)
    .argument('<name>', 'package name')
    .argument('[loc]', 'package location')
    .action(createPackage)
    .parse(process.argv)
}
