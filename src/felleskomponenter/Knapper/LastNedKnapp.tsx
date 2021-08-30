import { Download } from '@navikt/ds-icons';
import { css } from 'linaria';
import logEvent from '../../amplitude/amplitude';
import classNames from 'classnames';
import { Link } from '@navikt/ds-react';
import React from 'react';

export default function LastNedKnapp(props: { lenketekst: string; href: string; filtype: string }) {
    const loggKlikkPåSkrivUtKnapp = (lenketekst: string) => {
        logEvent('knapp', {
            label: lenketekst,
            funksjon: 'last-ned-fil',
        });
    };
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
            download={props.filtype}
            onClick={() => loggKlikkPåSkrivUtKnapp(props.lenketekst)}
        >
            <Download />
            {props.lenketekst}
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
