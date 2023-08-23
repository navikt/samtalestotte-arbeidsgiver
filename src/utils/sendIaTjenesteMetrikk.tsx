import {
    sendInnloggetIATjenesteMetrikk,
    sendUinnloggetIATjenesteMetrikk,
} from './ia-tjeneste-metrikker';
import { hentOrgnrFraLocalStorage } from './localStorage';

export function sendIaTjenesteMetrikk() {
    const orgnr = hentOrgnrFraLocalStorage();

    if (orgnr) {
        sendInnloggetIATjenesteMetrikk(orgnr);
    } else {
        sendUinnloggetIATjenesteMetrikk();
    }
}
