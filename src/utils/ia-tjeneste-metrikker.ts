import { Cookie, CookieSetOptions } from 'universal-cookie';
import { ETT_DØGN_I_SEKUNDER } from './konstanter';
import { MetrikkKilde, MetrikkType, sendIaMetrikk } from '@navikt/ia-metrikker-client';

export interface IatjenesteMetrikk {
    type: string;
    kilde: string;
}

export interface InnloggetIatjenesteMetrikk extends IatjenesteMetrikk {
    orgnr: string;
}

export const setIaTjenesterMetrikkErSendt = (
    erMetrikkSendt: boolean,
    lagreCookie: (value: Cookie, options?: CookieSetOptions) => void
) => {
    if (erMetrikkSendt) {
        lagreCookie(
            { sendtStatistikk: 'ja' },
            {
                path: '/',
                maxAge: ETT_DØGN_I_SEKUNDER,
                sameSite: true,
            }
        );
    }
};

const getIaTjenesterMetrikkerUrl = () => {
    if (typeof window === 'undefined') {
        return 'http://localhost:8080/ia-tjenester-metrikker';
    }

    switch (window.location.hostname) {
        case 'localhost':
            return 'http://localhost:8080/ia-tjenester-metrikker';
        case 'arbeidsgiver.nav.no':
            return 'https://arbeidsgiver.nav.no/ia-tjenester-metrikker';
        default:
            return 'https://ia-tjenester-metrikker.intern.dev.nav.no/ia-tjenester-metrikker';
    }
};

const iaTjenesterMetrikkerAPI = `${getIaTjenesterMetrikkerUrl()}/uinnlogget/mottatt-iatjeneste`;
const innloggetIaTjenesterMetrikkerAPI = `${getIaTjenesterMetrikkerUrl()}/innlogget/mottatt-iatjeneste`;

export const kanSendeIaTjenesteMetrikker = (sendtStatistikk: string) =>
    sendtStatistikk === undefined || !sendtStatistikk;
export const sendUinnloggetIATjenesteMetrikk = async () => {
    const iaTjenesteMetrikk: IatjenesteMetrikk = {
        kilde: 'SAMTALESTØTTE',
        type: 'DIGITAL_IA_TJENESTE',
    };

    const settings = {
        method: 'POST',
        credentials: 'omit' as RequestCredentials,
        body: JSON.stringify(iaTjenesteMetrikk),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        const fetchResponse = await fetch(`${iaTjenesterMetrikkerAPI}`, settings);
        const data = await fetchResponse.json();
        return data.status === 'created';
    } catch (e) {
        return false;
    }
};
export const sendInnloggetIATjenesteMetrikk = async (orgnr: string) => {
    return sendIaMetrikk(
        orgnr,
        MetrikkType.DIGITAL_IA_TJENESTE,
        MetrikkKilde.SAMTALESTØTTE,
        innloggetIaTjenesterMetrikkerAPI
    )
        .then(() => true)
        .catch(() => {
            console.warn('Klarte ikke å sende innlogget IA-tjenestemetrikk.');
            return false;
        });
};
