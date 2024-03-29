import {
    DEN_VIKTIGE_SAMTALEN,
    ENKLE_TIPS_FOR_DIGITALE_SAMTALER,
    GJENNOMFOR_SAMTALEN,
    GODE_GREP_FOR_AA_BYGGE_RELASJONER,
    KVALITETEN_PAA_SYKEFRAVAERSRUTINENE,
    OPPFOLGNINGSPLAN,
    RETTNINGSLINJER_FOR_SYKEFRAVAERSOPPFOLGNING,
} from './urls';
import { DocumentElement, Panel } from '../dokumentgenerator/domainInterfaces';

const slikSkaperDuGodeSamtaler: (DocumentElement | object)[] = [
    { type: 'BigHeader', content: 'Slik skaper du gode samtaler' },
    {
        type: 'DownloadButtons',
        title: {
            type: 'SmallHeader',
            level: 4,
            content: 'Last ned verktøyet og rediger selv:',
            id: 'Last ned verktøyet og rediger selv',
        },
    },
    {
        type: 'Paragraph',
        content: [{ type: 'Text', content: 'Som arbeidsgiver er du ansvarlig for:', bold: true }],
    },
    {
        type: 'List',
        content: [
            ['å forebygge og følge opp sykefravær'],
            ['å gjennomføre og dokumentere samtaler med medarbeidere'],
            ['å sikre at medarbeideren får bidra til å finne løsninger'],
        ],
    },
    { type: 'MediumHeader', content: 'Forbered deg ved å:' },
];

