import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import './index.less';
import { Samtaleverktøy } from '../felleskomponenter/Samtaleverktøy/Samtaleverktøy';
import { OppfølgingssamtaleGjennomføring } from '../felleskomponenter/OppfølgingssamtaleGjennomføring/OppfølgingssamtaleGjennomføring';
import { SituasjonQA } from '../felleskomponenter/SituasjonQA/SituasjonQA';
import { useEffect, useReducer } from 'react';
import logEvent from '../amplitude/amplitude';
import ReactToPrint from 'react-to-print';
import { useCookies } from 'react-cookie';
import { cookieInitializer, cookieReducer } from '../cookie/CookieReducer';

const ETT_ÅR_I_SEKUNDER = 31536000;

const isNotEmpty = (object: Object) => {
    return object !== undefined && Object.keys(object).length > 0;
}

const Home = (props: { page: PageProps }) => {
    const [cookies, setCookie] = useCookies(['samtalestotte']);
    const [state, dispatch] = useReducer(cookieReducer, cookies['samtalestotte'], cookieInitializer);

    useEffect(() => {
        const timer = setTimeout(async () => {
            await logEvent('sidevisning', { url: 'samtalestotte-arbeidsgiver' });
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect( () => {
        if(
            state.sendtStatistikk === 'nei' &&
            [state.situasjonQA, state.oppfølgingSamtale, state.samtaleverktøy].some(isNotEmpty)
        ){
            fetch('http://localhost:3000/sendstatistics')
            dispatch({type: 'sendtStatistikk', payload: 'ja'})
        }
        setCookie(
            'samtalestotte',
            JSON.stringify({
                ...state.situasjonQA,
                ...state.samtaleverktøy,
                ...state.oppfølgingSamtale,
                sendtStatistikk: state.sendtStatistikk
            }),
            {
                path: '/',
                maxAge: ETT_ÅR_I_SEKUNDER,
                sameSite: true,
            }
        )
    },
        [state]
    )


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
                    >
                        <Samtaleverktøy  dispatch={dispatch} samtaleverktøyState={state.samtaleverktøy}/>
                        <OppfølgingssamtaleGjennomføring dispatch={dispatch} oppfølgingSamtaleState={state.oppfølgingSamtale}/>
                        <SituasjonQA dispatch={dispatch} situasjonQAState={state.situasjonQA}/>
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

export const getStaticProps = async (): Promise<StaticProps> => {
    const page = await getPageProps(
        'Samtalestøtte for arbeidsgiver',
        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid.'
    );

    return {
        props: { page },
        revalidate: 60,
    };
};

export default Home;
