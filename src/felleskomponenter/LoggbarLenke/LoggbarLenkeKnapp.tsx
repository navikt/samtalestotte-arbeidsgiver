import React, {FunctionComponent, ReactNode} from 'react';
import {Link} from '@navikt/ds-react'
import logEvent from '../../amplitude/amplitude';
import classNames from "classnames";
import {css} from "linaria";

type LoggbarLenkeProps = {
    href: string;
    className?: string;
    children: ReactNode;
    lenketekst: string;
    download?: any
};


export const LoggbarLenkeKnapp: FunctionComponent<LoggbarLenkeProps> = ({
    lenketekst,
    children,
    href,
    className,
    download
}: LoggbarLenkeProps) => {
    const logLenke = (url: string, lenketekst: string) => {
        if (window !== undefined) {
            logEvent('lenke', {
                'URL-fra': window.location.href,
                'URL-til': url,
                lenketekst: lenketekst,
            });
        }
    };
    return <Link
        className={classNames(className, knappStil, "navds-button", `navds-button--primary`, `navds-button--s`, "navds-body-short", "navds-body--s")}
        href={href}
        download={download}
        onClick={() => logLenke(href, lenketekst)}
    >
        {children}
    </Link>
}

export default LoggbarLenkeKnapp;
/**
 * STYLES
 */

const knappStil = css`
    text-decoration: none;
`