import SkapeGodeRammer from './SkapeGodeRammer';
import PlanleggeInnholdISamtalen from './PlanleggeInnholdISamtalen';
import ForberedMedarbeiderenDin from './ForberedMedarbeiderenDin';
import InnledSamtalen from './InnledSamtalen';
import SnakkOmArbeid from './SnakkOmArbeid';
import FinnLosningerSammen from './FinnLosningerSammen';
import PlanleggVeienVidereSammen from './PlanleggVeienVidereSammen';

const SlikSkaperDuGodeSamtaler = () => {
    return <>
        <h2>
            Slik skaper du gode samtaler
        </h2>
        <h3>
            Som arbeidsgiver er du ansvalig for:
        </h3>
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
        <h3>
            Forbered deg ved å:
        </h3>
        <SkapeGodeRammer/>
        <PlanleggeInnholdISamtalen/>
        <ForberedMedarbeiderenDin/>
        <h3>
            Gjennomføring av samtalen:
        </h3>
        <InnledSamtalen/>
        <SnakkOmArbeid/>
        <FinnLosningerSammen/>
        <PlanleggVeienVidereSammen/>
    </>
}

export default SlikSkaperDuGodeSamtaler;