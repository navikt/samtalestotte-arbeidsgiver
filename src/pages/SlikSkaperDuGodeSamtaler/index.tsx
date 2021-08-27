import SkapeGodeRammer from './SkapeGodeRammer';
import PlanleggeInnholdISamtalen from './PlanleggeInnholdISamtalen';
import ForberedeMedarbeiderenDin from './ForberedeMedarbeiderenDin';
import InnledeSamtalen from './InnledeSamtalen';
import SnakkeOmArbeid from './SnakkeOmArbeid';
import FinneLosningerSammen from './FinneLosningerSammen';
import PlanleggeVeienVidereSammen from './PlanleggeVeienVidereSammen';
import {
    boldText,
    breakBeforePage,
    marginBottom1Rem,
    marginTop2Rem,
    marginTop3Rem,
    marginTop4Rem,
    noPrint,
} from '../../utils/fellesStiler';
import { Title } from '@navikt/ds-react';
import { Download } from '@navikt/ds-icons';
import classNames from 'classnames';
import { css } from 'linaria';
import { SCREEN_SM_MIN } from '../../utils/konstanter';
import { LoggbarLenkeKnapp } from '../../felleskomponenter/LoggbarLenke/LoggbarLenkeKnapp';

function LastNedKnapp(props: { lenketekst: string; href: string; filtype: string }) {
    return (
        <LoggbarLenkeKnapp
            className={downloadButtonStyle}
            lenketekst={props.lenketekst}
            href={props.href}
            download={props.filtype}
        >
            <Download />
            {props.lenketekst}
        </LoggbarLenkeKnapp>
    );
}

const SlikSkaperDuGodeSamtaler = ({ className }: { className?: string }) => {
    return (
        <section className={classNames(breakBeforePage, backgroundStyle, marginTop3Rem, className)}>
            <Title size={'l'} level={2}>
                Slik skaper du gode samtaler
            </Title>
            <div className={noPrint}>
                <Title className={classNames(marginTop2Rem, marginBottom1Rem)} size={'s'} level={4}>
                    Last ned verktøyet og rediger selv:
                </Title>
                <div className={downloadButtonContainerStyle}>
                    <LastNedKnapp
                        lenketekst="Last ned i Word"
                        href="/samtalestotte/Samtalestøtte-Arbeidsgiver.docx"
                        filtype="docx"
                    />
                    <LastNedKnapp
                        lenketekst="Last ned i .txt"
                        href="/samtalestotte/Samtalestøtte-Arbeidsgiver.txt"
                        filtype="txt"
                    />
                </div>
            </div>
            <p className={boldText}>Som arbeidsgiver er du ansvalig for:</p>
            <ul>
                <li>å forebygge og følge opp sykefravær</li>
                <li>å gjennomføre og dokumentere samtaler med medarbeidere</li>
                <li>å sikre at medarbeideren får bidra til å finne løsninger</li>
            </ul>
            <Title className={classNames(marginTop4Rem, marginBottom1Rem)} size={'m'} level={3}>
                Forbered deg ved å:
            </Title>
            <SkapeGodeRammer />
            <PlanleggeInnholdISamtalen />
            <ForberedeMedarbeiderenDin />
            <Title
                className={classNames(marginTop4Rem, marginBottom1Rem)}
                id={'GjennomforSamtalen'}
                size={'m'}
                level={3}
            >
                Gjennomfør samtalen ved å:
            </Title>
            <InnledeSamtalen />
            <SnakkeOmArbeid />
            <FinneLosningerSammen />
            <PlanleggeVeienVidereSammen />
        </section>
    );
};

export default SlikSkaperDuGodeSamtaler;

/***
 * STYLES
 */

const backgroundStyle = css`
    @media (min-width: ${SCREEN_SM_MIN}) {
        padding-right: 3rem;
        padding-left: 3rem;
    }
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: var(--navds-color-blue-10);
    border-radius: 10px;
`;

const downloadButtonContainerStyle = css`
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const downloadButtonStyle = css`
    width: 200px;
    padding: 10px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    :hover {
        svg {
            color: white;
        }
    }
`;