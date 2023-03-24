import { frontendLogger } from './frontendLogger';
import { backendLogger } from './backendLogger';

export const predefinerteFeilmeldinger = {
    feilVedHentingAvDekoratør: 'Feilet med å hente dekoratør',
    brukerIkkeInloggetFeil: 'Nettverkskall feilet da bruker ikke er innlogget',
    brukerIkkeAutorisertFeil: 'Nettverkskall feilet da bruker ikke er Autorisert',
    feilVedNettverkskall: 'Det er oppstått en feil ved nettverkskall',
    klarteIkkeSendeInnloggetIaMetrikk: 'Klarte ikke å sende innlogget IA-tjenestemetrikk.',
};

// This logger is isomorphic, and can be imported from anywhere in the app
export const logger = typeof window !== 'undefined' ? frontendLogger() : backendLogger();
