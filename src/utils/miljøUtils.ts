export const LOCAL = 'local';
export const LABS_GCP = 'labs-gcp';
export const DEV_GCP = 'dev-gcp';
export const PROD_GCP = 'prod-gcp';
export type MILJØ = typeof LOCAL | typeof LABS_GCP | typeof DEV_GCP | typeof PROD_GCP;

export const getMiljø = (): MILJØ => {
    if (typeof window === "undefined") {
         return LOCAL;
    }
    const hostname = window.location.hostname;
    if (hostname.includes('arbeidsgiver.nav.no')) {
        return PROD_GCP;
    }
    if (hostname.includes('arbeidsgiver-gcp.dev.nav.no/')) {
        return DEV_GCP;
    }
    if (hostname.includes('arbeidsgiver.labs.nais.io')) {
        return LABS_GCP;
    }
    return LOCAL;
};
