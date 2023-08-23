import { PageBanner } from '../PageBanner/PageBanner';
import React, { useRef } from 'react';
import { PROD_URL } from '../../utils/konstanter';
import { BodyShort } from '@navikt/ds-react';
import styles from './Layout.module.css';
import classNames from 'classnames';
import fellesStiler from '../../utils/fellesStiler.module.css';
import { SkrivUtKnapp } from '../Knapper/SkrivUtKnapp';
import { sendIaTjenesteMetrikk } from '../../utils/sendIaTjenesteMetrikk';
import TestVersjonBanner from '../Banner/TestVersjonBanner';

export const Layout = (props: {
    title: string;
    isFrontPage: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logEvent: (eventName: string, data?: any) => Promise<any>;
    bannerIconUrl?: string;
    children: React.ReactChild[];
    kjørerMockApp: boolean;
    prodUrl: string;
}) => {
    const layoutContentRef = useRef<HTMLDivElement>(null);

    function loggUtskriftsklikk() {
        props.logEvent('knapp', {
            label: 'skriv-ut',
            funksjon: 'skriv-ut',
        });
        sendIaTjenesteMetrikk();
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
                        <TestVersjonBanner
                            prodUrl={props.prodUrl}
                            kjørerMockApp={props.kjørerMockApp}
                        />
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
