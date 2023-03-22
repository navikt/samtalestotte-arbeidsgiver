export interface IatjenesteMetrikk {
    type: String;
    kilde: String;
}

export interface InnloggetIatjenesteMetrikk extends IatjenesteMetrikk {
    orgnr: String;
}

export const sendIaTjenesterMetrikker = (orgnr: string) => {
    if (orgnr !== undefined) {
        sendInnloggetIATjenesteMetrikk(orgnr);
    } else {
        sendUinnloggetIATjenesteMetrikk();
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
            return 'https://ia-tjenester-metrikker.dev.intern.nav.no';
    }
};

const iaTjenesterMetrikkerAPI = `${getIaTjenesterMetrikkerUrl()}/uinnlogget/mottatt-iatjeneste`;
const innloggetIaTjenesterMetrikkerAPI = `${getIaTjenesterMetrikkerUrl()}/innlogget/mottatt-iatjeneste`;

export const sendUinnloggetIATjenesteMetrikk = async () => {
    const iaTjenesteMetrikk: IatjenesteMetrikk = {
        kilde: 'SAMTALESTØTTE',
        type: 'DIGITAL_IA_TJENESTE',
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
export const sendInnloggetIATjenesteMetrikk = async (orgnr: String) => {
    const innloggetIaTjenesteMetrikk: InnloggetIatjenesteMetrikk = {
        kilde: 'SAMTALESTØTTE',
        type: 'DIGITAL_IA_TJENESTE',
        orgnr: orgnr,
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
            return true;
        } else {
            return sendUinnloggetIATjenesteMetrikk();
        }
    } catch (e) {
        return false;
    }
};
