import { Download } from '@navikt/ds-icons';
import { css } from 'linaria';
import logEvent from '../../amplitude/amplitude';
import classNames from 'classnames';
import { Link } from '@navikt/ds-react';
import React from 'react';
import { ETT_DØGN_I_SEKUNDER, SCREEN_SM_MIN } from '../../utils/konstanter';
import {
    kanSendeInnloggetIaTjenesteMetrikker, kanSendeIaTjenesteMetrikker,
    sendInnloggetIATjenesteMetrikk,
    sendUinnloggetIATjenesteMetrikk, sendIaTjenesterMetrikker,
} from '../../utils/ia-tjeneste-metrikker';
import { useCookies } from 'react-cookie';
import {Cookie, CookieSetOptions} from "universal-cookie";

export default function LastNedKnapp(props: {
    knappetekst: string;
    href: string;
    filnavn?: string;
    label: string;
}) {
    const [cookies, setCookies] = useCookies(['samtalestotte', 'samtalestotte-podlet']);

    const loggKlikkPåLastNedKnapp = (label: string) => {
        sendIaTjenesterMetrikker(
            cookies['samtalestotte-podlet']?.orgnr,
            cookies['samtalestotte-podlet']?.altinnRettighet,
            cookies.samtalestotte?.sendtStatistikk,
            setCookies
        );
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
