import React, { FunctionComponent, ReactNode } from 'react';
import { LinkPanel } from '@navikt/ds-react';
import logEvent from '../../amplitude/amplitude';

type LoggbarLenkeProps = {
    href: string;
    className?: string;
    children: ReactNode;
    lenketekst: string;
};

const LoggbarLenkepanelBase: FunctionComponent<LoggbarLenkeProps> = ({
    children,
    href,
    className,
    lenketekst,
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
        <LinkPanel onClick={() => logLenke(href, lenketekst)} href={href} className={className}>
            <LinkPanel.Title>{children}</LinkPanel.Title>
        </LinkPanel>
    );
};

export default LoggbarLenkepanelBase;
