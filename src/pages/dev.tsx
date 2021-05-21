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
import { LyspæreSVG } from '../felleskomponenter/Samtaleverktøy/LyspæreSVG';
import { Normaltekst } from 'nav-frontend-typografi';

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
                            <span><Locked /> Krever innlogging</span>
                        </div>
                    </LenkepanelBase>
                    <EkspanderbartInfopanel
                        tittel={'Suksesskriterier'}
                        unikId={'suksesskriterier'}
                        callBack={()=>{}}
                        ikon={<LyspæreSVG />}
                        lestIkon={<LyspæreSVG />}
                        panelLestSituasjon={"ulest"}
                    >
                        <ul>
                            <li>
                                Gjennomfør samtalen tidlig.
                            </li>
                            <li>
                                Snakk om arbeidsoppgaver og muligheter på arbeidsplassen, ikke diagnose.
                            </li>
                            <li>
                                Lytt til medarbeideren, gi muligheter til å fortelle og bidra med løsninger.
                            </li>
                            <li>
                                Gjennomfør samtaler regelmessig.
                            </li>
                            <li>
                                Jobb kontinuerlig med relasjoner til alle medarbeidere og forutsigbarhet gjennom rutiner.
                            </li>
                        </ul>
                        <strong>
                            Kjente fallgruver
                        </strong>
                        <ul>
                            <li>
                                Du påtar deg for stort ansvar for helsa til medarbeideren.
                            </li>
                            <li>
                                Fokuset handler om behandling eller forhold i privatlivet i stedet for forhold på arbeidsplassen.
                            </li>
                        </ul>
                    </EkspanderbartInfopanel>
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
                    <EkspanderbartInfopanel
                        unikId={"skapeGodeRammer"}
                        tittel={"Skape gode rammer"}
                        panelLestSituasjon={"ulest"}
                        callBack={()=>{}}
                    >
                        <h3>Gode samtaler forutsetter trygghet</h3>
                        <p>
                            Trygghet oppnår du når det er en god relasjon mellom deg og medarbeiderne og rammene rundt samtalen er forutsigbare for alle.
                        </p>
                        <ul>
                            <li>
                                Hvordan ville du selv like å bli møtt?
                            </li>
                            <li>
                                Hvordan er din relasjon og holdning til medarbeideren, og hvordan kan dette påvirke dialogen?
                            </li>
                            <li>
                                Hvor trygg føler du deg på å gjennomføre samtaler?
                            </li>
                        </ul>
                        <strong>Dette kan du gjøre:</strong>
                        <div className={"infoPanel-kolonner"}>
                            <div className={"gra-avrundet-boks"}>
                                <h4>
                                    på kort sikt:
                                </h4>
                                <ul>
                                    <li>
                                        Planlegg bruk av samtaleteknikker for å sikre medvirkning i samtalen.  Les mer i heftet “Den viktige samtalen” hos idebanken.
                                    </li>
                                    <li>
                                        Be om veiledning før samtalen.   Veiledning kan du få fra kollegaer, bedriftshelsetjenesten, NAV eller andre med kompetanse på samtaler.
                                    </li>
                                </ul>
                            </div>
                            <div className={"gra-avrundet-boks"}>
                                <h4>
                                    over tid og som kontinuerlig arbeid:
                                </h4>
                                <ul>
                                    <li>
                                        Lær mer om samtaler og samtaleteknikker. Les mer i heftet “Den viktige samtalen” hos idebanken.
                                    </li>
                                    <li>
                                        Jobb aktivt med å bygge trygge relasjoner til alle dine medarbeidere. Se «Gode grep for å bygge relasjoner».
                                    </li>
                                    <li>
                                        Tren på å gjennomføre samtaler, og be om tilbakemeldinger.
                                    </li>
                                    <li>
                                        Del erfaringer og få veiledning av andre lederkollegaer.
                                    </li>
                                    <li>
                                        Delta på kurs.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h3>
                            Gode rutiner effektiviserer arbeidet og skaper forutsigbarhet for deg og din medarbeider.
                        </h3>
                        <p>
                            Rutiner bør evalueres og justeres hvis de ikke bidrar til forutsigbarhet.
                        </p>
                        <ul>
                            <li>
                                Hvordan bidrar sykefraværsrutinene i din virksomhet til forutsigbarhet rundt oppgaver og ansvar?
                            </li>
                        </ul>
                        <strong>Dette kan du gjøre:</strong>
                        <div className={"infoPanel-kolonner"}>
                            <div className={"gra-avrundet-boks"}>
                                <h4>
                                    på kort sikt:
                                </h4>
                                <ul>
                                    <li>
                                        Bruk sykefraværsrutinene i din virksomhet, for å skape forutsigbarhet for deg og medarbeideren.
                                    </li>
                                    <li>
                                        Finn ut om du kan få hjelp av noen i din virksomhet eller i interne systemer.
                                    </li>
                                </ul>
                            </div>
                            <div className={"gra-avrundet-boks"}>
                                <h4>
                                    over tid og som kontinuerlig arbeid:
                                </h4>
                                <ul>
                                    <li>
                                        Evaluer rutinene dine. Gå til sjekkliste hos idébanken.
                                    </li>
                                    <li>
                                        Utarbeid sykefraværsrutiner. Les mer om hvordan dere kan lage rutiner hos Idébanken.
                                    </li>
                                    <li>
                                        Informer alle ansatte om rutinene og hvor de finner dem.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <strong>
                            Tips:
                        </strong>
                        <p>
                            Arbeidet med rutiner bør settes inn i arbeidsplassens plan for å forebygge sykefravær slik at du kan dokumentere arbeidet.
                        </p>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel unikId={"planleggeInnholdISamtalen"} tittel={"Planlegge innhold i samtalen"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <p>
                            Legg en plan for hva du ønsker å oppnå og hvordan du kan gjennomføre samtalen. Husk å lytte til medarbeiderens behov.
                        </p>
                        <ul className={"alternatingDiscList"}>
                            <li>
                                <strong>
                                    Hva er dine mål med samtalen?
                                </strong>
                            </li>
                            <li>
                                Noter ned målet, og ha det framme når du er i samtalen.
                            </li>
                            <li>
                                <strong>
                                    Hvor trygg er du når du skal strukturere samtalen?
                                </strong>
                            </li>
                            <li>
                                Velg tema og hjelpespørsmål under “gjennomføring av samtalen” lenger ned på siden.
                            </li>
                        </ul>
                        <p>
                            Hvis du skal ta opp et tema du synes er vanskelig, bør du bør være konkret og tydelig på dine observasjoner.
                            Du kan fortelle hvordan du tolker observasjonene, og gi medarbeideren anledning til å korrigere.
                        </p>
                        <ul className={"alternatingDiscList"}>
                            <li>
                                <strong>
                                    Hva har du observert?
                                </strong>
                            </li>
                            <li>
                                Eksempler kan være endring i fravær, i atferd eller i hvordan arbeidsoppgavene blir utført. Husk å           gi konkrete eksempler på det medarbeideren er god på.
                                Noter  gjerne ned og ta med i samtalen.
                            </li>
                        </ul>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel unikId={"forberedMedarbeiderenDin"} tittel={"Forbered medarbeideren din"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <ul>
                            <li>
                                Avtal tid og sted som passer deg og medarbeideren.
                            </li>
                            <li>
                                Samtalen kan gjennomføres digitalt eller utenfor arbeidsplassen hvis det passer best.
                            </li>
                            <li>
                                Les mer om “Enkle tips for digitale samtaler” lengre ned på siden.
                            </li>
                            <li>
                                Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når begge er forberedt, blir det enklere å finne løsninger sammen.
                            </li>
                            <li>
                                Du kan sende tema eller spørsmål til medarbeideren på forhånd.
                            </li>
                            <li>
                                Velg noen av de viktigste fra eksemplene under “gjennomføring av samtalen” lenger ned på siden.
                            </li>
                        </ul>
                    </EkspanderbartInfopanel>
                    <h3>
                        Gjennomføring av samtalen:
                    </h3>
                    <EkspanderbartInfopanel unikId={"innledSamtalen"} tittel={"Innled samtalen"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <h3>
                            Innled samtalen
                        </h3>
                        <p>
                            Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt.
                            Rammene hjelper dere med å holde fokus og tid.
                        </p>
                        <strong>
                            Vanlige tema i innledning:
                        </strong>
                        <ul>
                            <li>
                                ønske velkommen
                            </li>
                            <li>
                                informere om tidsrammene for møtet
                            </li>
                            <li>
                                informere om målet med møtet
                            </li>
                            <li>
                                gå igjennom agenda
                            </li>
                            <li>
                                spørre om medarbeideren har innspill til mål og agenda
                            </li>
                        </ul>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel unikId={"snakkOmArbeid"} tittel={"Snakk om arbeid"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <h3>
                            En samtale for å forebygge eller følge opp sykefravær handler om medarbeideren.
                        </h3>
                        <p>
                            Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene og arbeidsdagen oppleves.
                        </p>

                        <strong>Tips:</strong>
                        <ul>
                            <li>Bruk åpne spørsmål med spørreord som hva, hvor, hvordan, hvem eller når.</li>
                            <li>Unngå ordet “hvorfor”. Hvorfor kan ofte oppleves som en anklage eller for å fordele skyld.</li>
                            <li>Tål stillhet slik at medarbeideren får tid til å tenke før de må svare.</li>
                        </ul>

                        <strong>Vanlige tema i samtalen om arbeidssituasjonen:</strong>
                        <ul>
                            <li>arbeidsoppgaver</li>
                            <li>arbeidstid</li>
                            <li>samarbeid</li>
                            <li>arbeidsmiljø</li>
                            <li>tidligere tiltak</li>
                        </ul>

                        <strong>Eksempler på spørsmål:</strong>
                        <p>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</p>

                        <div className={"gra-avrundet-boks margin-bunn-2em "}>
                            <strong>Arbeidsoppgaver</strong>
                            <ul>
                                <li>Hvordan vil du beskrive arbeidsdagen din?</li>
                                <li>Hvilke av arbeidsoppgavene dine kan du fortsatt utføre?</li>
                                <li>Hvilke av arbeidsoppgavene dine er vanskelige å utføre?</li>
                            </ul>
                        </div>

                        <div className={"gra-avrundet-boks margin-bunn-2em "}>
                            <strong>Arbeidsmiljø</strong>
                            <ul>
                                <li>Hvordan vil du beskrive arbeidsmiljøet?</li>
                                <li>Hva synes du er positivt, og hva tenker du kan forbedres?</li>
                                <li>Hvordan vil du beskrive stressnivået?</li>
                                <li>Hvordan påvirker arbeidsmiljøet sykefraværet ditt?</li>
                            </ul>
                        </div>

                        <div className={"gra-avrundet-boks margin-bunn-2em "}>
                            <strong>Samarbeid og motivasjon</strong>
                            <ul>
                                <li>Hvordan opplever du samarbeidet med kolleger/ledere?</li>
                                <li>Hva motiverer deg mest akkurat nå?</li>
                                <li>Hva oppfatter du som dine styrker nå?</li>
                            </ul>
                        </div>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel unikId={"finnLøsningerSammen"} tittel={"Finn løsninger sammen"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <h3>Hjelp medarbeideren med å finne løsninger.</h3>
                        <p>
                            Hvis medarbeideren beskriver arbeidsoppgaver og arbeidssituasjon først,
                            kan det bli enklere å se løsningsforslag selv.
                            Egne løsningsforslag gir ofte økt motivasjon ved gjennomføring.
                        </p>
                        <strong>Tips:</strong>
                        <p>
                            Snakk om det som skal skje framover i tid og på hvilke muligheter som finnes.
                        </p>
                        <strong>Vanlige tema når dere finner løsninger sammen:</strong>
                        <ul>
                            <li>tilpasse arbeidsoppgaver eller arbeidsinnhold</li>
                            <li>tilpasse arbeidstid, arbeidstempo eller tidskrav</li>
                            <li>tilpasse organisering av arbeidet</li>
                            <li>tilpasse samarbeid og samhandling med andre</li>
                            <li className={"margin-bunn-2em"}>alternative arbeidsoppgaver</li>
                            <li>behov for informasjon og tilbakemeldinger</li>
                            <li>arbeidsmiljø</li>
                            <li className={"margin-bunn-2em"}>kompetanse</li>
                            <li>fysisk utforming av arbeidsplassen</li>
                            <li>hjelpemidler</li>
                            <li>andre forhold</li>
                        </ul>

                        <strong>Eksempler på spørsmål:</strong>
                        <p>
                            Velg noen av eksemplene som er relevante for akkurat denne samtalen.
                        </p>
                        <div className={"gra-avrundet-boks margin-bunn-2em"}>
                            <strong>Hvordan kan jeg som leder hjelpe deg?</strong>
                            <ul>
                                <li>Hva ville være god og støttende hjelp for deg i en travel arbeidsdag?</li>
                                <li className={"margin-bunn-2em"}>Hva vil du oppleve som god støtte?</li>

                                <li>Hva kan jeg som leder hjelpe deg med, når det gjelder arbeidsoppgaver?</li>
                                <li>Hvordan kan jeg som leder hjelpe deg med å få en mindre stressende arbeidsdag?</li>
                            </ul>
                        </div>
                        <div className={"gra-avrundet-boks"}>
                            <strong>Løsninger</strong>
                            <ul>
                                <li>Hvilke av arbeidsoppgavene dine kan du utføre med tilrettelegging?</li>
                                <li>Hvilke alternative arbeidsoppgaver kan du utføre?</li>
                                <li>Hvordan bør tiden disponeres?</li>
                                <li>Hvordan kan endringer i tempo, arbeidstid eller arbeidssted øke mulighetene for arbeid?</li>
                                <li>Hvordan bør arbeidsdagen se ut dersom du skal kunne klare den, helt eller delvis?</li>
                                <li>Hvilke løsninger ser du for deg?</li>
                                <li>Hvordan vil den ideelle arbeidssituasjonen være for deg akkurat nå?</li>
                                <li>Hvilke tiltak bør vi prøve først?</li>
                            </ul>
                        </div>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel unikId={"planleggVeienVidereSammen"} tittel={"Planlegg veien videre sammen"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <h3>Oppsummer i felleskap</h3>
                        <p>
                            En samtale om arbeidssituasjonen avsluttes med at du og medarbeideren oppsummerer det dere er blitt enige om og at dere lager en plan for videre oppfølging.
                        </p>

                        <strong>Tips:</strong>
                        <p>
                            Det er lurt med flere korte oppsummeringer til hvert punkt dere har avtalt. Bruk spørsmål som kan besvares med ja eller nei for å sjekke at dere har felles forståelse.
                        </p>
                        <p>
                        Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en oppfølgingsplan.
                        </p>
                        <p>
                            <a href={"#"}>Les mer om oppfølgingsplan på nav.no.</a>
                        </p>
                        <strong>Vanlige tema i avslutningen:</strong>
                        <ul>
                            <li className={"margin-bunn-2em"}>dato for neste samtale og hvor ofte samtaler skal gjennomføres</li>

                            <li>avtaler, tilrettelegginger og tiltak</li>
                            <li>om tilretteleggingen er midlertidig eller permanent</li>
                            <li>hvor lenge de midlertidige tiltakene varer og tidsfrister</li>
                            <li className={"margin-bunn-2em"}>avklare om det er behov for å informere andre kollegaer om tilrettelegging som er avtalt</li>

                            <li>hvem som er ansvarlig for å følge opp</li>
                            <li>om det er behov for videre avklaring eller hjelp fra andre</li>
                        </ul>
                        <p>
                            Av og til blir du og medarbeideren ikke enige om løsningene og det er greit.  Da dokumenterer du begges synspunkter i oppsummeringen eller oppfølgingsplanen.
                        </p>
                        <p>
                            <strong>Tips:</strong> gjennomfør flere samtaler regelmessig.
                        </p>
                    </EkspanderbartInfopanel>
                    <h2>
                        Mer inspirasjon og gode grep
                    </h2>
                    <EkspanderbartInfopanel unikId={"enkleTipsForDigitaleSamtaler"} tittel={"Enkle tips for digitale samtaler"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <ul>
                            <li>Husk forberedelse og struktur også i digitale samtaler.</li>
                            <li>Bli enige om tittel på avtalen når du bruker digital innkalling og digitale møterom.</li>
                            <li>La kamera være på.</li>
                            <li>Det er bedre med flere korte, enn en lang digital samtale.</li>
                            <li>Digitale samtaler trenger trygghet og gode relasjoner.</li>
                            <li>Gi medarbeideren rom til å fortelle, tål pauser og stillhet.</li>
                            <li>Bruk sikre digitale verktøy for å ivareta personvern og taushetsplikt</li>
                            <li>Hvis dere har mulighet, kan dere skrive referat eller oppfølgingsplan sammen og underveis i samtalen.</li>
                        </ul>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel unikId={"godeGrepForAByggeRelasjoner"} tittel={"Gode grep for å bygge relasjoner"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <ul>
                            <li>Bruk tid på å bli kjent med alle dine medarbeidere.</li>
                            <li>Hvem er du i møte med den enkelte medarbeideren?</li>
                            <li>Hva slags relasjon har dere?</li>
                            <li>Vær forutsigbar.</li>
                            <li>Vis at du har tillit til medarbeideren.</li>
                            <li>Vær en støttende leder.</li>
                            <li>Be om tilbakemelding slik at du kan lære og utvikle deg som leder.</li>
                        </ul>
                    </EkspanderbartInfopanel>
                    <EkspanderbartInfopanel unikId={"tipsOmTilrettelegging"} tittel={"Tips om tilrettelegging"} panelLestSituasjon={"ulest"} callBack={()=>{}}>
                        <h3>Bruk eller lag oversikt over tilretteleggingsmuligheter på egen arbeidsplass.</h3>
                        <p>
                            Du og medarbeideren din vil raskere finne løsninger sammen hvis dere møtes i samtalen
                            med gjensidige forventninger til hva som er mulig.
                        </p>
                        <p>
                            Vi anbefaler arbeidsplasser å ha oversikt over hvilke tilretteleggingsmuligheter som finnes.
                        </p>
                        <p>
                            Oversikten bør utarbeides sammen med medarbeiderne dine eller sammen med verneombud og
                            tillitsvalgte. Hensikten er en felles vurdering av hvilken tilrettelegging er mulig hos dere.
                        </p>
                        <ul>
                            <li><strong>Hvilke tilretteleggingsmuligheter finnes på deres arbeidsplass og ellers i organisasjonen?</strong></li>
                            <li><strong>Hvor går grensene for ditt handlingsrom til å lage avtaler? Er det behov for å gjøre avklaringer?</strong></li>
                        </ul>
                        <strong>Dette kan du gjøre:</strong>
                        <div className={"infoPanel-kolonner"}>
                            <div className={"gra-avrundet-boks"}>
                                <strong>på kort sikt:</strong>
                                <ul>
                                    <li className={"margin-bunn-2em"}>
                                        Undersøk om det finnes en oversikt over tilretteleggingsmuligheter for din arbeidsplass,
                                        hvis dere har en personalavdeling kan disse ofte hjelpe deg
                                    </li>
                                    <li>
                                        Vurder om du bør dele oversikt over tilretteleggingsmuligheter med medarbeideren før samtalen
                                    </li>
                                </ul>
                            </div>
                            <div className={"gra-avrundet-boks"}>
                                <strong>over tid og som kontinuerlig arbeid:</strong>
                                <ul>
                                    <li className={"margin-bunn-2em"}>
                                        Lag en liste med tilretteleggingsmuligheter <a href={"#"}>Gå til beskrivelse av prosess hos idebanken.</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h3>Lær mer om tilrettelegging</h3>

                        <strong>Dette kan du gjøre:</strong>
                        <div className={"infoPanel-kolonner margin-bunn-2em"}>
                            <div className={"gra-avrundet-boks"}>
                                <strong>på kort sikt:</strong>
                                <ul>
                                    <li className={"margin-bunn-2em"}>
                                        <a href={"#"}>
                                            Les mer om arbeidsgivers plikter til å tilrettelegge på arbeidsplassen hos arbeidstilsynet.
                                        </a>
                                    </li>
                                    <li className={"margin-bunn-2em"}>
                                        NAV tilbyr nettkurs  (12 min) om arbeidsgivers tilretteleggingsplikt og medarbeideres medvirkningsplikt i forbindelse med sykefraværsoppfølging. <a href={"#"}>Gå til nettkurs.</a>
                                    </li>
                                    <li className={"margin-bunn-2em"}>
                                        <a href={"#"}>Les mer om tilrettelegging i sykefraværsoppfølging</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Les mer om NAVs økonomiske virkemidler</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={"gra-avrundet-boks"}>
                                <strong>over tid og som kontinuerlig arbeid:</strong>
                                <ul>
                                    <li className={"margin-bunn-2em"}>
                                        Lag en plan for gjennomføring av aktiviteter hvis du ikke har tid til å gjennomføre alle nå.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </EkspanderbartInfopanel>
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

