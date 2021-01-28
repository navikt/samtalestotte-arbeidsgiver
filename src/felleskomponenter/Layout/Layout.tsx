import { PageBanner } from '../PageBanner/PageBanner';
import { DecoratorHeader } from '../decorator/DecoratorHeader';
import { DecoratorFooter } from '../decorator/DecoratorFooter';
import Head from 'next/head';
import { DecoratorParts } from '../../utils/dekorator';
import { DecoratorEnv } from '../decorator/DecoratorEnv';
import './Layout.less';
import { CookiesProvider } from 'react-cookie';
import {sendEventDirekte} from "../../amplitude/amplitude";

export const Layout = (props: {
    title: string;
    isFrontPage: boolean;
    bannerIconUrl?: string;
    decoratorParts?: DecoratorParts;
    children: React.ReactChild[];
}) => {
    sendEventDirekte("app","sidelastet")
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
                        <div className="layout__content">{props.children}</div>
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
