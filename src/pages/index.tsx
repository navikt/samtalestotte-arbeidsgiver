import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, HomeProps } from '../homeProps';
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
import { cookiesIApplikasjon, hentReferrerUrlFraCookies } from '../utils/cookiesUtils';
import { Cookie } from 'universal-cookie';

const Home = (props: { page: HomeProps }) => {
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

interface HomeServerSideProps {
    props: {
        page: HomeProps;
    };
}

export const getServerSideProps = async (): Promise<HomeServerSideProps> => {
    const page = await getPageProps(
        'Samtalestøtte for arbeidsgiver',
        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid.',
    );

    return {
        props: { page },
    };
};


export default Home;
