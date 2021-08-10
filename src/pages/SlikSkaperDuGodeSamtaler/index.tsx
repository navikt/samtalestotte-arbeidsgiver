import SkapeGodeRammer from './SkapeGodeRammer';
import PlanleggeInnholdISamtalen from './PlanleggeInnholdISamtalen';
import ForberedeMedarbeiderenDin from './ForberedeMedarbeiderenDin';
import InnledeSamtalen from './InnledeSamtalen';
import SnakkeOmArbeid from './SnakkeOmArbeid';
import FinneLosningerSammen from './FinneLosningerSammen';
import PlanleggeVeienVidereSammen from './PlanleggeVeienVidereSammen';
import { boldText, breakBeforePage, marginBottom1Rem, marginTop4Rem } from '../../utils/styleTemplates';
import { Title } from '@navikt/ds-react';
import classNames from 'classnames';

const SlikSkaperDuGodeSamtaler = () => {
    return <section className={breakBeforePage}>
        <Title className={marginTop4Rem} size={'l'} level={2}>
            Slik skaper du gode samtaler
        </Title>
        <p className={boldText}>
            Som arbeidsgiver er du ansvalig for:
        </p>
        <ul>
            <li>
                å forebygge og følge opp sykefravær
            </li>
            <li>
                å gjennomføre og dokumentere samtaler med medarbeidere
            </li>
            <li>
                å sikre at medarbeideren får bidra til å finne løsninger
            </li>
        </ul>
        <Title className={classNames(marginTop4Rem, marginBottom1Rem)} size={'m'} level={3}>
            Forbered deg ved å:
        </Title>
        <SkapeGodeRammer/>
        <PlanleggeInnholdISamtalen/>
        <ForberedeMedarbeiderenDin/>
        <Title className={classNames(marginTop4Rem, marginBottom1Rem)} id={"GjennomforSamtalen"} size={'m'} level={3}>
            Gjennomfør samtalen ved å:
        </Title>
        <InnledeSamtalen/>
        <SnakkeOmArbeid/>
        <FinneLosningerSammen/>
        <PlanleggeVeienVidereSammen/>
    </section>
}

export default SlikSkaperDuGodeSamtaler;