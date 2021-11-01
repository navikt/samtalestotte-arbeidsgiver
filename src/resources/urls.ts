export const TILBAKE = 'https://www.nav.no/no/bedrift';
export const OKONOMISKE_VIRKEMIDLER =
    'https://arbeidsgiver.nav.no/veiviserarbeidsgiver/tilrettelegge/du-onsker-a-tilrettelegge';
export const OPPFOLGNINGSPLAN =
    'https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/oppfolgingsplan_kap';
export const FOLGE_OPP_TILRETTELEGGING =
    'https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/tilrettelegging_kap';
export const NETTKURS = 'https://vimeo.com/showcase/6728595';
export const TILRETTELEGGING = 'https://www.arbeidstilsynet.no/arbeidsforhold/tilrettelegging/';
export const SLIK_LYKKES_DERE =
    'https://www.idebanken.org/kloke-grep/artikler/slik-lykkes-dere-med-tilrettelegging-pa-arbeidsplassen';
export const RETTNINGSLINJER_FOR_SYKEFRAVAERSOPPFOLGNING =
    'https://www.idebanken.org/kloke-grep/artikler/rutiner-og-retningslinjer-for-sykefravaersoppfolging';
export const KVALITETEN_PAA_SYKEFRAVAERSRUTINENE =
    'https://www.idebanken.org/kloke-grep/artikler/sjekk-kvaliteten-pa-sykefravaersrutinene';
export const DEN_VIKTIGE_SAMTALEN = 'https://mag.idebanken.org/denviktigesamtalen/';
export const KONTAKT_OSS = 'https://arbeidsgiver.nav.no/kontakt-oss/';
export const FOREBYGGE_SYKEFRAVAER = 'https://arbeidsgiver.nav.no/forebygge-sykefravaer/';
export const SYKEFRAVÆRSSTATISTIKK_KALKULATOR =
    'https://arbeidsgiver.nav.no/sykefravarsstatistikk/kalkulator';

export const GODE_GREP_FOR_AA_BYGGE_RELASJONER =
    '#ekspanderbart-infopanel__godeGrepForAByggeRelasjoner-base';
export const ENKLE_TIPS_FOR_DIGITALE_SAMTALER =
    '#ekspanderbart-infopanel__enkleTipsForDigitaleSamtaler-base';
export const GJENNOMFOR_SAMTALEN = '#GjennomforSamtalen';
export const OPPFØLGING_ANSATTE_SOM_SLITTER_PSYKISK =
    'https://www.nav.no/no/bedrift/oppfolging/har-du-ansatte-som-sliter-psykisk';
export const FILM_OM_PSYKISK_HELSE = 'https://vimeo.com/626190972';
export const IDEBANKEN_PSYKISK_HELSE = 'https://mag.idebanken.org/psykisk-helse/';

export const listeAvTillatteDomener = [
    TILBAKE,
    'https://arbeidsgiver.nav.no/sykefravarsstatistikk',
    'https://arbeidsgiver-q.nav.no/sykefravarsstatistikk',
    'https://arbeidsgiver.labs.nais.io/sykefravarsstatistikk',
    'https://arbeidsgiver.nav.no/forebygge-sykefravaer',
    'https://arbeidsgiver-gcp.dev.nav.no/forebygge-sykefravaer',
    'https://tjenester-q1.nav.no/oppfolgingsplanarbeidsgiver',
    'https://tjenester.nav.no/oppfolgingsplanarbeidsgiver',
    'https://oppfolgingsplanarbeidsgiver.herokuapp.com/',
];

export const erTilbakeURLTillat = (refUrl: string): boolean => {
    return (
        listeAvTillatteDomener.filter((tillattDomene) => refUrl.startsWith(tillattDomene)).length >
        0
    );
};

export const getVerifisertTilbakeURL = (url: string | null | undefined): string => {
    return url !== undefined && url !== null && url !== '' && erTilbakeURLTillat(url)
        ? url
        : TILBAKE;
};

export const utleddReferrerApplikasjonFraUrl = (url: string): string | undefined => {
    const referrerUtenDomene = url
        .split(/(?:referer|referrer)=(?:http|https):\/\//)?.[1]
        ?.split(/[\/?]/)?.[1];

    if (referrerUtenDomene === undefined) {
        return undefined;
    }
    const kjenteApplikasjoner = [
        'oppfolgingsplanarbeidsgiver',
        'forebygge-sykefravaer',
        'sykefravarsstatistikk',
    ];

    let resultat = 'UKJENT_REFERRER';
    for (let app of kjenteApplikasjoner) {
        if (referrerUtenDomene.startsWith(app)) {
            resultat = app;
            break;
        }
    }

    return resultat;
};
