import { DownloadIcon } from '@navikt/aksel-icons';
import styles from './LastNedKnapp.module.css';
import logEvent from '../../amplitude/amplitude';
import classNames from 'classnames';
import { Link } from '@navikt/ds-react';
import React from 'react';
import { sendIaTjenesteMetrikk } from '../../utils/sendIaTjenesteMetrikk';

export default function LastNedKnapp(props: {
    knappetekst: string;
    href: string;
    filnavn?: string;
    label: string;
}) {
    const loggKlikkPåLastNedKnapp = (label: string) => {
        sendIaTjenesteMetrikk();
        logEvent('knapp', {
            label: label,
            funksjon: 'last-ned-fil',
        });
    };

    // Bestemmer navnet på fila som lastes ned. Hvis "true" beholdes opprinnelig filnavn.
    const download = props.filnavn ?? true;

    return (
        <Link
            className={classNames(
                styles.downloadButtonStyle,
                'navds-button',
                `navds-button--secondary`
            )}
            href={props.href}
            download={download}
            onClick={() => loggKlikkPåLastNedKnapp(props.label)}
        >
            <DownloadIcon title={'Nedlastingsikon'} fontSize="1.75rem" />
            {props.knappetekst}
        </Link>
    );
}
