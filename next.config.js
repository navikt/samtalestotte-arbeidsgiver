// @ts-check
/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/

const nextTranspileModules = require('next-transpile-modules');
const withTranspileModules = nextTranspileModules(['@navikt/ds-react', '@navikt/ds-icons']);
const withLinaria = require('next-linaria');
const csp = require('./src/csp');

module.exports = withTranspileModules(
    withLinaria({
        basePath: '/samtalestotte',
        i18n: {
            locales: ['no'],
            defaultLocale: 'no',
        },
        target: 'server',
        trailingSlash: false,
        reactStrictMode: true,
        webpack5: true,
        cssModules: true,
        async headers() {
            return [
                {
                    // Apply these headers to all routes in your application.
                    source: '/:path*',
                    headers: [
                        {
                            key: 'X-Frame-Options',
                            value: 'SAMEORIGIN',
                        },
                        {
                            key: 'X-Xss-Protection',
                            value: '1; mode=block',
                        },
                        {
                            key: 'X-Content-Type-Options',
                            value: 'nosniff',
                        },
                        {
                            key: 'Referrer-Policy',
                            value: 'no-referrer',
                        },
                        {
                            key: 'Permissions-Policy',
                            value: 'geolocation=(), microphone=(), camera=()',
                        },
                        {
                            key: 'Content-Security-Policy',
                            value: csp,
                        },
                    ],
                },
            ];
        },
    })
);
