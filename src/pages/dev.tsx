import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import './index.less';
import { Samtaleverktøy } from '../felleskomponenter/Samtaleverktøy/Samtaleverktøy';
import { OppfølgingssamtaleGjennomføring } from '../felleskomponenter/OppfølgingssamtaleGjennomføring/OppfølgingssamtaleGjennomføring';
import { SituasjonQA } from '../felleskomponenter/SituasjonQA/SituasjonQA';
import { useReducer } from 'react';
import logEvent from '../amplitude/amplitude';
import { cookieInitializer, cookieReducer } from '../cookie/CookieReducer';

const Dev = (props: { page: PageProps }) => {
    const [state, dispatch] = useReducer(
        cookieReducer,
        {},
        cookieInitializer
    );

    return (
        <div>
            <Head>
                <title>{props.page.appTitle}</title>
                <link rel="icon" href="favicon.ico" />
            </Head>

            <main>
                <Layout
                    title={props.page ? props.page.title : 'kunne ikke hente tittel'}
                    isFrontPage={true}
                    decoratorParts={props.page.decorator}
                    logEvent={logEvent}
                >
                    <Samtaleverktøy
                        dispatch={dispatch}
                        samtaleverktøyState={state.samtaleverktøy}
                    />
                    <OppfølgingssamtaleGjennomføring
                        dispatch={dispatch}
                        oppfølgingSamtaleState={state.oppfølgingSamtale}
                    />
                    <SituasjonQA dispatch={dispatch} situasjonQAState={state.situasjonQA} />
                </Layout>
            </main>

            <footer></footer>
        </div>
    );
};

interface StaticProps {
    props: {
        page: PageProps;
    };
    revalidate: number;
}

// NextJS kaller denne
export const getStaticProps = async (): Promise<StaticProps> => {
    const page = await getPageProps(
        'Samtalestøtte for arbeidsgiver DEVPAGE',
        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid.'
    );

    return {
        props: { page },
        revalidate: 60,
    };
};

export default Dev;
