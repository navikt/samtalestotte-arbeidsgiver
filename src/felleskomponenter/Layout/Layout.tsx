import { PageBanner } from '../PageBanner/PageBanner';
import { DecoratorHeader } from '../decorator/DecoratorHeader';
import { DecoratorFooter } from '../decorator/DecoratorFooter';
import Head from 'next/head';
import { DecoratorParts } from '../../utils/dekorator';
import { DecoratorEnv } from '../decorator/DecoratorEnv';
import React, { useEffect, useRef, useState } from 'react';
import { PROD_URL, SCREEN_SM_MIN } from '../../utils/konstanter';
import { BodyShort, Link } from '@navikt/ds-react';
import { Back } from '@navikt/ds-icons';
import { erTilbakeURLTillat, TILBAKE } from '../../resources/urls';
import { PageBannerSVG } from '../PageBanner/PageBannerSVG';
import { css } from 'linaria';
import classNames from 'classnames';
import { marginSides3rem, noPrint } from '../../utils/fellesStiler';
import { SkrivUtKnapp } from '../SkrivUtKnapp/SkrivUtKnapp';

export const Layout = (props: {
    title: string;
    isFrontPage: boolean;
    logEvent: (eventName: string, data?: any) => Promise<any>;
    bannerIconUrl?: string;
    decoratorParts?: DecoratorParts;
    children: React.ReactChild[];
}) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const [tilbakeURL, setTilbakeURL] = useState<string>(TILBAKE);
    useEffect(() => {
        if (window !== undefined) {
            const refUrl = new URLSearchParams(window.location.search).get('referer');
            setTilbakeURL(
                refUrl !== null && refUrl !== '' && erTilbakeURLTillat(refUrl) ? refUrl : TILBAKE
            );
        }
    }, []);

    const headerLinks = (props.decoratorParts ? props.decoratorParts.linkTags : []).map(
        (attrs, index) => {
            return (
                <link
                    key={attrs.key}
                    href={attrs.href ? attrs.href : undefined}
                    type={attrs.type ? attrs.type : undefined}
                    rel={attrs.rel ? attrs.rel : undefined}
                    sizes={attrs.sizes ? attrs.sizes : undefined}
                />
            );
        }
    );

    function loggUtskrift() {
        props.logEvent('knapp', {
            label: 'skriv-ut',
            funksjon: 'skriv-ut',
        });
    }

    return (
        <div className={layout}>
            <Head>{headerLinks}</Head>
            <DecoratorHeader
                html={
                    props.decoratorParts?.decoratorHeader === undefined
                        ? ''
                        : props.decoratorParts?.decoratorHeader
                }
            />
            <div id="app" className="app">
                <PageBanner
                    isFrontPage={true}
                    title={props.title}
                    iconUrl={props.bannerIconUrl === undefined ? '' : props.bannerIconUrl}
                    kontekst={
                        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid'
                    }
                />
                <div className={layoutWrapper}>
                    <div className={layoutContent} ref={panelRef}>
                        <Link href={tilbakeURL} className={classNames(noPrint, marginSides3rem)}>
                            <Back />
                            Tilbake
                        </Link>
                        <div className={classNames(layoutSmallScreenIllustration, marginSides3rem)}>
                            <PageBannerSVG />
                        </div>
                        <div className={classNames(layoutPrintHeader, marginSides3rem)}>
                            <BodyShort size="s">{PROD_URL}</BodyShort>
                        </div>
                        {props.children}
                        <SkrivUtKnapp
                            knappetekst="Skriv ut nettside"
                            kjørFørUtskrift={loggUtskrift}
                            innholdRef={panelRef}
                        />
                    </div>
                </div>
            </div>
            <DecoratorFooter
                html={
                    props.decoratorParts?.decoratorFooter === undefined
                        ? ''
                        : props.decoratorParts?.decoratorFooter
                }
            />
            <DecoratorEnv env={props.decoratorParts?.decoratorEnv} />
        </div>
    );
};

/** STYLES **/

const layout = css`
    @media print {
        @page {
            size: A4;
            margin: 2.54cm 0 0;
        }
    }
`;

const layoutWrapper = css`
    min-height: 50rem;
    padding: 1.5rem 0 5rem;
`;

const layoutContent = css`
    max-width: 66rem;
    background-color: white;
    padding: 1rem;
    margin: auto;
    border-radius: 0.25rem;
`;

const layoutSmallScreenIllustration = css`
    display: flex;
    justify-content: center;
    background: var(--navds-color-blue-10);
    margin: 1rem -1rem 3rem;
    svg {
        flex-shrink: 0;
    }
    @media (min-width: ${SCREEN_SM_MIN}) {
        display: none;
    }
`;

const layoutPrintHeader = css`
    display: none;
    @media print {
        display: block;
        margin-bottom: 1rem;
        margin-left: 1rem;
    }
`;