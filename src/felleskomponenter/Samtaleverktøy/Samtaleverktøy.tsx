import { FunctionComponent, useEffect, useState } from 'react';
import { Normaltekst, Systemtittel, UndertekstBold } from 'nav-frontend-typografi';
import {
    EkspanderbartInfopanel,
    PanelLestSituasjon,
} from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './Samtaleverktøy.less';
import { LyspæreSVG } from './LyspæreSVG';
import { useCookies } from 'react-cookie';
import logEvent from '../../amplitude/amplitude';
import { ETT_ÅR_I_SEKUNDER } from '../SituasjonQA/SituasjonQA';

export const Samtaleverktøy: FunctionComponent = () => {
    const [cookies, setCookie] = useCookies(['samtalestotte-arbeidsgiver-panel-lest']);

    const [arbeidssituasjonSamtale, setArbeidssituasjonSamtale] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-panel-lest']?.arbeidssituasjonSamtale === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-panel-lest'].arbeidssituasjonSamtale
    );

    const [spørMedarbeiderOm, setSpørMedarbeiderOm] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-panel-lest']?.spørMedarbeiderOm === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-panel-lest'].spørMedarbeiderOm
    );
    const [suksesskriterier, setSuksesskriterier] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-panel-lest']?.suksesskriterier === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-panel-lest'].suksesskriterier
    );

    useEffect(() => {
        setCookie(
            'samtalestotte-arbeidsgiver-panel-lest',
            JSON.stringify({
                arbeidssituasjonSamtale: arbeidssituasjonSamtale,
                spørMedarbeiderOm: spørMedarbeiderOm,
                suksesskriterier: suksesskriterier,
            }),
            {
                path: '/',
                maxAge: ETT_ÅR_I_SEKUNDER,
                sameSite: true,
            }
        );
    }, [arbeidssituasjonSamtale, spørMedarbeiderOm, suksesskriterier]);
    /*useEffect(() => {
        setCookie(
            'samtalestotte-arbeidsgiver-panel-lest',
            JSON.stringify({
                arbeidssituasjonSamtale: arbeidssituasjonSamtale,
                spørMedarbeiderOm: spørMedarbeiderOm,
                suksesskriterier: suksesskriterier,
            }),
            {
                path: '/',
                maxAge: ETT_ÅR_I_SEKUNDER,
                sameSite: true,
            }
        );
    }, []);*/

    const callbackIntercept = (
        callback: (panelLestSituasjon: PanelLestSituasjon) => any,
        label: string
    ) => (panelLestSituasjon: PanelLestSituasjon) => {
        logEvent('knapp', {
            label: label,
            funksjon: 'panel-lest',
            panelLestSituasjon: panelLestSituasjon,
        });
        callback(panelLestSituasjon);
    };
    return (
        <>
            <Systemtittel className="samtaleverktøy__tittel">Samtaleverktøy</Systemtittel>
            <EkspanderbartInfopanel
                tittel={'Når kan en samtale om arbeidssituasjonen være aktuelt?'}
                unikId={'arbeidssituasjonSamtale'}
                callBack={callbackIntercept(setArbeidssituasjonSamtale, 'arbeidssituasjonSamtale')}
                panelLestSituasjon={arbeidssituasjonSamtale}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Normaltekst>
                        En samtale om arbeidssituasjonen gjennomføres hvis
                        <ul className="samtaleverktøy__ul_tett">
                            <li>
                                du eller din medarbeider opplever utfordringer med arbeidet og det
                                skyldes sykdom eller andre forhold
                            </li>
                            <li>medarbeideren står i fare for å bli sykmeldt</li>
                            <li>medarbeideren er sykmeldt</li>
                            <li>medarbeideren har vært sykmeldt</li>
                        </ul>
                    </Normaltekst>
                    <Normaltekst className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Det finnes ingen oppskrift på en god samtale som gjelder alle situasjoner.
                        Men det finnes noen grep som ofte bidrar til gode samtaler.
                    </Normaltekst>
                </div>
            </EkspanderbartInfopanel>
            <EkspanderbartInfopanel
                tittel={'Dette kan du spørre medarbeideren om'}
                unikId={'detteKanDuSpørreMedarbeiderenOm'}
                callBack={callbackIntercept(
                    setSpørMedarbeiderOm,
                    'detteKanDuSpørreMedarbeiderenOm'
                )}
                panelLestSituasjon={spørMedarbeiderOm}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Normaltekst>
                        Du kan stille spørsmål til medarbeideren som handler om forhold på
                        arbeidsplassen.
                    </Normaltekst>
                    <Normaltekst>
                        <ul>
                            <li>
                                Mulighetene til å utføre egne eller alternative arbeidsoppgaver.
                            </li>
                            <li>Behov for tilrettelegging.</li>
                            <li>
                                Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i
                                deres virksomhet.
                            </li>
                            <li>Hvor lenge medarbeideren tror fraværet vil vare.</li>
                            <li>
                                Om det er forhold på arbeidsplassen som påvirker sykefraværet eller
                                helsesituasjonen.
                            </li>
                            <li>
                                Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten
                                eller andre samarbeidspartnere for å få hjelp med tilrettelegging og
                                oppfølging.
                            </li>
                        </ul>
                    </Normaltekst>
                    <UndertekstBold className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Husk at sykefravær ikke er en privatsak, det påvirker arbeidsplassen.
                        <br /> Diagnose, behandling og forhold hjemme er privat.
                    </UndertekstBold>
                </div>
            </EkspanderbartInfopanel>
            <EkspanderbartInfopanel
                tittel={'Suksesskriterier'}
                unikId={'suksesskriterier'}
                callBack={callbackIntercept(setSuksesskriterier, 'suksesskriterier')}
                ikon={<LyspæreSVG />}
                panelLestSituasjon={suksesskriterier}
            >
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    <ul>
                        <li>Lytt til hva medarbeideren har å si.</li>
                        <li>Snakk om arbeidsevne, ikke diagnose.</li>
                        <li>Bygg på medarbeiderens motivasjon.</li>
                        <li>La medarbeideren komme med de gode løsningene.</li>
                        <li>Ikke hopp rett til konklusjoner og løsninger.</li>
                        <li>Gjennomfør samtaler regelmessig.</li>
                    </ul>
                </Normaltekst>
            </EkspanderbartInfopanel>
            <div className="samtaleverktøy__page-break" />
        </>
    );
};
