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
            åpneLabel="slik-kan-disse-spørsmålene-hjelpe-deg"
            onÅpne={props.onÅpne}
        >
            <div className="slik-kan-disse-spørsmålene-hjelpe-deg__innhold">
                <Normaltekst>
                    Lavt sykefravær og god oppfølging fører til motiverte medarbeidere og god
                    lønnsomhet
                </Normaltekst>
                <Normaltekst>
                    Systematisk arbeid med arbeidsmiljøet er en lovpålagt oppgave. Evaluering av
                    oppfølgingssamtaler, gir en verdifull kartlegging.
                </Normaltekst>
                <Normaltekst>
                    Denne bør du bruke når du jobber med forebyggende arbeidsmiljøarbeid.
                </Normaltekst>
                <Normaltekst>Vi hjelper deg videre med relevante tips ut fra dine svar</Normaltekst>
            </div>
        </LesMerPanel>
    );
};
