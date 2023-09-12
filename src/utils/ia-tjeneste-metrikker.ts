import {
    MetrikkKilde,
    MetrikkType,
    sendIaMetrikk,
    getIaMetrikkerApiUrl,
} from '@navikt/ia-metrikker-client';
import { send } from 'process';

export interface IatjenesteMetrikk {
    type: string;
    kilde: string;
}

export interface InnloggetIatjenesteMetrikk extends IatjenesteMetrikk {
    orgnr: string;
}

const getIaTjenesterMetrikkerUrl = () => {
    if (typeof window === 'undefined') {
        return 'http://localhost:8080';
    }

    switch (window.location.hostname) {
        case 'localhost':
            return 'http://localhost:8080';
        case 'arbeidsgiver.nav.no':
            return 'https://arbeidsgiver.nav.no';
        default:
            return 'https://ia-tjenester-metrikker.intern.dev.nav.no';
    }
};

const iaTjenesterMetrikkerAPI = `${getIaTjenesterMetrikkerUrl()}/ia-tjenester-metrikker/uinnlogget/mottatt-iatjeneste`;

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
        console.warn('Klarte ikke å sende uinnlogget IA-tjenestemetrikk.');
        return false;
    }
};
export const sendInnloggetIATjenesteMetrikk = async (orgnr: string) => {
    return sendIaMetrikk(
        orgnr,
        MetrikkType.DIGITAL_IA_TJENESTE,
        MetrikkKilde.SAMTALESTØTTE,
        getIaMetrikkerApiUrl(getIaTjenesterMetrikkerUrl())
    ).catch(() => {
        console.warn('Klarte ikke å sende innlogget IA-tjenestemetrikk.');
        return sendUinnloggetIATjenesteMetrikk();
    });
};
