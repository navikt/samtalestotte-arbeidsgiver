import React, { FunctionComponent } from 'react';
import { Link } from '@navikt/ds-react'
import logEvent from '../../amplitude/amplitude';

type LoggbarLenkeProps = {
    href: string;
    className?: string;
    children: string;
};

const LoggbarLenke: FunctionComponent<LoggbarLenkeProps> = ({
    children,
    href,
    className,
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
    return (
        <Link onClick={() => logLenke(href, children)} href={href} className={className}>
            {children}
        </Link>
    );
};

export default LoggbarLenke;
