import NaarKanEnSamtaleVaereAktuelt from './NaarKanEnSamtaleVaereAktuelt';
import DetteKanDuSpoerreMedarbeiderenOm from './DetteKanDuSpoerreMedarbeiderenOm';
import Suksesskriterier from './Suksesskriterier';
import { BodyLong, Heading } from '@navikt/ds-react';
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from 'classnames';
import { Liste } from '../../Liste/Liste';

const HvorforBrukeTidPaaSamtaler = ({ className }: { className?: string }) => {
    return (
        <section className={className}>
            <Heading size={'large'} level={'2'} className={fellesStiler.marginTop3Rem}>
                Hvorfor bruke tid på samtaler?
            </Heading>
            <p className={classNames(fellesStiler.marginBottom2Rem)}>
                <BodyLong>
                    Lovverk og rutiner forteller deg hva du skal gjøre for å forebygge og følge opp
                    sykefravær. Gode samtaler er en metode for hvordan du fyller lovkravene, slik at
                    de gir størst verdi for deg og medarbeiderne dine.
                </BodyLong>
            </p>
            <p className={fellesStiler.boldText}>Gode samtaler bidrar til:</p>
            <Liste className={fellesStiler.marginBottom4Rem}>
                <Liste.Element>lavt sykefravær og god lønnsomhet</Liste.Element>
                <Liste.Element>motiverte medarbeidere og godt arbeidsmiljø</Liste.Element>
                <Liste.Element>at du fyller dine lovpålagte plikter som arbeidsgiver</Liste.Element>
            </Liste>
            <NaarKanEnSamtaleVaereAktuelt />
            <DetteKanDuSpoerreMedarbeiderenOm />
            <Suksesskriterier />
        </section>
    );
};

export default HvorforBrukeTidPaaSamtaler;
