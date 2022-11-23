import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import ChatBubbleCheckmark from '../../felleskomponenter/Ikoner/ChatBubbleCheckmark';
import { BodyLong } from '@navikt/ds-react';
import fellesStiler from '../../utils/fellesStiler.module.css';
import { Liste } from '../../Liste/Liste';

const DetteKanDuSpoerreMedarbeiderenOm = (props: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'detteKanDuSpoerreMedarbeiderenOm'}
            tittel={'Dette kan du spørre medarbeideren om'}
            panelLestSituasjon={'ulest'}
            ikon={<ChatBubbleCheckmark width={'44px'} height={'44px'} />}
            lestIkon={<ChatBubbleCheckmark width={'44px'} height={'44px'} />}
        >
            <div className={fellesStiler.marginTop1Rem}>
                <BodyLong>
                    <strong>
                        Du kan stille spørsmål som handler om fravær og forhold på arbeidsplassen.
                    </strong>
                </BodyLong>
                <Liste>
                    <Liste.Element>
                        Mulighetene til å utføre egne eller alternative arbeidsoppgaver.
                    </Liste.Element>
                    <Liste.Element>Behov for tilrettelegging.</Liste.Element>
                    <Liste.Element>
                        Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i deres
                        virksomhet.
                    </Liste.Element>
                    <Liste.Element>Hvor lenge medarbeideren tror fraværet vil vare.</Liste.Element>
                    <Liste.Element>
                        Om det er forhold på arbeidsplassen som påvirker sykefraværet eller
                        helsesituasjonen.
                    </Liste.Element>
                    <Liste.Element>
                        Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller andre
                        samarbeidspartnere for å få hjelp med tilrettelegging og oppfølging.
                    </Liste.Element>
                </Liste>
                <strong>
                    <BodyLong spacing>
                        <strong>
                            Husk at du ikke kan kreve opplysninger om diagnose, behandling og
                            forhold hjemme.
                        </strong>
                    </BodyLong>
                </strong>
            </div>
        </EkspanderbartInfopanel>
    );
};

export default DetteKanDuSpoerreMedarbeiderenOm;
