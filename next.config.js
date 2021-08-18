// @ts-check
/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/

const nextTranspileModules = require('next-transpile-modules');
const withTranspileModules = nextTranspileModules(["@navikt/ds-react", "@navikt/ds-icons"]);
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
