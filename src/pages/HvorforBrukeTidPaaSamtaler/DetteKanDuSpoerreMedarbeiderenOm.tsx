import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import ChatBubbleCheckmark from '../../felleskomponenter/Ikoner/ChatBubbleCheckmark';
import fellesStiler from '../../utils/fellesStiler.module.css';
import { Liste } from '../../Liste/Liste';
import classNames from 'classnames';

const DetteKanDuSpoerreMedarbeiderenOm = () => {
    return (
        <EkspanderbartInfopanel
            unikId={'detteKanDuSpoerreMedarbeiderenOm'}
            tittel={'Dette kan du spørre medarbeideren om'}
            panelLestSituasjon={'ulest'}
            ikon={<ChatBubbleCheckmark width={'44px'} height={'44px'} />}
            lestIkon={<ChatBubbleCheckmark width={'44px'} height={'44px'} />}
        >
            <div className={classNames(fellesStiler.marginTop1Rem, fellesStiler.marginBottom2Rem)}>
                <strong>
                    Du kan stille spørsmål som handler om fravær og forhold på arbeidsplassen.
                </strong>
                <Liste>
                    <Liste.Element>
                        Mulighetene til å utføre egne eller alternative arbeidsoppgaver.
                    </Liste.Element>
                    <Liste.Element>Behov for tilrettelegging.</Liste.Element>
                    <Liste.Element>
                        Om medarbeideren kjenner til rutiner og muligheter for tilrettelegging i
                        deres virksomhet.
                    </Liste.Element>
                    <Liste.Element>Hvor lenge medarbeideren tror fraværet vil vare.</Liste.Element>
                    <Liste.Element>
                        Om det er forhold på arbeidsplassen som påvirker helsa eller sykefraværet.
                    </Liste.Element>
                    <Liste.Element>
                        Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller andre
                        for å få hjelp.
                    </Liste.Element>
                </Liste>
                <strong>
                    Husk at du ikke kan kreve opplysninger om diagnose, behandling og forhold
                    hjemme.
                </strong>
            </div>
        </EkspanderbartInfopanel>
    );
};

export default DetteKanDuSpoerreMedarbeiderenOm;
