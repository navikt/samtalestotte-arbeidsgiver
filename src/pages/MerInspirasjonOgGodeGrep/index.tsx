import EnkleTipsForDigitaleSamtaler from './EnkleTipsForDigitaleSamtaler';
import GodeGrepForAByggeRelasjoner from './GodeGrepForAByggeRelasjoner';
import TipsOmTilrettelegging from './TipsOmTilrettelegging';
import { Heading } from '@navikt/ds-react';
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from 'classnames';
import PsykiskHelsePåArbeidsplassen from './PsykiskHelsePåArbeidsplassen';

const MerInspirasjonOgGodeGrep = ({ className }: { className?: string }) => {
    return (
        <section className={classNames(fellesStiler.breakBeforePage, className)}>
            <Heading className={classNames(fellesStiler.marginTop2Rem, fellesStiler.marginBottom1Rem)} size={'large'} level={'2'}>
                Mer inspirasjon og gode grep
            </Heading>
            <PsykiskHelsePåArbeidsplassen />
            <EnkleTipsForDigitaleSamtaler />
            <GodeGrepForAByggeRelasjoner />
            <TipsOmTilrettelegging />
        </section>
    );
};

export default MerInspirasjonOgGodeGrep;
