import { PageBanner } from '../PageBanner/PageBanner';
import { DecoratorHeader } from '../decorator/DecoratorHeader';
import { DecoratorFooter } from '../decorator/DecoratorFooter';
import Head from 'next/head';
import { DecoratorParts } from '../../utils/dekorator';
import { DecoratorEnv } from '../decorator/DecoratorEnv';
import './Layout.less';
import { CookiesProvider } from 'react-cookie';
import { useRef } from 'react';
import logEvent from '../../amplitude/amplitude';
import ReactToPrint from 'react-to-print';

export const Layout = (props: {
    title: string;
    isFrontPage: boolean;
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
                <CookiesProvider>
                    <PageBanner
                        isFrontPage={true}
                        title={props.title}
                        iconUrl={props.bannerIconUrl === undefined ? '' : props.bannerIconUrl}
                    />
                    <div className="layout__wrapper">
                        <div className="layout__content"  ref={panelRef}>
                                <ReactToPrint
                                    onBeforePrint={() => logEvent('forside barnehage', 'print')}
                                    onAfterPrint={() => {
                                        if (lastNedKnappRef.current) {
                                            lastNedKnappRef.current.focus();
                                        }
                                    }}
                                    content={() => panelRef.current}
                                    trigger={() => (
                                        <button
                                            ref={lastNedKnappRef}
                                            className="sammenligningspanel-barnehage__knapp knapp"
                                        >
                                            Last ned
                                        </button>
                                    )}
                                />
                                {props.children}
                        </div>
                    </div>
                </CookiesProvider>
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
