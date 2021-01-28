import React, {FunctionComponent} from 'react';
import Lenke from 'nav-frontend-lenker';
import logEvent from '../../amplitude/amplitude';

type LoggbarLenkeProps = {
    href: string;
    className?: string;
    children: string;
}

const LoggbarLenke: FunctionComponent<LoggbarLenkeProps> = ({ children, href, className } : LoggbarLenkeProps) => {

    const logLenke = (url: string, lenketekst: string) => {
        if(window !== undefined) {
            logEvent("lenke", {
                "URL-fra": window.location.href,
                "URL-til": url,
                "lenketekst": lenketekst,
                "app": "Samtalestøtte-Arbeidsgiver"
            })
        }
    };
    return <Lenke onClick={() => logLenke(href, children)} href={href} className={className}>{children}</Lenke>
};

export default LoggbarLenke;
