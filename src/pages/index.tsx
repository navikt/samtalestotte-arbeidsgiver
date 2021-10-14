import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import logEvent from '../amplitude/amplitude';
import HvorforBrukeTidPaaSamtaler from './HvorforBrukeTidPaaSamtaler';
import SlikSkaperDuGodeSamtaler from './SlikSkaperDuGodeSamtaler';
import MerInspirasjonOgGodeGrep from './MerInspirasjonOgGodeGrep';
import VissteDuAt from './VissteDuAt';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { getMiljø } from '../utils/miljøUtils';
import {
    sendIATjenesteMetrikk,
    sendInnloggetIATjenesteMetrikk,
} from '../utils/ia-tjeneste-metrikker';
import { largeScreenMarginSides3rem, marginTop1Rem, paddingSides1rem } from '../utils/fellesStiler';
import { hentReferrerFraUrl } from '../resources/urls';
import classNames from 'classnames';
import { Alert } from '@navikt/ds-react';
import LoggbarLenke from '../felleskomponenter/LoggbarLenke/LoggbarLenke';

const ETT_DØGN_I_SEKUNDER = 86400;
let antallForsøkSendTilIaTjenesterMetrikker = 0;

const Home = (props: { page: PageProps }) => {
    const [cookies, setCookie] = useCookies(['samtalestotte', 'samtalestotte-podlet']);
    Sentry.init({
        dsn: 'https://97af8a51172e4f9bb74ac9c05920b1d2@sentry.gc.nav.no/77',
        environment: getMiljø(),
        enabled: getMiljø() !== 'local',
    });

    const hentReferrerFraCookies = () => {
        return cookies['samtalestotte-podlet']?.referrer !== null
            ? cookies['samtalestotte-podlet']?.referrer
            : '';
    };

    const hentReferrer = () => {
        return hentReferrerFraCookies()
            ? hentReferrerFraCookies()
            : hentReferrerFraUrl(window.location.href);
    };

    useEffect(() => {
        const referrer = hentReferrer();
        const timer = setTimeout(async () => {
            await logEvent('sidevisning', {
                url: 'samtalestotte-arbeidsgiver',
                internal_referrer: referrer,
            });
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (
            cookies['samtalestotte-podlet']?.orgnr !== null &&
            cookies['samtalestotte-podlet']?.altinnRettighet !== null
        ) {
            sendInnloggetIATjenesteMetrikk(
                cookies['samtalestotte-podlet']?.orgnr,
                cookies['samtalestotte-podlet']?.altinnRettighet
            ).then((erMetrikkSendt) => {
                console.log('erMetrikkSendt:', erMetrikkSendt);
            });
        }
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
                            maxAge: ETT_DØGN_I_SEKUNDER,
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
                    {/* TODO: Alert for psykisk helse kan fjernes etter 10.11.2021 */}
                    <Alert variant={'info'} id={'alertboksPsykiskHelse'} className={marginTop1Rem}>
                        Vi har laget noen råd for å snakke om psykisk helse på arbeidsplassen.&nbsp;
                        <LoggbarLenke
                            href={
                                '/samtalestotte#ekspanderbart-infopanel__psykiskHelsePåArbeidsplassen-base'
                            }
                        >
                            Klikk her for å lese mer.
                        </LoggbarLenke>
                    </Alert>
                    <HvorforBrukeTidPaaSamtaler
                        className={classNames(paddingSides1rem, largeScreenMarginSides3rem)}
                    />
                    <SlikSkaperDuGodeSamtaler className={classNames(paddingSides1rem)} />
                    <MerInspirasjonOgGodeGrep
                        className={classNames(paddingSides1rem, largeScreenMarginSides3rem)}
                    />
                    <VissteDuAt
                        className={classNames(paddingSides1rem, largeScreenMarginSides3rem)}
                    />
                </Layout>
            </main>
            <footer />
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
