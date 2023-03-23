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
    const [cookies, setCookies] = useCookies([SAMTALESTOTTE_COOKIE]);
    const sendtStatistikk = cookies[SAMTALESTOTTE_COOKIE]?.sendtStatistikk;

    return () => {
        console.log('Vi er på første linje i funksjonen');
        console.log('orgnr er ', orgnr);
        console.log('send statistikk er ', sendtStatistikk);
        console.log('cookies er ', cookies);
        if (!kanSendeIaTjenesteMetrikker(sendtStatistikk)) {
            return;
        }
        if (orgnr) {
            sendInnloggetIATjenesteMetrikk(orgnr).then((erMetrikkSendt) => {
                setIaTjenesterMetrikkErSendt(erMetrikkSendt, setCookies);
            });
        } else {
            sendUinnloggetIATjenesteMetrikk().then((erMetrikkSendt) => {
                setIaTjenesterMetrikkErSendt(erMetrikkSendt, setCookies);
            });
        }
    };
};