const skapeGodeRammer: (Panel | object)[] = [
    {
        type: 'Panel',
        title: 'Skape gode rammer',
        content: [
            { type: 'MediumHeader', content: 'Gode samtaler forutsetter trygghet' },
            {
                type: 'Paragraph',
                content:
                    'Gode relasjoner til medarbeiderne og forutsigbare rammer skaper trygghet. Å vise forståelse i møte med medarbeideren setter gode forutsetninger for samarbeidet videre.',
            },
            {
                type: 'List',
                content: [
                    ['Hvordan ville du selv likt å bli møtt?'],
                    [
                        'Hvordan er din relasjon og holdning til medarbeideren, og hvordan kan dette påvirke dialogen?',
                    ],
                    ['Hvor trygg føler du deg på å gjennomføre samtaler?'],
                ],
            },
            {
                type: 'SmallHeader',
                content: 'Dette kan du gjøre:',
                id: 'Dette kan du gjørde i Gode samtaler forutsetter trygghet',
            },
            {
                type: 'InfoBox',
                content: [
                    {
                        type: 'SmallHeader',
                        content: 'på kort sikt:',
                        id: 'på kort sikt i Gode samtaler forutsetter trygghet',
                    },
                    {
                        type: 'List',
                        content: [
                            [
                                {
                                    type: 'Paragraph',
                                    inline: true,
                                    content: [
                                        'Planlegg bruk av samtaleteknikker for å sikre medvirkning i samtalen. ',
                                        {
                                            type: 'Link',
                                            url: DEN_VIKTIGE_SAMTALEN,
                                            content:
                                                'Les mer i heftet «Den viktige samtalen» hos idebanken.',
                                        },
                                    ],
                                },
                            ],
                            [
                                'Be om veiledning før samtalen. Veiledning kan du få fra kollegaer, bedriftshelsetjenesten, NAV eller andre med kompetanse på samtaler.',
                            ],
                        ],
                    },
                ],
            },
            {
                type: 'InfoBox',
                content: [
                    {
                        type: 'SmallHeader',
                        content: 'over tid og som kontinuerlig arbeid:',
                        id: 'over tid og som kontinuerlig arbeid i Gode samtaler forutsetter trygghet',
                    },
                    {
                        type: 'List',
                        content: [
                            [
                                {
                                    type: 'Paragraph',
                                    inline: true,
                                    content: [
                                        'Lær mer om samtaler og samtaleteknikker. ',
                                        {
                                            type: 'Link',
                                            url: DEN_VIKTIGE_SAMTALEN,
                                            content:
                                                'Les mer i heftet «Den viktige samtalen» hos idebanken.',
                                        },
                                    ],
                                },
                            ],
                            [
                                {
                                    type: 'Paragraph',
                                    inline: true,
                                    content: [
                                        'Jobb aktivt med å bygge trygge relasjoner til alle dine medarbeidere. ',
                                        {
                                            type: 'Link',
                                            url: GODE_GREP_FOR_AA_BYGGE_RELASJONER,
                                            content:
                                                'Se «Gode grep for å bygge relasjoner» lengre ned på siden.',
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                ],
            },
            { type: 'HorizontalLine' },
            { type: 'Paragraph', content: [{ type: 'Text', content: '', lineBreak: 1 }] },
            {
                type: 'MediumHeader',
                content:
                    'Gode rutiner effektiviserer arbeidet og skaper forutsigbarhet for deg og din medarbeider.',
            },
            {
                type: 'Paragraph',
                content:
                    'Rutiner bør evalueres og justeres hvis de ikke bidrar til forutsigbarhet.',
            },
            {
                type: 'List',
                content: [
                    [
                        'Hvordan bidrar rutiner for sykefravær til forutsigbarhet rundt oppgaver og ansvar i din virksomhet?',
                    ],
                ],
            },
            {
                type: 'SmallHeader',
                content: 'Dette kan du gjøre:',
                id: 'Dette kan du gjørde i Gode Rutiner',
            },
            {
                type: 'InfoBox',
                content: [
                    {
                        type: 'SmallHeader',
                        content: 'på kort sikt:',
                        id: 'på kort sikt i Gode rutiner',
                    },
                    {
                        type: 'List',
                        content: [
                            [
                                'Bruk rutinene i din virksomhet for å skape forutsigbarhet for deg og medarbeideren.',
                            ],
                            [
                                'Finn ut om du kan få hjelp av noen i din virksomhet eller i interne systemer.',
                            ],
                        ],
                    },
                ],
            },
            {
                type: 'InfoBox',
                content: [
                    {
                        type: 'SmallHeader',
                        content: 'over tid og som kontinuerlig arbeid:',
                        id: 'over tid og som kontinuerlig arbeid i gode rutiner',
                    },
                    {
                        type: 'List',
                        content: [
                            [
                                {
                                    type: 'Paragraph',
                                    inline: true,
                                    content: [
                                        'Evaluer rutinene dine. ',
                                        {
                                            type: 'Link',
                                            url: KVALITETEN_PAA_SYKEFRAVAERSRUTINENE,
                                            content: 'Gå til sjekkliste hos idébanken.',
                                        },
                                    ],
                                },
                            ],
                            [
                                {
                                    type: 'Paragraph',
                                    inline: true,
                                    content: [
                                        'Utarbeid rutiner for sykefravær. ',
                                        {
                                            type: 'Link',
                                            url: RETTNINGSLINJER_FOR_SYKEFRAVAERSOPPFOLGNING,
                                            content:
                                                'Les mer om hvordan dere kan lage rutiner hos Idébanken.',
                                        },
                                    ],
                                },
                            ],
                            ['Informer alle ansatte om rutinene og hvor de finner dem.'],
                        ],
                    },
                ],
            },
            { type: 'SmallHeader', content: 'Tips:', id: 'Tips i gode rutiner' },
            {
                type: 'Paragraph',
                content:
                    'Arbeidet med rutiner bør settes inn i arbeidsplassens plan for å forebygge sykefravær slik at du kan dokumentere arbeidet.',
            },
        ],
    },
];

const planleggeInnholdISamtalen: (Panel | object)[] = [
    {
        type: 'Panel',
        title: 'Planlegge innhold i samtalen',
        content: [
            {
                type: 'Paragraph',
                content:
                    'Legg en plan for hva du ønsker å oppnå og hvordan du kan gjennomføre samtalen. Husk å lytte til medarbeiderens behov.',
            },
            {
                type: 'List',
                content: [
                    [
                        { type: 'Text', content: 'Hva er dine mål med samtalen?', bold: true },
                        {
                            type: 'Text',
                            content: 'Noter ned målet, og ha det framme når du er i samtalen.',
                            lineBreak: 1,
                        },
                        { type: 'Text', content: 'Noen eksempler på mål kan være:', lineBreak: 1 },
                        {
                            type: 'List',
                            content: [
                                ['Skape trygghet og tillit'],
                                ['Beholde kontakt'],
                                ['Planlegge drift'],
                                [
                                    'Avklare om målet er å komme tilbake helt eller delvis til egen stilling',
                                ],
                                ['Starte en dialog om tilrettelegging'],
                                [
                                    'Avklare om det er behov for ny, endret eller mer kompetanse hos medarbeideren',
                                ],
                            ],
                        },
                    ],
                ],
            },
            {
                type: 'List',
                content: [
                    [
                        {
                            type: 'Paragraph',
                            inline: true,
                            content: [
                                {
                                    type: 'Text',
                                    content: 'Hvor trygg er du når du skal strukturere samtalen? ',
                                    bold: true,
                                },
                                {
                                    type: 'Text',
                                    content: 'Velg tema og hjelpespørsmål lenger ned på siden. ',
                                },
                                { type: 'Text', content: '', lineBreak: 0 },
                                {
                                    type: 'Link',
                                    url: GJENNOMFOR_SAMTALEN,
                                    content:
                                        'Klikk her for å gå til avsnittet som beskriver hvordan du gjennomfører samtalen.',
                                },
                            ],
                        },
                    ],
                ],
            },
            {
                type: 'List',
                content: [
                    [
                        { type: 'Text', content: 'Hva har du observert?', bold: true },
                        {
                            type: 'Text',
                            content:
                                'Vær konkret og tydelig på dine observasjoner. Dette gjør det enklere å ta opp temaer som er vanskelige.',
                            lineBreak: 1,
                        },
                        {
                            type: 'Text',
                            content: 'Eksempler på observasjoner kan være:',
                            lineBreak: 1,
                        },
                        {
                            type: 'List',
                            content: [
                                ['Endringer i utførelsen av arbeidsoppgaver'],
                                ['Endring i atferd'],
                                ['Økning, endring eller mønster i fravær'],
                            ],
                        },
                    ],
                ],
            },
        ],
    },
];

const forberedeMedarbeiderenDin = [
    {
        type: 'Panel',
        title: 'Forberede medarbeideren din',
        content: [
            {
                type: 'List',
                content: [
                    ['Avtal tid og sted som passer deg og medarbeideren.'],
                    [
                        'Samtalen kan gjennomføres digitalt eller utenfor arbeidsplassen hvis det passer best.',
                    ],
                    [
                        {
                            type: 'Paragraph',
                            inline: true,
                            content: [
                                {
                                    type: 'Link',
                                    url: ENKLE_TIPS_FOR_DIGITALE_SAMTALER,
                                    content:
                                        'Les mer om «Enkle tips for digitale samtaler» lenger ned på siden.',
                                },
                            ],
                        },
                    ],
                    [
                        'Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når begge er forberedt, blir det enklere å finne løsninger sammen.',
                    ],
                    [
                        'Du kan sende tema eller spørsmål til medarbeideren på forhånd. Du finner gode eksempler som du kan velge fra i neste avsnitt, som heter «Gjennomfør samtalen ved å».',
                    ],
                ],
            },
        ],
    },
];

const gjennomførSamtalenVedÅ = [
    { type: 'MediumHeader', content: 'Gjennomfør samtalen ved å:', id: 'GjennomforSamtalen' },
];

const innledeSamtalen = [
    {
        type: 'Panel',
        title: 'Innlede samtalen',
        content: [
            {
                type: 'Paragraph',
                content:
                    'Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt. Rammene hjelper dere med å holde fokus og tid.',
            },
            {
                type: 'Paragraph',
                content: [{ type: 'Text', content: 'Vanlige tema i innledning:', bold: true }],
            },
            {
                type: 'List',
                content: [
                    ['ønske velkommen'],
                    ['informere om tidsrammene for møtet'],
                    ['informere om målet med møtet'],
                    ['gå igjennom agenda'],
                    ['spørre om medarbeideren har innspill til mål og agenda'],
                ],
            },
        ],
    },
];

const snakkeOmArbeid = [
    {
        type: 'Panel',
        title: 'Snakke om arbeid',
        content: [
            {
                type: 'MediumHeader',
                content:
                    'En samtale for å forebygge eller følge opp sykefravær handler om medarbeideren.',
            },
            {
                type: 'Paragraph',
                content:
                    'Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene og arbeidsdagen oppleves.',
            },
            { type: 'SmallHeader', content: 'Tips:', id: 'Tips i snakke om arbeid' },
            {
                type: 'List',
                content: [
                    ['Bruk åpne spørsmål med spørreord som hva, hvor, hvordan, hvem eller når.'],
                    [
                        'Unngå ordet «hvorfor». Hvorfor kan ofte oppleves som en anklage eller for å fordele skyld.',
                    ],
                    ['Tål stillhet slik at medarbeideren får tid til å tenke før svarene kommer.'],
                ],
            },
            {
                type: 'Paragraph',
                content: [
                    {
                        type: 'Text',
                        content: 'Vanlige tema i samtalen om arbeidssituasjonen:',
                        bold: true,
                    },
                ],
            },
            {
                type: 'List',
                content: [
                    ['arbeidsoppgaver'],
                    ['arbeidstid'],
                    ['samarbeid'],
                    ['arbeidsmiljø'],
                    ['tidligere tiltak'],
                    ['stillingsprosent'],
                ],
            },
            {
                type: 'SmallHeader',
                content: 'Eksempler på spørsmål:',
                id: 'Eksempler på spørsmål i snakke om arbeid',
            },
            {
                type: 'Paragraph',
                content: 'Velg noen av eksemplene som er relevante for akkurat denne samtalen.',
            },
            {
                type: 'InfoBox',
                content: [
                    { type: 'SmallHeader', content: 'Arbeidsoppgaver' },
                    {
                        type: 'List',
                        content: [
                            ['Hvordan vil du beskrive arbeidsdagen din?'],
                            ['Hvilke av arbeidsoppgavene dine er du frisk nok til å utføre?'],
                            ['Hvilke av arbeidsoppgavene dine er vanskelige å utføre?'],
                            ['Hvilke oppgaver trives du best med?'],
                        ],
                    },
                ],
            },
            {
                type: 'InfoBox',
                content: [
                    { type: 'SmallHeader', content: 'Arbeidsmiljø' },
                    {
                        type: 'List',
                        content: [
                            ['Hvordan vil du beskrive arbeidsmiljøet?'],
                            ['Hva synes du er positivt, og hva tenker du kan forbedres?'],
                            ['Hvordan vil du beskrive stressnivået?'],
                            ['Hvordan påvirker arbeidsmiljøet sykefraværet ditt?'],
                        ],
                    },
                ],
            },
            {
                type: 'InfoBox',
                content: [
                    { type: 'SmallHeader', content: 'Samarbeid og motivasjon' },
                    {
                        type: 'List',
                        content: [
                            ['Hvordan opplever du samarbeidet med kolleger/ledere?'],
                            ['Hva motiverer deg mest akkurat nå?'],
                            ['Hva oppfatter du som dine styrker nå?'],
                        ],
                    },
                ],
            },
        ],
    },
];

const finneLøsningerSammen = [
    {
        type: 'Panel',
        title: 'Finne løsninger sammen',
        content: [
            { type: 'MediumHeader', content: 'Hjelp medarbeideren med å finne løsninger.' },
            {
                type: 'Paragraph',
                content:
                    'La medarbeideren beskrive situasjonen og arbeidsoppgavene. Da kan det være enklere å se egne løsninger. Egne løsningsforslag gir økt motivasjon.',
            },
            { type: 'SmallHeader', content: 'Tips:', id: 'Tips i finne løsninger sammen' },
            {
                type: 'Paragraph',
                content:
                    'Snakk om det som skal skje framover i tid og på hvilke muligheter som finnes.',
            },
            { type: 'SmallHeader', content: 'Vanlige tema når dere finner løsninger sammen:' },
            {
                type: 'List',
                content: [
                    ['tilpasse arbeidsoppgaver eller arbeidsinnhold'],
                    ['tilpasse arbeidstid, arbeidstempo eller tidskrav'],
                    ['tilpasse organisering av arbeidet'],
                    ['tilpasse samarbeid og samhandling med andre'],
                    ['alternative arbeidsoppgaver'],
                ],
            },
            {
                type: 'List',
                content: [
                    ['behov for informasjon og tilbakemeldinger'],
                    ['arbeidsmiljø'],
                    ['kompetanse'],
                ],
            },
            {
                type: 'List',
                content: [
                    ['fysisk utforming av arbeidsplassen'],
                    ['hjelpemidler'],
                    ['andre forhold'],
                ],
            },
            {
                type: 'SmallHeader',
                content: 'Eksempler på spørsmål:',
                id: 'Eksempler på spørsmål i finne løsninger sammen',
            },
            {
                type: 'Paragraph',
                content: 'Velg noen av eksemplene som er relevante for akkurat denne samtalen.',
            },

            {
                type: 'InfoBox',
                content: [
                    { type: 'SmallHeader', content: 'Hvordan kan jeg som leder hjelpe deg?' },
                    {
                        type: 'List',
                        content: [
                            [
                                'Hva ville være god og støttende hjelp for deg i en travel arbeidsdag?',
                            ],
                            ['Hva vil du oppleve som god støtte?'],
                            [
                                'Hva kan jeg som leder hjelpe deg med, når det gjelder arbeidsoppgaver?',
                            ],
                            [
                                'Hvordan kan jeg som leder hjelpe deg med å få en mindre stressende arbeidsdag?',
                            ],
                        ],
                    },
                ],
            },
            {
                type: 'InfoBox',
                content: [
                    { type: 'SmallHeader', content: 'Løsninger' },
                    {
                        type: 'List',
                        content: [
                            ['Hvilke av arbeidsoppgavene dine kan du utføre med tilrettelegging?'],
                            ['Hvilke alternative arbeidsoppgaver kan du utføre?'],
                            ['Hvordan bør tiden disponeres?'],
                            [
                                'Hvordan kan endringer i tempo, arbeidstid eller arbeidssted øke mulighetene for arbeid?',
                            ],
                            [
                                'Hvordan bør arbeidsdagen se ut dersom du skal kunne klare den, helt eller delvis?',
                            ],
                            ['Hvilke løsninger ser du for deg?'],
                            ['Hvilke tiltak bør vi prøve først?'],
                        ],
                    },
                ],
            },
        ],
    },
];

const planleggeVeienVidereSammen = [
    {
        type: 'Panel',
        title: 'Planlegge veien videre sammen',
        content: [
            { type: 'MediumHeader', content: 'Oppsummer i felleskap.' },
            {
                type: 'Paragraph',
                content:
                    'En samtale avsluttes med at du og medarbeideren oppsummerer det dere er blitt enige om. Så lager dere en plan for videre oppfølging.',
            },
            { type: 'SmallHeader', content: 'Tips:', id: 'Tips i planelegge veien videre sammen.' },
            {
                type: 'Paragraph',
                content:
                    'Det er lurt med flere korte oppsummeringer til hvert punkt dere har avtalt. Bruk spørsmål som kan besvares med ja eller nei for å sjekke at dere har felles forståelse.',
            },
            {
                type: 'Paragraph',
                content: [
                    'Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en oppfølgingsplan. ',
                    {
                        type: 'Link',
                        url: OPPFOLGNINGSPLAN,
                        content: 'Les mer om oppfølgingsplan på nav.no.',
                    },
                ],
            },

            { type: 'SmallHeader', content: 'Vanlige tema i avslutningen:' },
            {
                type: 'List',
                content: [
                    ['dato for neste samtale og hvor ofte samtaler skal gjennomføres'],
                    ['avtaler, tilrettelegginger og tiltak'],
                    ['om tilretteleggingen er midlertidig eller permanent'],
                    ['hvor lenge de midlertidige tiltakene varer og tidsfrister'],
                    [
                        'avklare om det er behov for å informere andre kollegaer om tilrettelegging som er avtalt',
                    ],
                    ['hvem som er ansvarlig for å følge opp'],
                    ['om det er behov for videre avklaring eller hjelp fra andre'],
                ],
            },
            {
                type: 'Paragraph',
                content:
                    'Av og til blir du og medarbeideren ikke enige om løsningene og det er greit. Da dokumenterer du begges synspunkter i oppsummeringen eller oppfølgingsplanen.',
            },
            {
                type: 'Paragraph',
                content: [
                    { type: 'Text', content: 'Tips:', bold: true },
                    ' gjennomfør flere samtaler regelmessig.',
                ],
            },
        ],
    },
];

export const SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT = [
    ...slikSkaperDuGodeSamtaler,
    ...skapeGodeRammer,
    ...planleggeInnholdISamtalen,
    ...forberedeMedarbeiderenDin,
    ...gjennomførSamtalenVedÅ,
    ...innledeSamtalen,
    ...snakkeOmArbeid,
    ...finneLøsningerSammen,
    ...planleggeVeienVidereSammen,
];
