import NaarKanEnSamtaleVaereAktuelt from './NaarKanEnSamtaleVaereAktuelt';
import DetteKanDuSpoerreMedarbeiderenOm from './DetteKanDuSpoerreMedarbeiderenOm';
import Suksesskriterier from './Suksesskriterier';
import { Heading } from '@navikt/ds-react';
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from 'classnames';
import { Liste } from '../../Liste/Liste';

const HvorforBrukeTidPaaSamtaler = ({ className }: { className?: string }) => {
    return (
        <section className={className}>
            <Heading size={'large'} level={'2'}>
                Hvorfor bruke tid på samtaler?
            </Heading>
            <p className={classNames(fellesStiler.marginBottom2Rem)}>
                Å forebygge og følge opp sykefravær er et krav i loven. Å ha gode samtaler med
                medarbeiderne dine er den beste måten å fylle lovkravene på.
            </p>
            <p className={fellesStiler.boldText}>Gode samtaler bidrar til:</p>
            <Liste className={fellesStiler.marginBottom4Rem}>
                <Liste.Element>lavt sykefravær og god lønnsomhet</Liste.Element>
                <Liste.Element>motiverte medarbeidere og godt arbeidsmiljø</Liste.Element>
                <Liste.Element>
                    at du fyller dine lovpålagte plikter som arbeidsgiver
                </Liste.Element>
            </Liste>
            <NaarKanEnSamtaleVaereAktuelt />
            <DetteKanDuSpoerreMedarbeiderenOm />
            <Suksesskriterier />
        </section>
    );
};

export default HvorforBrukeTidPaaSamtaler;
