import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Accordion } from '@navikt/ds-react';
import { Expand } from '@navikt/ds-icons';
import classNames from 'classnames';
import logEvent from '../../amplitude/amplitude';
import Lest from '../Ikoner/Lest';
import { getStickyHeaderOffset, onLukkScroll } from '../../utils/scrollUtils';
import { css } from 'linaria';
import { SCREEN_SM_MIN } from '../../utils/konstanter';
import { sendIaTjenesterMetrikker } from '../../utils/ia-tjeneste-metrikker';
import { useCookies } from 'react-cookie';
import {cookiesIApplikasjon, SamtalestøtteCookies} from '../../utils/cookiesUtils';

export type PanelLestSituasjon = 'lest' | 'ulest' | undefined;

export type EkspanderbartCallback = (panelLestSituasjon: PanelLestSituasjon) => any;

export interface EkspanderbartInfopanelProps {
    children: ReactNode;
    unikId: string;
    tittel: string;
    bakgrunn?: string;
    panelLestSituasjon: PanelLestSituasjon;
    ikon?: ReactNode;
    lestIkon?: ReactNode;
}

export const EkspanderbartInfopanel: FunctionComponent<EkspanderbartInfopanelProps> = (
    props: EkspanderbartInfopanelProps
) => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);
    const [erLest, setErLest] = useState<boolean>(false);
    const [panelKnapp, setPanelKnapp] = useState<HTMLElement | null>(null);
    const [hovedMeny, setHovedMeny] = useState<HTMLElement | null>(null);
    const [cookies, setCookies] = useCookies(cookiesIApplikasjon);

    const panelknappID = 'ekspanderbart-infopanel__' + props.unikId + '-base';

    const hasIcon = props.ikon !== null && props.ikon !== undefined;

    useEffect(() => {
        const timer = setTimeout(async () => {
            erÅpen && props.panelLestSituasjon !== 'lest' && setErLest(true);
            erÅpen && (await logEvent('knapp', { label: props.tittel, funksjon: 'åpen' }));
            erÅpen &&
                sendIaTjenesterMetrikker(
                    cookies[SamtalestøtteCookies.SAMTALESTØTTE_PODLET]?.orgnr,
                    cookies[SamtalestøtteCookies.SAMTALESTØTTE_PODLET]?.altinnRettighet,
                    cookies[SamtalestøtteCookies.SAMTALESTØTTE_ARBEIDSGIVER]?.sendtStatistikk,
                    setCookies
                );
        }, 500);
        return () => clearTimeout(timer);
    }, [erÅpen]);

    useEffect(() => {
        setErLest(props.panelLestSituasjon === 'lest');
    }, [props.panelLestSituasjon]);

    useEffect(() => {
        setPanelKnapp(document.getElementById(panelknappID));
        setHovedMeny(document.getElementById('hovedmeny'));
    }, []);

    const innhold = (
        <>
            <div>{props.children}</div>
        </>
    );
    return (
        <div className={root}>
            <Accordion className={accordion}>
                <Accordion.Item open={erÅpen} className={accordionItem}>
                    <Accordion.Header
                        id={panelknappID}
                        onClick={() => {
                            setErÅpen(!erÅpen);
                        }}
                        className={classNames(panel, { [borderBottom]: erÅpen })}
                    >
                        <div className={classNames(flexContainer)}>
                            <div className={classNames(grid, { [gridWithIcon]: hasIcon })}>
                                {hasIcon && <div className={ikonContainer}>{props.ikon}</div>}
                                <div className={tittelTekst}>{props.tittel}</div>
                                {erLest && <Lest width={'62px'} height={'24px'} />}
                            </div>
                        </div>
                    </Accordion.Header>

                    <Accordion.Content className={panelInnhold}>
                        <div className={classNames(innholdStyle)}>{innhold}</div>
                        <button
                            className={classNames(lukkKnapp, 'navds-link')}
                            onClick={() => {
                                setErÅpen(false);
                                setTimeout(
                                    () =>
                                        onLukkScroll(panelKnapp, getStickyHeaderOffset(hovedMeny)),
                                    0
                                );
                            }}
                        >
                            <span className="navds-body-short">Lukk dette panelet</span>
                            <Expand className={rotate180} />
                        </button>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
            <div className={printStyle}>{innhold}</div>
        </div>
    );
};

/** STYLES */

const root = css`
    @media print {
        display: block;
    }
`;

const flexContainer = css`
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
`;

const grid = css`
    width: 100%;
    display: grid;
    @media (min-width: ${SCREEN_SM_MIN}) {
        grid-template-columns: auto auto;
        grid-template-rows: auto;
    }
    grid-template-columns: auto;
    grid-template-rows: auto;
    align-items: center;
    justify-content: start;
    justify-items: start;
    column-gap: 1rem;
    row-gap: 12px;
`;

const gridWithIcon = css`
    @media (min-width: ${SCREEN_SM_MIN}) {
        grid-template-columns: auto auto auto;
    }
`;

const ikonContainer = css`
    @media (min-width: ${SCREEN_SM_MIN}) {
        display: block;
    }
    display: none;
`;

const tittelTekst = css`
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--navds-global-color-blue-500);

    & :hover {
        text-decoration-line: underline;
    }
`;

const accordion = css`
  background-color: var(--navds-global-color-white);
`
const accordionItem = css`
    margin-bottom: 1rem;
`;

const panel = css`
    min-height: 80px;
    margin: 0;
    border: 1px solid;
    border-radius: 4px;

    :hover:not(:focus) {
        box-shadow: #a0a0a0 0 2px 1px 0;
        border-bottom: 1px solid;
    }
`;

const panelInnhold = css`
    margin: 0;
    padding: 1rem;
    border: 1px solid;
    border-top: none;
    border-radius: 4px;
`;

const borderBottom = css`
    > button {
        border-bottom: 1px solid var(--navds-global-color-gray-900);
    }
`;

const rotate180 = css`
    transform: rotateZ(-180deg);
`;

const innholdStyle = css`
    overflow-wrap: break-word;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    @media (min-width: ${SCREEN_SM_MIN}) {
        padding-right: 1rem;
        padding-left: 1rem;
    }

    @media print {
        display: none;
    }
`;

const lukkKnapp = css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    background: none;
    border: none;
    padding: 0;
    margin: 1rem auto;
    cursor: pointer;

    @media print {
        display: none;
    }
`;
const printStyle = css`
    display: none;
    @media print {
        display: block;
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;
