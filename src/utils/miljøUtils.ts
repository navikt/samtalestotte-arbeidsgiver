export const getMiljø = (): string => {
    if (typeof window === "undefined") {
        return 'local';
    }
    const hostname = window.location.hostname;
    if (hostname.includes('arbeidsgiver.nav.no')) {
        return 'prod-gcp';
    }
    if (hostname.includes('arbeidsgiver-gcp.dev.nav.no/')) {
        return 'dev-gcp';
    }
    if (hostname.includes('arbeidsgiver.labs.nais.io')) {
        return 'labs-gcp';
    }
    return 'local';
};
