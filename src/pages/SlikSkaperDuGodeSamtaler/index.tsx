import SkapeGodeRammer from './SkapeGodeRammer';
import PlanleggeInnholdISamtalen from './PlanleggeInnholdISamtalen';
import ForberedMedarbeiderenDin from './ForberedMedarbeiderenDin';
import InnledSamtalen from './InnledSamtalen';
import SnakkOmArbeid from './SnakkOmArbeid';
import FinnLosningerSammen from './FinnLosningerSammen';
import PlanleggVeienVidereSammen from './PlanleggVeienVidereSammen';

const SlikSkaperDuGodeSamtaler = () => {
    return <>
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
        <ForberedMedarbeiderenDin/>
        <h3 className={"sub-section-header margin-topp-4rem"}>
            Gjennomføring av samtalen:
        </h3>
        <InnledSamtalen/>
        <SnakkOmArbeid/>
        <FinnLosningerSammen/>
        <PlanleggVeienVidereSammen/>
    </>
}

export default SlikSkaperDuGodeSamtaler;