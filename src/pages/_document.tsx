import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentProps,
} from 'next/document';
import {
    fetchDecoratorReact,
    DecoratorEnvProps,
    DecoratorParams,
    DecoratorComponents,
} from '@navikt/nav-dekoratoren-moduler/ssr';
import React from 'react';
import { getBreadcrumbs } from '../utils/innloggetStatus';
import { getUrlsFromEnv } from '../utils/envUtils';

const getDecoratorEnv = () =>
    process.env.NAIS_CLUSTER_NAME === 'prod-gcp' ? 'prod' : ('dev' as DecoratorEnvProps['env']);

const getDecoratorParams = (
    breadcrumbs: DecoratorParams['breadcrumbs']
): Partial<DecoratorParams> => ({
    context: 'arbeidsgiver',
    breadcrumbs: breadcrumbs,
    logoutWarning: true,
});

class _document extends Document<DocumentProps & { Decorator: DecoratorComponents }> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        const decoratorEnv = getDecoratorEnv();
        const envUrls = getUrlsFromEnv();
        const breadcrumbs = getBreadcrumbs(envUrls);

        const Decorator = await fetchDecoratorReact({
            env: decoratorEnv,
            localUrl: '',
            serviceDiscovery: true,
            params: getDecoratorParams(breadcrumbs),
        });

        return { ...initialProps, Decorator };
    }

    render() {
        const { Decorator } = this.props;
        const { Styles, Scripts, Header, Footer } = Decorator;
        return (
            <Html>
                <Head>
                    <meta name="robots" content="noindex,nofollow" />
                </Head>
                <Styles />
                <Scripts />
                <body>
                    <Header />
                    <div id="app" className="app">
                        <Main />
                    </div>
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default _document;
