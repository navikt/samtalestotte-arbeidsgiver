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
import { largeScreenMarginSides3rem, marginTop1Rem, paddingSides1rem } from '../utils/fellesStiler';
import { hentReferrerApplikasjonFraUrl } from '../resources/urls';
import classNames from "classnames";
import {Packer} from "docx";
import * as fs from "fs";
import {generateDocX} from "../dokumentgenerator/docxGenerator";
import {SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT} from "../resources/textContent";
import {generateTxt} from "../dokumentgenerator/txtGenerator";
import { Alert } from '@navikt/ds-react';
import LoggbarLenke from '../felleskomponenter/LoggbarLenke/LoggbarLenke';

const doc = generateDocX(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT)
const txt = generateTxt(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT)

const Home = (props: { page: PageProps }) => {
    const [cookies] = useCookies(['samtalestotte-podlet']);
    Sentry.init({
        dsn: 'https://97af8a51172e4f9bb74ac9c05920b1d2@sentry.gc.nav.no/77',
        environment: getMiljø(),
        enabled: getMiljø() !== 'local',
    });

    const hentReferrerUrlFraCookies = () => {
        return cookies['samtalestotte-podlet']?.referrer !== null
            ? cookies['samtalestotte-podlet']?.referrer
            : '';
    };

    const hentReferrerApplikasjon = () => {
        const referrerUrlFraCookies = hentReferrerUrlFraCookies();

        return referrerUrlFraCookies
            ? hentReferrerApplikasjonFraUrl(referrerUrlFraCookies)
            : hentReferrerApplikasjonFraUrl(window.location.href);
    };

    useEffect(() => {
        const referrerApplikasjon = hentReferrerApplikasjon();
        const timer = setTimeout(async () => {
            await logEvent('sidevisning', {
                url: 'samtalestotte-arbeidsgiver',
                internal_referrer: referrerApplikasjon,
            });
        }, 500);
        return () => clearTimeout(timer);
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
    const documentBuffer = await Packer.toBuffer(doc)
    fs.writeFileSync("public/Samtalestøtte-Arbeidsgiver.docx", documentBuffer)
    fs.writeFileSync("public/Samtalestøtte-Arbeidsgiver.txt", txt)

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
