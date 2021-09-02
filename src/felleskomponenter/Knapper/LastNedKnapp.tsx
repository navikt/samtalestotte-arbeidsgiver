import { Download } from '@navikt/ds-icons';
import { css } from 'linaria';
import logEvent from '../../amplitude/amplitude';
import classNames from 'classnames';
import { Link } from '@navikt/ds-react';
import React from 'react';

export default function LastNedKnapp(props: {
    knappetekst: string;
    href: string;
    filnavn?: string;
    label: string;
}) {
    const loggKlikkPåLastNedKnapp = (label: string) => {
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
                `navds-button--primary`,
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
    width: 200px;
    padding: 10px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    text-decoration: none;

    :hover {
        svg {
            color: white;
        }
    }
`;
