const withLess = require('@zeit/next-less')

module.exports =withLess( {
    basePath: '/samtalestotte-arbeidsgiver',
    async rewrites() {
        return [
            {
                source: '/internal/isAlive',
                destination: '/api/alive-and-ready'
            },
            {
                source: '/internal/isReady',
                destination: '/api/alive-and-ready'
            }
        ]
    }
}
)
