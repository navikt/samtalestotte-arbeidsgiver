import { Download } from '@navikt/ds-icons';
import { css } from 'linaria';
import logEvent from '../../amplitude/amplitude';
import classNames from 'classnames';
import { Link } from '@navikt/ds-react';
import React from 'react';
import { ETT_DØGN_I_SEKUNDER, SCREEN_SM_MIN } from '../../utils/konstanter';
import {
    kanSendeInnloggetIaTjenesteMetrikker, kanSendeUinnloggetIaTjenesteMetrikker,
    sendInnloggetIATjenesteMetrikk,
    sendUinnloggetIATjenesteMetrikk,
} from '../../utils/ia-tjeneste-metrikker';
import { useCookies } from 'react-cookie';

export default function LastNedKnapp(props: {
    knappetekst: string;
    href: string;
    filnavn?: string;
    label: string;
}) {
    const [cookies, setCookie] = useCookies(['samtalestotte', 'samtalestotte-podlet']);

    let antallForsøkSendTilIaTjenesterMetrikker = 0;
    // TODO finne ut om vi bør bruke async, await eller promise for at vi ikke bremser farten for knappen.
    const sendIaTjenesterMetrikker =  () => {
       kanSendeInnloggetIaTjenesteMetrikker(
            cookies['samtalestotte-podlet']?.orgnr ,
            cookies['samtalestotte-podlet']?.altinnRettighet ,
            cookies.samtalestotte?.sendtStatistikk
        ) &&
            sendInnloggetIATjenesteMetrikk(
                cookies['samtalestotte-podlet']?.orgnr,
                cookies['samtalestotte-podlet']?.altinnRettighet
            ).then((erMetrikkSendt) => {
                console.log('erMetrikkSendt:', erMetrikkSendt);
            });
        kanSendeUinnloggetIaTjenesteMetrikker(
            cookies.samtalestotte?.sendtStatistikk
        ) &&
            sendUinnloggetIATjenesteMetrikk().then((erMetrikkSendt) => {
                if (erMetrikkSendt) {
                    setCookie(
                        'samtalestotte',
                        { sendtStatistikk: 'ja' },
                        {
                            path: '/',
                            maxAge: ETT_DØGN_I_SEKUNDER,
                            sameSite: true,
                        }
                    );
                }
            });
            antallForsøkSendTilIaTjenesterMetrikker++;

    };
    const loggKlikkPåLastNedKnapp = (label: string) => {
        sendIaTjenesterMetrikker();
        logEvent('knapp', {
            label: label,
            funksjon: 'last-ned-fil',
        });
    };

    // Bestemmer navnet på fila som lastes ned. Hvis "true" beholdes opprinnelig filnavn.
    let download = props.filnavn ?? true;

    return (
        <Link
            className={classNames(
                downloadButtonStyle,
                'navds-button',
                `navds-button--secondary`,
                `navds-button--s`,
                'navds-body-short',
                'navds-body--s'
            )}
            href={props.href}
            download={download}
            onClick={() => loggKlikkPåLastNedKnapp(props.label)}
        >
            <Download />
            {props.knappetekst}
        </Link>
    );
}

const downloadButtonStyle = css`
  @media(min-width: ${SCREEN_SM_MIN}){
    width: 250px;
  }
  height: 60px;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  text-decoration: none;
  justify-content: center;
  padding: 10px 20px 10px 10px;

  :hover {
    svg {
      color: white;
    }
  }
`;
