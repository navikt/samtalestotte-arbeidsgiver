import NaarKanEnSamtaleVaereAktuelt from './NaarKanEnSamtaleVaereAktuelt';
import DetteKanDuSpoerreMedarbeiderenOm from './DetteKanDuSpoerreMedarbeiderenOm';
import Suksesskriterier from './Suksesskriterier';
import SeHvorMyeSykefravaeretDittKoster from './SeHvorMyeSykefravaeretDittKoster';
import { Title } from '@navikt/ds-react';
import { boldText, marginBottom2Rem, marginBottom4Rem } from '../../utils/fellesStiler';

const HvorforBrukeTidPaaSamtaler = ({className}: {className?: string}) => {
    return <section className={className}>
        <Title size={"l"} level={2}>
            Hvorfor bruke tid på samtaler?
        </Title>
        <p className={marginBottom2Rem}>
            Lovverk og rutiner forteller deg hva du skal gjøre for å forebygge og følge opp sykefravær.
            Gode samtaler er en metode for hvordan du fyller lovkravene, slik at de gir størst verdi for deg og medarbeiderne dine.
        </p>
        <p className={boldText}>
            Gode samtaler bidrar til:
        </p>
        <ul className={marginBottom4Rem}>
            <li>
                lavt sykefravær og god lønnsomhet
            </li>
            <li>
                motiverte medarbeidere og godt arbeidsmiljø
            </li>
            <li>
                at du fyller dine lovpålagte plikter som arbeidsgiver
            </li>
        </ul>
        <NaarKanEnSamtaleVaereAktuelt/>
        <DetteKanDuSpoerreMedarbeiderenOm/>
        <SeHvorMyeSykefravaeretDittKoster/>
        <Suksesskriterier/>
    </section>
}

export default HvorforBrukeTidPaaSamtaler;
