import { PageBanner } from '../PageBanner/PageBanner';
import { DecoratorHeader } from '../decorator/DecoratorHeader';
import { DecoratorFooter } from '../decorator/DecoratorFooter';
import Head from 'next/head';
import { DecoratorParts } from '../../utils/dekorator';
import { DecoratorEnv } from '../decorator/DecoratorEnv';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { PROD_URL, SCREEN_SM_MIN } from '../../utils/konstanter';
import { Link, BodyShort, Button } from '@navikt/ds-react';
import { Back } from '@navikt/ds-icons'
import { TILBAKE } from '../../resources/urls';
import { PageBannerSVG } from '../PageBanner/PageBannerSVG';
import { css } from 'linaria';
import classNames from 'classnames';

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
        <div className={layout}>
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
                <div className={layoutWrapper}>
                    <div className={layoutContent} ref={panelRef}>
                        <Link href={TILBAKE} className={layoutNoPrint}><Back />Tilbake</Link>
                        <div className={layoutSmallScreenIllustration}><PageBannerSVG/></div>
                        <div className={layoutPrintHeader}>
                            <BodyShort size='s'>{PROD_URL}</BodyShort>
                        </div>
                        <div className={layoutReactToPrintWrapper}>
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
                                    <Button
                                        id={'skriv-ut-knapp'}
                                        ref={lastNedKnappRef}
                                        className={classNames(layoutNoPrint, layoutKnapp)}
                                        size={"m"}
                                    >
                                        Skriv ut
                                    </Button>
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

/** STYLES **/

const layout = css`
  @media print {
    @page {
      size: A4;
      margin: 2.54cm 0 0;
    }
  }
`
const layoutWrapper = css`
  min-height: 50rem;
  padding: 1.5rem 0 5rem;
`

const layoutContent = css`
  max-width: 60rem;
  background-color: white;
  padding: 1rem;
  margin: auto;
  border-radius: 0.25rem;
`

const layoutNoPrint = css`
  @media print {
      display: none;
  }
`

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
`

const layoutPrintHeader = css`
  display: none;
  @media print {
    display: block;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
`

const layoutReactToPrintWrapper = css`
  display: none;
  @media (min-width: ${SCREEN_SM_MIN}) {  
    display: flex;
    justify-content: flex-end;
  }
`

const layoutKnapp = css`
  :hover{
      padding: 0.65625rem var(--navds-spacing-3);
  }
`