import React, {FunctionComponent, ReactNode} from 'react';
import Lenke from 'nav-frontend-lenker';
import logEvent from '../../amplitude/amplitude';
import {LenkepanelBase} from "nav-frontend-lenkepanel";

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
    lenketekst
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
        <LenkepanelBase onClick={() => logLenke(href, lenketekst)} href={href} className={className}>
            {children}
        </LenkepanelBase>
    );
};

export default LoggbarLenkepanelBase;
