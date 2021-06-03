import SkapeGodeRammer from './SkapeGodeRammer';
import PlanleggeInnholdISamtalen from './PlanleggeInnholdISamtalen';
import ForberedeMedarbeiderenDin from './ForberedeMedarbeiderenDin';
import InnledeSamtalen from './InnledeSamtalen';
import SnakkeOmArbeid from './SnakkeOmArbeid';
import FinneLosningerSammen from './FinneLosningerSammen';
import PlanleggeVeienVidereSammen from './PlanleggeVeienVidereSammen';

const SlikSkaperDuGodeSamtaler = () => {
    return <section className={"SlikSkaperDuGodeSamtaler"}>
        <h2 className={"section-header margin-topp-4rem"}>
            Slik skaper du gode samtaler
        </h2>
        <p className={"bold-text"}>
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
        <h3 className={"sub-section-header margin-topp-4rem"}>
            Forbered deg ved å:
        </h3>
        <SkapeGodeRammer/>
        <PlanleggeInnholdISamtalen/>
        <ForberedeMedarbeiderenDin/>
        <h3 className={"sub-section-header margin-topp-4rem"} id={"GjennomforSamtalen"}>
            Gjennomfør samtalen ved å:
        </h3>
        <InnledeSamtalen/>
        <SnakkeOmArbeid/>
        <FinneLosningerSammen/>
        <PlanleggeVeienVidereSammen/>
    </section>
}

export default SlikSkaperDuGodeSamtaler;