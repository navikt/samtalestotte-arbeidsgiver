import { PageBanner } from '../PageBanner/PageBanner';
import { DecoratorHeader } from '../decorator/DecoratorHeader';
import { DecoratorFooter } from '../decorator/DecoratorFooter';
import Head from 'next/head';
import { DecoratorParts } from '../../utils/dekorator';
import { DecoratorEnv } from '../decorator/DecoratorEnv';
import './Layout.less';
import { CookiesProvider } from 'react-cookie';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import classNames from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import { PROD_URL } from '../../utils/konstanter';
import logEvent from '../../amplitude/amplitude';
import 'nav-frontend-knapper-style';

export const Layout = (props: {
    title: string;
    isFrontPage: boolean;
    logEvent: (eventName: string, data?: any) => Promise<any>;
    bannerIconUrl?: string;
    decoratorParts?: DecoratorParts;
    children: React.ReactChild[];
}) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const lastNedKnappRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="layout">
            <Head>
                {props.decoratorParts?.linkTags.map((attrs, index) => {
                    attrs.key = 'props.linkTags' + index;
                    return <link {...attrs} />;
                })}
            </Head>
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
                <div className="layout__wrapper">
                    <div className="layout__content" ref={panelRef}>
                        <div className="layout__print-header">
                            <Normaltekst>{PROD_URL}</Normaltekst>
                        </div>
                        <div className="layout__react-to-print-wrapper">
                            <ReactToPrint
                                onBeforePrint={() => {
                                    props.logEvent('knapp', {
                                        label: 'skriv-ut',
                                        funksjon: 'skriv-ut',
                                    });
                                }}
                                onAfterPrint={() => {
                                    if (lastNedKnappRef.current) {
                                        lastNedKnappRef.current.focus();
                                    }
                                }}
                                content={() => panelRef.current}
                                trigger={() => (
                                    <button
                                        ref={lastNedKnappRef}
                                        className={classNames('layout__knapp', 'knapp')}
                                    >
                                        Skriv ut
                                    </button>
                                )}
                            />
                        </div>
                        {props.children}
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
