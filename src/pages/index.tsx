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
import { largeScreenMarginSides3rem, paddingSides1rem } from '../utils/fellesStiler';
import {
    getReferrerUrlFraUrlMedQueryParameter,
    ReferrerApplikasjon,
    ReferrerUrl,
    utleddApplikasjonsnavnFraUrl,
} from '../resources/urls';
import classNames from 'classnames';
import { Packer } from 'docx';
import * as fs from 'fs';
import { generateDocX } from '../dokumentgenerator/docxGenerator';
import { SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT } from '../resources/textContent';
import { generateTxt } from '../dokumentgenerator/txtGenerator';
import { cookiesIApplikasjon, hentReferrerUrlFraCookies } from '../utils/cookiesUtils';
import { Cookie } from 'universal-cookie';

const doc = generateDocX(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);
const txt = generateTxt(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);

const Home = (props: { page: PageProps }) => {
    const [cookies] = useCookies(cookiesIApplikasjon);

    Sentry.init({
        dsn: 'https://97af8a51172e4f9bb74ac9c05920b1d2@sentry.gc.nav.no/77',
        environment: getMiljø(),
        enabled: getMiljø() !== 'local',
    });

    const hentReferrerApplikasjon = (applikasjonsCookies: Cookie): ReferrerApplikasjon => {
        const referrerUrlFraCookies: ReferrerUrl = hentReferrerUrlFraCookies(applikasjonsCookies);
        return referrerUrlFraCookies
            ? utleddApplikasjonsnavnFraUrl(referrerUrlFraCookies)
            : utleddApplikasjonsnavnFraUrl(
                  getReferrerUrlFraUrlMedQueryParameter(window.location.href)
              );
    };

    useEffect(() => {
        const referrerApplikasjon = hentReferrerApplikasjon(cookies);

        const timer = setTimeout(async () => {
            await logEvent('sidevisning', {
                url: 'samtalestotte-arbeidsgiver',
                internal_referrer: referrerApplikasjon,
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [cookies]);

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
    const documentBuffer = await Packer.toBuffer(doc);
    fs.writeFileSync('public/Samtalestøtte-Arbeidsgiver.docx', documentBuffer);
    fs.writeFileSync('public/Samtalestøtte-Arbeidsgiver.txt', txt);

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
