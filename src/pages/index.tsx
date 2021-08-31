import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import logEvent from '../amplitude/amplitude';
import HvorforBrukeTidPaaSamtaler from './HvorforBrukeTidPaaSamtaler';
import SlikSkaperDuGodeSamtaler from './SlikSkaperDuGodeSamtaler';
import MerInspirasjonOgGodeGrep from './MerInspirasjonOgGodeGrep';
import VisteDuAt from './VisteDuAt';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { getMiljø } from '../utils/miljøUtils';
import { sendIATjenesteMetrikk } from '../utils/ia-tjeneste-metrikker';
import { marginSides3rem } from '../utils/fellesStiler';

const ETT_ÅR_I_SEKUNDER = 31536000;
let antallForsøkSendTilIaTjenesterMetrikker = 0;

const Home = (props: { page: PageProps }) => {
    const [cookies, setCookie] = useCookies(['samtalestotte']);
    Sentry.init({
        dsn: 'https://97af8a51172e4f9bb74ac9c05920b1d2@sentry.gc.nav.no/77',
        environment: getMiljø(),
        enabled: getMiljø() !== 'local',
    });

    //let referrerPattern = window.location.href.match("(referer=https:\\/\\/.*\\.nav.no\\/)(.+)\\/");

    useEffect(() => {
        const referrerFromUrl = /referer=https:\/\/.*\.nav.no\/(.+)\//;
        const referrerMatch = window.location.href.match(referrerFromUrl);
        const referrer = referrerMatch?.[1];

        const timer = setTimeout(async () => {
            await logEvent('sidevisning', {
                url: 'samtalestotte-arbeidsgiver',
                referrer: referrer,
            });
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (
            cookies.samtalestotte?.sendtStatistikk === undefined &&
            antallForsøkSendTilIaTjenesterMetrikker < 5
        ) {
            sendIATjenesteMetrikk().then((erMetrikkSendt) => {
                if (erMetrikkSendt) {
                    setCookie(
                        'samtalestotte',
                        { sendtStatistikk: 'ja' },
                        {
                            path: '/',
                            maxAge: ETT_ÅR_I_SEKUNDER,
                            sameSite: true,
                        }
                    );
                }
            });
            antallForsøkSendTilIaTjenesterMetrikker++;
        }
    }, []);

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
                    <HvorforBrukeTidPaaSamtaler className={marginSides3rem} />
                    <SlikSkaperDuGodeSamtaler />
                    <MerInspirasjonOgGodeGrep className={marginSides3rem} />
                    <VisteDuAt className={marginSides3rem} />
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
        'Samtalestøtte for arbeidsgiver',
        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid.'
    );

    return {
        props: { page },
        revalidate: 60,
    };
};

export default Home;