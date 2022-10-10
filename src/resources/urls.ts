export const OKONOMISKE_VIRKEMIDLER =
    'https://arbeidsgiver.nav.no/veiviserarbeidsgiver/tilrettelegging';
export const OPPFOLGNINGSPLAN =
    'https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/oppfolgingsplan_kap';
export const FOLGE_OPP_TILRETTELEGGING =
    'https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/tilrettelegging_kap';
export const NETTKURS = 'https://vimeo.com/showcase/8652435/video/573965951';
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

export const GODE_GREP_FOR_AA_BYGGE_RELASJONER =
    '#ekspanderbart-infopanel__godeGrepForAByggeRelasjoner-base';
export const ENKLE_TIPS_FOR_DIGITALE_SAMTALER =
    '#ekspanderbart-infopanel__enkleTipsForDigitaleSamtaler-base';
export const GJENNOMFOR_SAMTALEN = '#GjennomforSamtalen';
export const ARBEIDSGIVERLOS_ANSATTE_SOM_SLITTER_PSYKISK =
    'https://www.nav.no/no/nav-og-samfunn/samarbeid/arbeid-og-psykisk-helse/hva-er-en-arbeidsgiverlos';
export const FILM_OM_PSYKISK_HELSE = 'https://vimeo.com/626190972';
export const IDEBANKEN_PSYKISK_HELSE = 'https://mag.idebanken.org/psykisk-helse/';


export type ReferrerUrl = string | undefined;
export type ReferrerApplikasjon =
    | 'oppfolgingsplanarbeidsgiver'
    | 'forebygge-sykefravaer'
    | 'sykefravarsstatistikk'
    | 'UKJENT_REFERRER'
    | undefined;

export const getReferrerUrlFraUrlMedQueryParameter = (
    urlMedReferrerSomQueryParameter: string
): ReferrerUrl => {
    return urlMedReferrerSomQueryParameter.split(/(?:referer|referrer)=/)?.[1];
};

const kjenteApplikasjoner: string[] = [
    'oppfolgingsplanarbeidsgiver',
    'forebygge-sykefravaer',
    'sykefravarsstatistikk',
];

export const utleddApplikasjonsnavnFraUrl = (referrerUrl: ReferrerUrl): ReferrerApplikasjon => {
    if (referrerUrl === undefined) {
        return undefined;
    }
    let resultat: ReferrerApplikasjon = 'UKJENT_REFERRER';

    for (let app of kjenteApplikasjoner) {
        if (referrerUrl.includes(app)) {
            resultat = app as ReferrerApplikasjon;
            break;
        }
    }

    return resultat;
};
