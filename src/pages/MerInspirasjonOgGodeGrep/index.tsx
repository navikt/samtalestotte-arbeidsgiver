import EnkleTipsForDigitaleSamtaler from './EnkleTipsForDigitaleSamtaler';
import GodeGrepForAByggeRelasjoner from './GodeGrepForAByggeRelasjoner';
import TipsOmTilrettelegging from './TipsOmTilrettelegging';
import { Heading } from '@navikt/ds-react';
import { breakBeforePage, marginBottom1Rem, marginTop2Rem } from '../../utils/fellesStiler';
import classNames from 'classnames';
import PsykiskHelsePåArbeidsplassen from './PsykiskHelsePåArbeidsplassen';

const MerInspirasjonOgGodeGrep = ({ className }: { className?: string }) => {
    return (
        <section className={classNames(breakBeforePage, className)}>
            <Heading className={classNames(marginTop2Rem, marginBottom1Rem)} size={'large'} level={'2'}>
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
