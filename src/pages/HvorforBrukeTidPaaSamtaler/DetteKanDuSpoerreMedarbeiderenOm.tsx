import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';
import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import ChatBubbleCheckmark from '../../felleskomponenter/Ikoner/ChatBubbleCheckmark';


const DetteKanDuSpoerreMedarbeiderenOm = ({callback, ikon, lestIkon}: InfoPanelProps) => {
    return                     <EkspanderbartInfopanel
        unikId={"detteKanDuSpoerreMedarbeiderenOm"}
        tittel={"Dette kan du spørre medarbeideren om"}
        panelLestSituasjon={"ulest"}
        callBack={() => callback}
        ikon={<ChatBubbleCheckmark width={"3rem"} height={"3rem"}/>}
        lestIkon={<ChatBubbleCheckmark width={"3rem"} height={"3rem"}/>}
    >
        <strong>
            Du kan stille spørsmål som handler om fravær og forhold på arbeidsplassen.
        </strong>
        <ul>
            <li>
                Mulighetene til å utføre egne eller alternative arbeidsoppgaver.
            </li>
            <li>
                Behov for tilrettelegging.
            </li>
            <li>
                Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i deres virksomhet.
            </li>
            <li>
                Hvor lenge medarbeideren tror fraværet vil vare.
            </li>
            <li>
                Om det er forhold på arbeidsplassen som påvirker sykefraværet eller helsesituasjonen.
            </li>
            <li>
                Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller andre
                samarbeidspartnere for å få hjelp med tilrettelegging og oppfølging.
            </li>
        </ul>
        <strong>
            Husk at du ikke kan kreve opplysninger om diagnose, behandling og forhold hjemme.
        </strong>
    </EkspanderbartInfopanel>
};

export default DetteKanDuSpoerreMedarbeiderenOm;
