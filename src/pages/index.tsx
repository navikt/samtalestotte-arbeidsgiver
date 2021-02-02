import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import './index.less';
import { Samtaleverktøy } from '../felleskomponenter/Samtaleverktøy/Samtaleverktøy';
import { OppfølgingssamtaleGjennomføring } from '../felleskomponenter/OppfølgingssamtaleGjennomføring/OppfølgingssamtaleGjennomføring';
import { SituasjonQA } from '../felleskomponenter/SituasjonQA/SituasjonQA';
import {useEffect, useRef} from 'react';
import logEvent from '../amplitude/amplitude';
import ReactToPrint from "react-to-print";

const Home = (props: { page: PageProps }) => {
    useEffect(() => {
        const timer = setTimeout(async () => {
            await logEvent('sidevisning', { url: 'samtalestotte-arbeidsgiver' });
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
                >
                    <Samtaleverktøy />
                    <OppfølgingssamtaleGjennomføring />
                    <SituasjonQA />
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
    const page = await getPageProps('Samtalestøtte for arbeidsgiver', '/');

    return {
        props: { page },
        revalidate: 60,
    };
};

export default Home;
