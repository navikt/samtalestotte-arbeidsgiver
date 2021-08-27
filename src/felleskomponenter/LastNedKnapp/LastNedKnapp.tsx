import { LoggbarLenkeKnapp } from '../LoggbarLenke/LoggbarLenkeKnapp';
import { Download } from '@navikt/ds-icons';
import { css } from 'linaria';

export default function LastNedKnapp(props: { lenketekst: string; href: string; filtype: string }) {
    return (
        <LoggbarLenkeKnapp
            className={downloadButtonStyle}
            lenketekst={props.lenketekst}
            href={props.href}
            download={props.filtype}
        >
            <Download />
            {props.lenketekst}
        </LoggbarLenkeKnapp>
    );
}

const downloadButtonStyle = css`
    width: 200px;
    padding: 10px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    :hover {
        svg {
            color: white;
        }
    }
`;
