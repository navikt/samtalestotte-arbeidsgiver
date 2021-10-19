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
import { Heading } from '@navikt/ds-react';
import classNames from 'classnames';
import { css } from 'linaria';
import { SCREEN_SM_MIN } from '../../utils/konstanter';
import LastNedKnapp from '../../felleskomponenter/Knapper/LastNedKnapp';

const SlikSkaperDuGodeSamtaler = ({ className }: { className?: string }) => {
    return (
        <section className={classNames(breakBeforePage, backgroundStyle, marginTop3Rem, className)}>
            <Heading size={'large'} level={'2'}>
                Slik skaper du gode samtaler
            </Heading>
            <div className={noPrint}>
                <Heading className={classNames(marginTop2Rem, marginBottom1Rem)} size={'small'} level={'4'}>
                    Last ned verktøyet og rediger selv:
                </Heading>
                <div className={downloadButtonContainerStyle}>
                    <LastNedKnapp
                        knappetekst="Last ned i Word"
                        href="/samtalestotte/Samtalestøtte-Arbeidsgiver.docx"
                        label="last-ned-docx"
                    />
                    <LastNedKnapp
                        knappetekst="Last ned i .txt"
                        href="/samtalestotte/Samtalestøtte-Arbeidsgiver.txt"
                        label="last-ned-txt"
                    />
                </div>
            </div>
            <p className={boldText}>Som arbeidsgiver er du ansvalig for:</p>
            <ul>
                <li>å forebygge og følge opp sykefravær</li>
                <li>å gjennomføre og dokumentere samtaler med medarbeidere</li>
                <li>å sikre at medarbeideren får bidra til å finne løsninger</li>
            </ul>
            <Heading className={classNames(marginTop4Rem, marginBottom1Rem)} size={'medium'} level={'3'}>
                Forbered deg ved å:
            </Heading>
            <SkapeGodeRammer />
            <PlanleggeInnholdISamtalen />
            <ForberedeMedarbeiderenDin />
            <Heading
                className={classNames(marginTop4Rem, marginBottom1Rem)}
                id={'GjennomforSamtalen'}
                size={'medium'}
                level={'3'}
            >
                Gjennomfør samtalen ved å:
            </Heading>
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
    @media (min-width: ${SCREEN_SM_MIN}) {  
      justify-content: flex-start;
    }
    justify-content: center;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;