import Head from 'next/head';
import { Layout } from '../felleskomponenter/Layout/Layout';
import { getPageProps, PageProps } from '../pageProps';
import './dev.less';
import { useReducer } from 'react';
import logEvent from '../amplitude/amplitude';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { cookieInitializer, cookieReducer } from '../cookie/CookieReducer';
import { EkspanderbartInfopanel } from '../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import Locked from '../felleskomponenter/Ikoner/Locked';

const PlaceholderEkspanderbar = ({ text }: {text: string}) => (
    <div style={{
        height: "65px",
        border: "1px solid black",
        borderRadius: "4px",
        marginTop: "22px",
        marginBottom: "22px"
    }}>
        {text}
    </div>
)

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

const PlaceHolderIcon = ({className}: { className?: string }) => (
    <div className={className} style={{width: "48px", height: "48px", background:"rgba(86, 144, 162, 1)", borderRadius: "100px"}} />
)


const Dev = (props: { page: PageProps }) => {
    const [state, dispatch] = useReducer(
        cookieReducer,
        {},
        cookieInitializer
    );

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
                    <h2>
                        Hvorfor bruke tid på samtaler?
                    </h2>
                    <p>
                        Her får du som arbeidsgiver hjelp og praktiske råd for hvordan du kan fylle dine lovpålagte plikter innen forebygging og oppfølging av sykefravær.  Du får råd om hva du kan gjøre på kort sikt og hva du kan gjøre på lang sikt.
                    </p>
                    <h3>
                        Gode samtaler bidrar til:
                    </h3>
                    <ul>
                        <li>
                        lavt sykefravær og god lønnsomhet
                        </li>
                        <li>
                        motiverte medarbeidere og godt arbeidsmiljø
                        </li>
                        <li>
                        at du fyller dine lovpålagte plikter som arbeidsgiver
                        </li>
                    </ul>
                    <p>
                        Lovverk og rutiner forteller deg hva du skal gjøre for å forebygge og følge opp sykefravær.
                        Gode samtaler er en metode for hvordan du fyller lovkravene, slik at de gir størst verdi for deg og medarbeiderne dine.
                    </p>
                    <EkspanderbartInfopanel
                        unikId={"naarKanEnsamtaleVaereAktuelt"}
                        tittel={"Når kan en samtale være aktuelt?"}
                        panelLestSituasjon={"ulest"}
                        callBack={()=>{}}
                        ikon={<PlaceHolderIcon/>}
                        lestIkon={<PlaceHolderIcon />}
                    >
                        <p>
                            En samtale for å forebygge eller følge opp sykefravær handler om arbeidssituasjonen.
                            En samtale bør gjennomføres når
                        </p>
                        <ul>
                            <li>
                                Du eller din medarbeider opplever utfordringer med arbeidet og det skyldes sykdom eller andre forhold.
                            </li>
                            <li>
                                Medarbeideren står i fare for å bli sykmeldt.
                            </li>
                            <li>
                                Medarbeideren er sykmeldt.
                            </li>
                            <li>
                                Medarbeideren har vært sykmeldt.
                            </li>
                        </ul>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel
                        unikId={"detteKanDuSpoerreMedarbeiderenOm"}
                        tittel={"Dette kan du spørre medarbeideren om"}
                        panelLestSituasjon={"ulest"}
                        callBack={()=>{}}
                        ikon={<PlaceHolderIcon/>}
                        lestIkon={<PlaceHolderIcon />}
                    >
                        <strong>
                            Du kan stille spørsmål som handler om fravær og forhold på arbeidsplassen.
                        </strong>
                        <ul>
                            <li>
                                Mulighetene til å utføre egne eller alternative arbeidsoppgaver.
                            </li>
                            <li>
                                Behov for tilrettelegging.
                            </li>
                            <li>
                                Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i deres virksomhet.
                            </li>
                            <li>
                                Hvor lenge medarbeideren tror fraværet vil vare.
                            </li>
                            <li>
                                Om det er forhold på arbeidsplassen som påvirker sykefraværet eller helsesituasjonen.
                            </li>
                            <li>
                                Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller andre samarbeidspartnere for å få hjelp med tilrettelegging og oppfølging.
                            </li>
                        </ul>
                        <strong>
                            Husk at du ikke kan kreve opplysninger om diagnose, behandling og forhold hjemme.
                        </strong>
                    </EkspanderbartInfopanel>
                    <LenkepanelBase className={"lenkepanel-sykefravaer-kalkulator"} href={"#"}>
                        <div className={"lenkepanel-sykefravaer-child-wrapper"}>
                            <PlaceHolderIcon className={"lenkepanel-sykefravaer-ikon"}/>
                            <p>Se hvor mye sykefraværet ditt koster</p>
                            <span>Gå til kalkulatoren</span>
                            <div><Locked /> <span>Krever innlogging</span></div>
                        </div>
                    </LenkepanelBase>
                    <PlaceholderEkspanderbar text={"Se hvor mye sykefraværet ditt koster"} />
                    <PlaceholderEkspanderbar text={"Suksesskriterier" } />
                    <h2>
                        Slik skaper du gode samtaler
                    </h2>
                    <h3>
                        Som arbeidsgiver er du ansvalig for:
                    </h3>
                    <ul>
                        <li>
                            å forebygge og  følge opp sykefravær
                        </li>
                        <li>
                            å gjennomføre og dokumentere samtaler med medarbeidere
                        </li>
                        <li>
                            å sikre at medarbeideren får bidra til å finne løsninger
                        </li>
                    </ul>
                    <h3>
                        Forbered deg ved å:
                    </h3>
                    <PlaceholderEkspanderbar text={"Skape gode rammer"} />
                    <PlaceholderEkspanderbar text={"Planlegge innhold i samtalen "} />
                    <PlaceholderEkspanderbar text={"Forbered medarbeideren din "} />
                    <h3>
                        Gjennomføring av samtalen:
                    </h3>
                    <PlaceholderEkspanderbar text={"Innled samtalen"} />
                    <PlaceholderEkspanderbar text={"Snakk om arbeid"} />
                    <PlaceholderEkspanderbar text={"Finn løsninger sammen"}/>
                    <PlaceholderEkspanderbar text={"Planlegg veien videre sammen"}/>
                    <h2>
                        Mer inspirasjon og gode grep
                    </h2>
                    <PlaceholderEkspanderbar text={"Enkle tips for digitale samtaler "} />
                    <PlaceholderEkspanderbar text={"Gode grep for å bygge relasjoner  "} />
                    <PlaceholderEkspanderbar text={"Tips om tilrettelegging"} />

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
