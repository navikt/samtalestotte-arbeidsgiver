import { FunctionComponent } from 'react';
import LesMerPanel from '../../LesMerPanel/LesMerPanel';
import { Normaltekst } from 'nav-frontend-typografi';
import './SlikKanDisseSpørsmåleneHjelpeDeg.less';

interface Props {
    onÅpne?: () => void;
}

export const SlikKanDisseSpørsmåleneHjelpeDeg: FunctionComponent<Props> = (props) => {
    return (
        <LesMerPanel
            className="slik-kan-disse-spørsmålene-hjelpe-deg"
            åpneLabel="Slik kan disse spørsmålene hjelpe deg"
            onÅpne={props.onÅpne}
        >
            <div className="slik-kan-disse-spørsmålene-hjelpe-deg__innhold">
                <ul>
                    <li>
                        Lavt sykefravær og god dialog fører til motiverte medarbeidere og god lønnsomhet
                    </li>
                    <li>
                        Systematisk arbeid med arbeidsmiljøet er en lovpålagt oppgave. Evaluering av samtaler om arbeidssituasjonen, gir en verdifull
                        kartlegging.   Denne bør du bruke når du jobber med forebyggende arbeidsmiljøarbeid.
                    </li>
                    <li>
                        Vi hjelper deg videre med relevante tips ut fra dine svar
                    </li>
                </ul>
            </div>
        </LesMerPanel>
    );
};
