// @ts-check
/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const csp = require('./src/csp');

module.exports = {
    transpilePackages: ['@navikt/ds-react', '@navikt/ds-icons'],
    basePath: '/samtalestotte',
    i18n: {
        locales: ['no'],
        defaultLocale: 'no',
    },
    trailingSlash: false,
    reactStrictMode: true,
    async redirects() {
        return [
            {
                /*
                * Redirect for å lede de døde lenkene til dokumentene våre til hovedsiden.
                * Matcher '/something.docx', men ikke '/dokumenter/something.docx' som er de
                * levende lenkene til dokumentene våre.
                */
                source: '/:path(^[^\\/]+\\.docx$)',
                destination: '/',
                permanent: true,
            },
        ];
    },
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
            {
                source: '/dokumenter/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex',
                    },
                ],
            },
        ];
    },
};
