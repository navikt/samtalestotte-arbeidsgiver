import {Cookie, CookieSetOptions} from "universal-cookie";
import {ETT_DØGN_I_SEKUNDER} from "./konstanter";

export interface IatjenesteMetrikk {
    type: String;
    kilde: String;
    tjenesteMottakkelsesdato: String;
}
export interface InnloggetIatjenesteMetrikk extends IatjenesteMetrikk {
    orgnr: String;
    altinnRettighet: String;
}

let antallForsøkSendTilIaTjenesterMetrikker = 0;

const setIaTjenesterMetrikkErSendt = (
    erMetrikkSendt: boolean,
    lagreCookie: (
        name: 'samtalestotte' | 'samtalestotte-podlet',
        value: Cookie,
        options?: CookieSetOptions
    ) => void
) => {
    if (erMetrikkSendt) {
        lagreCookie(
            'samtalestotte',
            { sendtStatistikk: 'ja' },
            {
                path: '/',
                maxAge: ETT_DØGN_I_SEKUNDER,
                sameSite: true,
            }
        );
    }
}

export const sendIaTjenesterMetrikker = (
    orgnr: string,
    altinnRettighet: string,
    sendtStatistikk: string,
    lagreCookieFunksjon: (
        name: 'samtalestotte' | 'samtalestotte-podlet',
        value: Cookie,
        options?: CookieSetOptions
    ) => void
) => {
    if (!kanSendeIaTjenesteMetrikker(sendtStatistikk)) {
        return;
    }

    if (kanSendeInnloggetIaTjenesteMetrikker(orgnr, altinnRettighet)) {
        sendInnloggetIATjenesteMetrikk(orgnr, altinnRettighet).then((erMetrikkSendt) => {
            setIaTjenesterMetrikkErSendt(erMetrikkSendt, lagreCookieFunksjon);
        });
    } else {
        sendUinnloggetIATjenesteMetrikk().then((erMetrikkSendt) => {
            setIaTjenesterMetrikkErSendt(erMetrikkSendt, lagreCookieFunksjon);
        });
    }
    antallForsøkSendTilIaTjenesterMetrikker++;
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
            return 'https://ia-tjenester-metrikker.dev.intern.nav.no';
    }
};

const iaTjenesterMetrikkerAPI = `${getIaTjenesterMetrikkerUrl()}/uinnlogget/mottatt-iatjeneste`;
const innloggetIaTjenesterMetrikkerAPI = `${getIaTjenesterMetrikkerUrl()}/innlogget/forenklet/mottatt-iatjeneste`;

export const tilIsoDatoMedUtcTimezoneUtenMillis = (dato: Date): String => {
    return dato.toISOString().split('.')[0] + 'Z';
};

export const kanSendeInnloggetIaTjenesteMetrikker = (
    orgnr: string,
    altinnRettighet: string
): Boolean => {
    return (
        orgnr !== undefined &&
        altinnRettighet !== undefined
    );
};

export const kanSendeIaTjenesteMetrikker = (sendtStatistikk: string): Boolean =>
    (sendtStatistikk === undefined || !Boolean(sendtStatistikk)) &&
    antallForsøkSendTilIaTjenesterMetrikker < 5;

export const sendUinnloggetIATjenesteMetrikk = async () => {
    const iaTjenesteMetrikk: IatjenesteMetrikk = {
        kilde: 'SAMTALESTØTTE',
        type: 'DIGITAL_IA_TJENESTE',
        tjenesteMottakkelsesdato: tilIsoDatoMedUtcTimezoneUtenMillis(new Date()),
    };

    const settings = {
        method: 'POST',
        credentials: 'omit',
        body: JSON.stringify(iaTjenesteMetrikk),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        // @ts-ignore
        const fetchResponse = await fetch(`${iaTjenesterMetrikkerAPI}`, settings);
        const data = await fetchResponse.json();
        return data.status === 'created';
    } catch (e) {
        return false;
    }
};
export const sendInnloggetIATjenesteMetrikk = async (orgnr: String, altinnRettighet: String) => {
    const innloggetIaTjenesteMetrikk: InnloggetIatjenesteMetrikk = {
        kilde: 'SAMTALESTØTTE',
        type: 'DIGITAL_IA_TJENESTE',
        tjenesteMottakkelsesdato: tilIsoDatoMedUtcTimezoneUtenMillis(new Date()),
        orgnr: orgnr,
        altinnRettighet: altinnRettighet,
    };

    const settings = {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(innloggetIaTjenesteMetrikk),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        // @ts-ignore
        const fetchResponse = await fetch(`${innloggetIaTjenesterMetrikkerAPI}`, settings);
        const data = await fetchResponse.json();

        if (data.status === 'created') {
            return true
        } else {
            return sendUinnloggetIATjenesteMetrikk();
        }
    } catch (e) {
        return false;
    }
};
