import { useCookies } from 'react-cookie';
import {
    kanSendeIaTjenesteMetrikker,
    sendInnloggetIATjenesteMetrikk,
    sendUinnloggetIATjenesteMetrikk,
    setIaTjenesterMetrikkErSendt,
} from './ia-tjeneste-metrikker';
import { hentOrgnrFraLocalStorage } from './localStorage';

export const useSendIaTjenesterMetrikker: () => () => void = () => {
    const orgnr = hentOrgnrFraLocalStorage();
    const SAMTALESTOTTE_COOKIE = 'samtalestotte-arbeidsgiver';
    const [cookies, setCookie] = useCookies([SAMTALESTOTTE_COOKIE]);
    const sendtStatistikk = cookies[SAMTALESTOTTE_COOKIE]?.sendtStatistikk;

    return () => {
        if (!kanSendeIaTjenesteMetrikker(sendtStatistikk)) {
            return;
        }
        if (orgnr) {
            sendInnloggetIATjenesteMetrikk(orgnr).then((erMetrikkSendt) => {
                setIaTjenesterMetrikkErSendt(erMetrikkSendt, (value, options) => setCookie(SAMTALESTOTTE_COOKIE, value, options));
            });
        } else {
            sendUinnloggetIATjenesteMetrikk().then((erMetrikkSendt) => {
                setIaTjenesterMetrikkErSendt(erMetrikkSendt, (value, options) => setCookie(SAMTALESTOTTE_COOKIE, value, options));
            });
        }
    };
};
