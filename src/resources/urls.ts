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

export const listeAvTillatteRefererUrler = [
    new RegExp('^' + TILBAKE),
    new RegExp(
        '^((https):/)?/?(arbeidsgiver)([.]+(nav)+)([.]+(no))([/]+(sykefravarsstatistikk))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(arbeidsgiver-q)([.]+(nav)+)([.]+(no))([/]+(sykefravarsstatistikk))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(arbeidsgiver)([.]+(labs)+)([.]+(nais))([.]+(io))([/]+(sykefravarsstatistikk))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(arbeidsgiver)([.]+(nav)+)([.]+(no))([/]+(forebygge-sykefravaer))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(arbeidsgiver-gcp)([.]+(dev)+)([.]+(nav))([.]+(no))([/]+(forebygge-sykefravaer))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(tjenester-q1)([.]+(nav))([.]+(no))([/]+(oppfolgingsplanarbeidsgiver))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(oppfolgingsplanarbeidsgiver)([.]+(nais)+)([.]+(oera-q))([.]+(local))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(tjenester)([.]+(nav))([.]+(no))([/]+(oppfolgingsplanarbeidsgiver))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(oppfolgingsplanarbeidsgiver)([.]+(nais)+)([.]+(oera))([.]+(no))(.*)?(#[w-]+)?$'
    ),
    new RegExp(
        '^((https):/)?/?(oppfolgingsplanarbeidsgiver)([.]+(herokuapp)+)([.]+(com))([/]+(oppfolgingsplanarbeidsgiver))(.*)?(#[w-]+)?$'
    ),
];

export const erTilbakeURLTillat = (refUrl: string): boolean => {
    return listeAvTillatteRefererUrler.filter((regexp) => regexp.test(refUrl)).length > 0;
};

/**
 * Leser ut "referer" fra URL-er som eksplisitt inneholder dette (på formatet "referer=http(s)://<domene>/<referer>...")
 * Eksempel: Input "https://nav.no?referer=http://hei.com/X/Y" returnerer "X"
 *
 * @param url hvor referer leses ut fra. Undefined reurneres hvis ingen referer (eller referrer) kan finnes.
 */
export const hentReferrerFraUrl = (url: string): string | undefined => {
    return url.split(/(?:referer|referrer)=(?:http|https):\/\//)?.[1]?.split(/[\/?]/)?.[1];
};
