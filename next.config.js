const withLess = require('@zeit/next-less');
const packageJson = require('./package.json');
const navFrontendModuler = [];

Object.keys(packageJson.dependencies).forEach((key) => {
    if (key.startsWith('nav-frontend-')) {
        navFrontendModuler.push(key);
    }
});

const nextTranspileModules = require('next-transpile-modules');
const withTranspileModules = nextTranspileModules(navFrontendModuler);

module.exports = withTranspileModules(
    withLess({
        basePath: '/samtalestotte',
        target: 'server',
        trailingSlash: false,
        reactStrictMode: true,
    })
);
