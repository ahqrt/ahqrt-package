import { program } from 'commander'
import { createPackage } from './createPackage'

export const init = (): void => {
    const packageJson = require('../package.json')

    program
        .version(packageJson.version)
        .description(packageJson.description)
        .argument('<name>', 'package name')
        .argument('[loc]', 'package location')
        .action(createPackage)
        .parse(process.argv)
}
