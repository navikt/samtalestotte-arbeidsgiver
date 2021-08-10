// @ts-check
/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const isNavFrontend = packageName => packageName.startsWith("@navikt");

const packageJson = require('./package.json');
const navFrontendModuler = Object
    .keys(packageJson.dependencies)
    .filter(isNavFrontend)

const nextTranspileModules = require('next-transpile-modules');
const withTranspileModules = nextTranspileModules(navFrontendModuler);
const withLinaria = require('next-linaria');

module.exports = withTranspileModules(
    withLinaria(
    {
        basePath: '/samtalestotte',
        i18n: {
            locales: ['no'],
            defaultLocale: 'no',
        },
        target: 'server',
        trailingSlash: false,
        reactStrictMode: true,
        webpack5: true,
        cssModules: true
    }
));
