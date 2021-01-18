import Head from 'next/head';
import { EkspanderbartInfopanel } from './felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { Layout } from './felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from './pageProps';
import './index.less';
import {Normaltekst} from "nav-frontend-typografi";

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
                    <EkspanderbartInfopanel unikId={'nå-kan-være-samtalen-aktuelt'}>
                        <Normaltekst className="ekspanderbart-infopanel__innhold">
                            En oppfølgingssamtale gjennomføres hvis du eller din medarbeider opplever
                            utfordringer med arbeidet. Utfordringer kan for eksempel skyldes sykdom eller andre
                            forhold. Du bør ikke vente til medarbeideren har blitt sykmeldt.
                        </Normaltekst>
                        <Normaltekst className="ekspanderbart-infopanel__innhold">
                            Det finnes ingen oppskrift på en god samtale som gjelder alle situasjoner. Men det
                            finnes noen grep som ofte bidrar til gode samtaler.
                        </Normaltekst>
                    </EkspanderbartInfopanel>
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
