import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import logEvent from '../amplitude/amplitude';
import HvorforBrukeTidPaaSamtaler from './HvorforBrukeTidPaaSamtaler';
import SlikSkaperDuGodeSamtaler from './SlikSkaperDuGodeSamtaler';
import MerInspirasjonOgGodeGrep from './MerInspirasjonOgGodeGrep';
import VisteDuAt from './VissteDuAt';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import fellesStiler from '../utils/fellesStiler.module.css';
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

const Home = (props: { page: PageProps }) => {
    const [cookies] = useCookies(cookiesIApplikasjon);

    const hentReferrerApplikasjon = (applikasjonsCookies: Cookie): ReferrerApplikasjon => {
        const referrerUrlFraCookies: ReferrerUrl = hentReferrerUrlFraCookies(applikasjonsCookies);
        return referrerUrlFraCookies
            ? utleddApplikasjonsnavnFraUrl(referrerUrlFraCookies)
            : utleddApplikasjonsnavnFraUrl(
                getReferrerUrlFraUrlMedQueryParameter(window.location.href),
            );
    };

    useEffect(() => {
        const referrerApplikasjon = hentReferrerApplikasjon(cookies);

        const timer = setTimeout(async () => {
            await logEvent('referrer registrert', {
                internal_referrer: referrerApplikasjon,
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [cookies]);

    return (
        <div>
            <Head>
                <title>{props.page.appTitle}</title>
                <link rel='icon' href='favicon.ico' />
            </Head>

            <Layout
                title={props.page ? props.page.title : 'kunne ikke hente tittel'}
                isFrontPage={true}
                decoratorParts={props.page.decorator}
                logEvent={logEvent}
            >
                <HvorforBrukeTidPaaSamtaler
                    className={classNames(
                        fellesStiler.contentPaddingSides,
                        fellesStiler.largeScreenMarginSides3rem,
                    )}
                />
                <SlikSkaperDuGodeSamtaler
                    className={classNames(fellesStiler.contentPaddingSides)}
                />
                <MerInspirasjonOgGodeGrep
                    className={classNames(
                        fellesStiler.contentPaddingSides,
                        fellesStiler.largeScreenMarginSides3rem,
                    )}
                />
                <VisteDuAt
                    className={classNames(
                        fellesStiler.largeScreenMarginSides3rem,
                        fellesStiler.marginLeft1Rem,
                    )}
                />
            </Layout>
            <footer />
        </div>
    );
};

interface ServerSideProps {
    props: {
        page: PageProps;
    };
}

export const getServerSideProps = async (): Promise<ServerSideProps> => {
    const page = await getPageProps(
        'Samtalestøtte for arbeidsgiver',
        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid.',
    );

    return {
        props: { page },
    };
};


export default Home;
