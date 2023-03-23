import { PageBanner } from '../PageBanner/PageBanner';
import React, { useEffect, useRef } from 'react';
import { PROD_URL } from '../../utils/konstanter';
import { BodyShort } from '@navikt/ds-react';
import styles from './Layout.module.css';
import classNames from 'classnames';
import fellesStiler from '../../utils/fellesStiler.module.css';
import { SkrivUtKnapp } from '../Knapper/SkrivUtKnapp';
import { useCookies } from 'react-cookie';
import { sendIaTjenesterMetrikker } from '../../utils/ia-tjeneste-metrikker';
import {
    cookiesIApplikasjon,
    hentReferrerUrlFraCookies,
    SamtalestøtteCookies,
} from '../../utils/cookiesUtils';

export const Layout = ( props: {
    title: string;
    isFrontPage: boolean;
    logEvent: (eventName: string, data?: any) => Promise<any>;
    bannerIconUrl?: string;
    children: React.ReactChild[];
}) => {
    const layoutContentRef = useRef<HTMLDivElement>(null);
    const [cookies, setCookies] = useCookies(cookiesIApplikasjon);

    useEffect(() => {
        let usikkerRefUrl: string | null | undefined;
        if (window !== undefined) {
            if (new URLSearchParams(window.location.search).get('referer') !== null) {
                usikkerRefUrl = new URLSearchParams(window.location.search).get('referer');
            } else {
                usikkerRefUrl = hentReferrerUrlFraCookies(cookies);
            }
        }
    }, []);

    function loggUtskriftsklikk() {
        props.logEvent('knapp', {
            label: 'skriv-ut',
            funksjon: 'skriv-ut',
        });
        sendIaTjenesterMetrikker(
            cookies[SamtalestøtteCookies.SAMTALESTØTTE_PODLET]?.orgnr,
            cookies[SamtalestøtteCookies.SAMTALESTØTTE_ARBEIDSGIVER]?.sendtStatistikk,
            setCookies
        );
    }

    return (
        <>
            <main id="maincontent" role="main" tabIndex={-1}>
                <div id="app" className="app">
                    <PageBanner
                        isFrontPage={true}
                        title={props.title}
                        iconUrl={props.bannerIconUrl === undefined ? '' : props.bannerIconUrl}
                        kontekst={
                            'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid'
                        }
                    />
                    <div className={styles.layoutWrapper}>
                        <div className={styles.layoutContent} ref={layoutContentRef}>
                            <div className={classNames(styles.layoutPrintHeader)}>
                                <BodyShort size="small">{PROD_URL}</BodyShort>
                            </div>
                            {props.children}
                            <SkrivUtKnapp
                                knappetekst="Skriv ut nettside"
                                utskriftsinnholdRef={layoutContentRef}
                                kjørFørUtskrift={loggUtskriftsklikk}
                                wrapperClassnames={[
                                    fellesStiler.marginTop6Rem,
                                    fellesStiler.marginSides2_25rem,
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
