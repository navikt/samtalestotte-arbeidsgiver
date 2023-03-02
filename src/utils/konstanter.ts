const ARBEIDSGIVER_URL = 'https://arbeidsgiver.nav.no';

export const BASE_PATH = '/samtalestotte';
export const PROD_URL = ARBEIDSGIVER_URL + BASE_PATH;
export const METRIKKER_API_PATH = BASE_PATH + '/metrikker';

export const AUTH_URLS = {
    LOCAL: undefined,
    LABS_GCP: undefined,
    DEV_GCP: "https://www.dev.nav.no/person/nav-dekoratoren-api/auth",
    PROD_GCP: "https://www.nav.no/person/nav-dekoratoren-api/auth",
}
export const AUTH_PROD_GCP_URL = "https://www.nav.no/person/nav-dekoratoren-api/auth";
export const AUTH_DEV_GCP_URL = "https://www.dev.nav.no/person/nav-dekoratoren-api/auth";
export const AUTH_LABS_URL = undefined;
export const AUTH_LOCAL_URL = undefined;
export const MINSIDE_ARBEIDSGIVER_URLS = {
    LOCAL: 'https://arbeidsgiver.nav.no/min-side-arbeidsgiver/',
    LABS_GCP: 'https://arbeidsgiver.nav.no/min-side-arbeidsgiver/',
    DEV_GCP: 'https://arbeidsgiver-q.nav.no/min-side-arbeidsgiver/',
    PROD_GCP: 'https://arbeidsgiver.nav.no/min-side-arbeidsgiver/'
};

export const FOREBYGGE_FRAVÆR_URLS = {
    LOCAL: 'https://arbeidsgiver.nav.no/forebygge-fravar',
    LABS_GCP: 'https://arbeidsgiver.nav.no/forebygge-fravar',
    DEV_GCP: 'https://forebygge-fravar.dev.nav.no/forebygge-fravar',
    PROD_GCP: 'https://arbeidsgiver.nav.no/forebygge-fravar'
};

export const SAMTALESTOTTE_URLS = {
    LOCAL: 'http://localhost:3005/samtalestotte',
    LABS_GCP: 'https://arbeidsgiver.labs.nais.io/samtalestotte',
    DEV_GCP: 'https://arbeidsgiver-gcp.dev.nav.no/samtalestotte',
    PROD_GCP: 'https://arbeidsgiver.nav.no/samtalestotte'
}


export const ETT_DØGN_I_SEKUNDER = 86400;
