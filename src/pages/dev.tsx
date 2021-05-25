import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import './dev.less';
import logEvent from '../amplitude/amplitude';
import HvorforBrukeTidPaaSamtaler from '../felleskomponenter/InfoPanel/HvorforBrukeTidPaaSamtaler';
import SlikSkaperDuGodeSamtaler from '../felleskomponenter/InfoPanel/SlikSkaperDuGodeSamtaler';
import MerInspirasjonOgGodeGrep from '../felleskomponenter/InfoPanel/MerInspirasjonOgGodeGrep';

const VisteDuAtInfoBlock = () => (
    <div
        className={"viste-du-container"}
        style={{
            borderRadius: "10px",
            background: "#FAFAFA;",
            border: "1px solid black",
            padding: "2em"
        }}
    >
        <h3 className={"viste-du-header"}>
            Visste du at NAV hjelper virksomheter med å forebygge sykefravær?
        </h3>
        <div
            className={"viste-du-icon"}
            style={{
                display:'block',
                background:"rgba(86, 144, 162, 1)",
                borderRadius: "100px",
                height: "61px",
                width: "61px"
             }}
        />
        <p className={"viste-du-paragraf"}>
            NAV hjelper virksomheter med å forebygge sykefravær.
            Du får digitale tjenester og veiledning for å gjennomføre enkeltsamtaler.
            NAV kan også gi mer omfattende rådgivning hos dere på arbeidsplassen.
        </p>
        <a className={"viste-du-link"} href={"#"}>Kontakt NAV</a>
        <a className={"viste-du-link"} href={"#"}>Les mer om NAVs tjenester for å forebygge sykefravær.</a>
    </div>
)

const Dev = (props: { page: PageProps }) => {
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
                    <HvorforBrukeTidPaaSamtaler />
                    <SlikSkaperDuGodeSamtaler />
                    <MerInspirasjonOgGodeGrep />
                    <VisteDuAtInfoBlock />
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

// NextJS kaller denne
export const getStaticProps = async (): Promise<StaticProps> => {
    const page = await getPageProps(
        'Samtalestøtte for arbeidsgiver DEVPAGE',
        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid.'
    );

    return {
        props: { page },
        revalidate: 60,
    };
};

export default Dev;
