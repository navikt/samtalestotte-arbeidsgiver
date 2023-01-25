import { Download } from '@navikt/ds-icons';
import styles from './LastNedKnapp.module.css';
import logEvent from '../../amplitude/amplitude';
import classNames from 'classnames';
import { Link } from '@navikt/ds-react';
import React from 'react';
import { sendIaTjenesterMetrikker } from '../../utils/ia-tjeneste-metrikker';
import { useCookies } from 'react-cookie';
import { cookiesIApplikasjon, SamtalestøtteCookies } from '../../utils/cookiesUtils';

export default function LastNedKnapp(props: {
    knappetekst: string;
    href: string;
    filnavn?: string;
    label: string;
}) {
    const [cookies, setCookies] = useCookies(cookiesIApplikasjon);

    const loggKlikkPåLastNedKnapp = (label: string) => {
        sendIaTjenesterMetrikker(
            cookies[SamtalestøtteCookies.SAMTALESTØTTE_PODLET]?.orgnr,
            cookies[SamtalestøtteCookies.SAMTALESTØTTE_ARBEIDSGIVER]?.sendtStatistikk,
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
                styles.downloadButtonStyle,
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
            <Download title={"Nedlastingsikon"}/>
            {props.knappetekst}
        </Link>
    );
}
