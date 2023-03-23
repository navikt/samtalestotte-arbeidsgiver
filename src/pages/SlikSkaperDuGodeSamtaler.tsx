import fellesStiler from '../utils/fellesStiler.module.css';
import classNames from 'classnames';
import styles from './SlikSkaperDuGodeSamtaler.module.css';
import { generateComponents } from '../dokumentgenerator/componentGenerator';
import { SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT } from '../resources/textContent';

const elements = generateComponents(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);

const SlikSkaperDuGodeSamtaler = ({ className }: { className?: string }) => {
    return (
        <section
            className={classNames(
                fellesStiler.breakBeforePage,
                styles.backgroundStyle,
                fellesStiler.marginTop3Rem,
                className
            )}
        >
            <>{elements}</>
        </section>
    );
};

export default SlikSkaperDuGodeSamtaler;
