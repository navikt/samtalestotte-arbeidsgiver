import { exchangeIdportenSubjectToken, isInvalidToken } from '@navikt/tokenx-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { proxyApiRouteRequest } from '@navikt/next-api-proxy';
import { logger } from './logger';

export default async function proxyRequestWithTokenExchange(
    req: NextApiRequest,
    res: NextApiResponse,
    hostname: string,
    path: string,
    audience: string | undefined,
    useHttps: boolean
) {
    if (audience === undefined) {
        logger.error({ message: 'audience is not set' });
        return res.status(500).json({ error: 'authentication failed' });
    }

    const newAuthToken = await exchangeIdportenSubjectToken(req, audience);

    if (isInvalidToken(newAuthToken)) {
        logger.error({ message: 'token is invalid' });
        return res.status(401).json({ error: 'authentication failed' });
    }

    await proxyApiRouteRequest({
        req,
        res,
        hostname: hostname,
        path: path,
        bearerToken: newAuthToken,
        https: useHttps,
    });
}
