import Head from 'next/head';
import { Layout } from './felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from './pageProps';
import './index.less';
import { Samtaleverktøy } from './felleskomponenter/Samtaleverktøy/Samtaleverktøy';
import { OppfølgingssamtaleGjennomføring } from './OppfølgingssamtaleGjennomføring/OppfølgingssamtaleGjennomføring';

const Home = (props: { page: PageProps }) => {
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
                    //bannerIconUrl=""
                    decoratorParts={props.page.decorator}
                >
                    <Samtaleverktøy />
                    <OppfølgingssamtaleGjennomføring />
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
