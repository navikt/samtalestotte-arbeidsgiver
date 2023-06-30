import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import logEvent from '../amplitude/amplitude';
import HvorforBrukeTidPaaSamtaler from './HvorforBrukeTidPaaSamtaler';
import SlikSkaperDuGodeSamtaler from './SlikSkaperDuGodeSamtaler';
import MerInspirasjonOgGodeGrep from './MerInspirasjonOgGodeGrep';
import VisteDuAt from './VissteDuAt';
import { useEffect } from 'react';
import fellesStiler from '../utils/fellesStiler.module.css';
import classNames from 'classnames';
import { setSamtalestotteBreadcrumbs } from '../utils/innloggetStatus';
import { ENVUrls, getUrlsFromEnv } from '../utils/envUtils';

type HomeProps = {
    urls: ENVUrls;
};

const APP_TITLE = 'Samtalestøtte for arbeidsgiver';
const TITLE = 'Samtalestøtte for arbeidsgiver';

const Home = (props: HomeProps) => {
    useEffect(() => {
        setSamtalestotteBreadcrumbs(props.urls);
    });

    return (
        <div>
            <Head>
                <title>{APP_TITLE}</title>
                <link rel="icon" href="favicon.ico" />
            </Head>

            <Layout title={TITLE} isFrontPage={true} logEvent={logEvent}>
                <HvorforBrukeTidPaaSamtaler
                    className={classNames(
                        fellesStiler.contentPaddingSides,
                        fellesStiler.largeScreenMarginSides3rem
                    )}
                />
                <SlikSkaperDuGodeSamtaler
                    className={classNames(fellesStiler.contentPaddingSides)}
                />
                <MerInspirasjonOgGodeGrep
                    className={classNames(
                        fellesStiler.contentPaddingSides,
                        fellesStiler.largeScreenMarginSides3rem
                    )}
                />
                <VisteDuAt
                    className={classNames(
                        fellesStiler.largeScreenMarginSides3rem,
                        fellesStiler.marginLeft1Rem
                    )}
                />
            </Layout>
            <footer />
        </div>
    );
};
export const getServerSideProps = async () => {
    const urls = getUrlsFromEnv();

    return { props: { urls } };
};

export default Home;
