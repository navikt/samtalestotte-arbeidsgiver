import Head from 'next/head';
import { Layout } from '../src/felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../src/pageProps';
import './index.less';
import { Samtaleverktøy } from '../src/felleskomponenter/Samtaleverktøy/Samtaleverktøy';
import { OppfølgingssamtaleGjennomføring } from '../src/felleskomponenter/OppfølgingssamtaleGjennomføring/OppfølgingssamtaleGjennomføring';

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
