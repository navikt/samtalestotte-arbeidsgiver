import fellesStiler from '../utils/fellesStiler.module.css';
//{ breakBeforePage, marginTop3Rem }
import classNames from 'classnames';
//import { css } from 'linaria';
import styles from './SlikSkaperDuGodeSamtaler.module.css';
import { SCREEN_SM_MIN } from '../utils/konstanter';
import { generateComponents } from '../dokumentgenerator/componentGenerator';
import { SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT } from '../resources/textContent';

const elements = generateComponents(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);

const SlikSkaperDuGodeSamtaler = ({ className }: { className?: string }) => {
    return (
        <section className={classNames(fellesStiler.breakBeforePage, styles.backgroundStyle, fellesStiler.marginTop3Rem, className)}>
            {elements}
        </section>
    );
};

export default SlikSkaperDuGodeSamtaler;

/***
 * STYLES
 */
/* TODO
const backgroundStyle = css`
    @media (min-width: ${SCREEN_SM_MIN}) {
        padding-right: 3rem;
        padding-left: 3rem;
    }
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: var(--navds-global-color-blue-100);
    border-radius: 10px;
`;
 */
