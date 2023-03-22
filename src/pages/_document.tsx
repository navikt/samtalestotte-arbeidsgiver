import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import {
    Components,
    Env,
    fetchDecoratorReact,
    Props,
} from "@navikt/nav-dekoratoren-moduler/ssr";
import React from "react";
import {getBreadcrumbs} from "../utils/innloggetStatus";
import {getUrlsFromEnv} from "../utils/envUtils";

const getDecoratorEnv = () => process.env.ENVIRONMENT === "prod-gcp" ? "prod" : "dev" as Exclude<Env, "localhost">

const getDecoratorParams = (environment: Env, breadcrumbs: Props["breadcrumbs"]): Props =>({
    env: environment,
    context: "arbeidsgiver",
    breadcrumbs: breadcrumbs
});

class _document extends Document<{ decorator: Components }> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        const decoratorEnv = getDecoratorEnv();
        const envUrls = getUrlsFromEnv();
        const breadcrumbs = getBreadcrumbs(envUrls);
        const decoratorParams = getDecoratorParams(decoratorEnv, breadcrumbs);

        const decorator = await fetchDecoratorReact(decoratorParams);

        return { ...initialProps, decorator };
    }

    render() {
        const { Styles, Scripts, Header, Footer } = this.props.decorator;
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