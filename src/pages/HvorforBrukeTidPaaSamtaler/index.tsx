import NaarKanEnSamtaleVaereAktuelt from './NaarKanEnSamtaleVaereAktuelt';
import DetteKanDuSpoerreMedarbeiderenOm from './DetteKanDuSpoerreMedarbeiderenOm';
import Suksesskriterier from './Suksesskriterier';
import { LyspæreSVG } from '../../felleskomponenter/Samtaleverktøy/LyspæreSVG';
import SeHvorMyeSykefravaeretDittKoster from './SeHvorMyeSykefravaeretDittKoster';

const HvorforBrukeTidPaaSamtaler = () => {
    return <>
        <h2 className={"section-header"}>
            Hvorfor bruke tid på samtaler?
        </h2>
        <p className={"margin-bunn-2rem"}>
            Her får du som arbeidsgiver hjelp og praktiske råd for hvordan du kan fylle dine lovpålagte
            plikter innen forebygging og oppfølging av sykefravær. Du får råd om hva du kan gjøre på kort
            sikt og hva du kan gjøre på lang sikt.
        </p>
        <p className={"bold-text"}>
            Gode samtaler bidrar til:
        </p>
        <ul>
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
        <p className={"margin-bunn-2rem"}>
            Lovverk og rutiner forteller deg hva du skal gjøre for å forebygge og følge opp sykefravær.
            Gode samtaler er en metode for hvordan du fyller lovkravene, slik at de gir størst verdi for deg
            og medarbeiderne dine.
        </p>
        <NaarKanEnSamtaleVaereAktuelt/>
        <DetteKanDuSpoerreMedarbeiderenOm/>
        <SeHvorMyeSykefravaeretDittKoster/>
        <Suksesskriterier ikon={<LyspæreSVG />} lestIkon={<LyspæreSVG />}/>
    </>
}

export default HvorforBrukeTidPaaSamtaler;