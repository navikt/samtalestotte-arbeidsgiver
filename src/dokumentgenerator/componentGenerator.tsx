import { Heading } from '@navikt/ds-react';
import { v4 as uuidv4 } from 'uuid';
import { ReactNode } from 'react';
import classNames from 'classnames';
import fellesStiler from '../utils/fellesStiler.module.css';
import LoggbarLenke from '../felleskomponenter/LoggbarLenke/LoggbarLenke';
import styles from './componentGenerator.module.css';
import { EkspanderbartInfopanel } from '../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { camelCase } from '../utils/stringUtils';
import LastNedKnapp from '../felleskomponenter/Knapper/LastNedKnapp';
import {
    isBigHeader,
    isColumns,
    isDownloadButtons,
    isHorizontalLine,
    isInfoBox,
    isLink,
    isList,
    isMediumHeader,
    isPanel,
    isParagraph,
    isSmallHeader,
    isText,
} from './domainInterfaces';
import { isString, notUndefinedOrNull } from '../utils/typeGuardUtils';
import { repeat } from '../utils/ArrayUtils';
import { Liste } from '../Liste/Liste';

export { mapComponents as generateComponents };

const mapComponents = (elements: (string | object)[]): ReactNode[] => {
    return elements
        .map((e) => {
            if (isString(e)) {
                return e;
            }
            if (isText(e)) {
                return mapText(e.content, e.bold, e.lineBreak);
            }
            if (isColumns(e)) {
                return mapColumns(mapComponents(e.leftContent), mapComponents(e.rightContent));
            }
            if (isInfoBox(e)) {
                return mapInfoBox(mapComponents(e.content));
            }
            if (isDownloadButtons(e)) {
                return mapDownloadButtons(mapComponents([e.title]));
            }
            if (isHorizontalLine(e)) {
                return mapHorizontalLine();
            }
            if (isLink(e)) {
                return mapLink(e.url, e.content);
            }
            if (isList(e)) {
                return mapList(e.content.map(mapComponents));
            }
            if (isPanel(e)) {
                return mapPanel(e.title, mapComponents(e.content), e.id);
            }
            if (isMediumHeader(e)) {
                return mapMediumHeader(e.content, e.id);
            }
            if (isParagraph(e)) {
                return isString(e.content)
                    ? mapParagraph(e.content)
                    : mapParagraph(mapComponents(e.content));
            }
            if (isBigHeader(e)) {
                return mapBigHeader(e.content, e.id);
            }
            if (isSmallHeader(e)) {
                return mapSmallHeader(e.content, e.id);
            }
            return undefined;
        })
        .filter(notUndefinedOrNull);
};

const mapBigHeader = (content: string, id?: string) => {
    const unikId = id ? id : camelCase(content);
    return (
        <Heading id={unikId} size={'large'} level={'2'} key={uuidv4()}>
            {content}
        </Heading>
    );
};

const mapMediumHeader = (content: string, id?: string) => {
    const unikId = id ? id : camelCase(content);
    return (
        <Heading
            id={unikId}
            size={'medium'}
            level={'3'}
            key={uuidv4()}
            className={classNames(fellesStiler.marginTop4Rem, fellesStiler.marginBottom1Rem)}
        >
            {content}
        </Heading>
    );
};

const mapSmallHeader = (content: string, id?: string) => {
    const unikId = id ? id : camelCase(content);
    return (
        <Heading
            id={unikId}
            size={'small'}
            level={'4'}
            key={uuidv4()}
            className={classNames(fellesStiler.marginTop2Rem, fellesStiler.marginBottom1Rem)}
        >
            {content}
        </Heading>
    );
};

const mapParagraph = (content: ReactNode) => {
    return <p key={uuidv4()}>{content}</p>;
};

const mapText = (content: string, bold: boolean = false, lineBreak: number = 0) => {
    return (
        <>
            {repeat(
                () => (
                    <br key={uuidv4()} />
                ),
                lineBreak
            )}
            <span key={uuidv4()} className={classNames({ [fellesStiler.boldText]: bold })}>
                {content}
            </span>
        </>
    );
};

const mapLink = (url: string, content: string) => (
    <LoggbarLenke key={uuidv4()} href={url}>
        {content}
    </LoggbarLenke>
);

const mapList = (content: ReactNode[]) => {
    return (
        <Liste key={uuidv4()}>
            {content.map((e) => (
                <Liste.Element key={uuidv4()}>{e}</Liste.Element>
            ))}
        </Liste>
    );
};

const mapPanel = (title: string, content: ReactNode[], id?: string) => {
    const unikId = id ? id : `ekspanderbart-infopanel__${camelCase(title)}-base`;

    return (
        <EkspanderbartInfopanel
            key={uuidv4()}
            tittel={title}
            unikId={unikId}
            panelLestSituasjon={'ulest'}
        >
            <div className={classNames(fellesStiler.marginTop1Rem, styles.firstChildNoMarginTop)}>{content}</div>
        </EkspanderbartInfopanel>
    );
};

const mapColumns = (leftContent: ReactNode[], rightContent: ReactNode[]) => {
    return (
        <div key={uuidv4()} className={classNames(fellesStiler.infoPanelKolonner, fellesStiler.marginBottom1Rem)}>
            <div className={fellesStiler.graAvrundetBoks}>{leftContent}</div>
            <div className={fellesStiler.graAvrundetBoks}>{rightContent}</div>
        </div>
    );
};

const mapInfoBox = (content: ReactNode[]) => {
    return (
        <div key={uuidv4()} className={fellesStiler.graAvrundetBoks}>
            {content}
        </div>
    );
};

const mapHorizontalLine = () => <div key={uuidv4()} className={fellesStiler.horizontalLine} />;

const mapDownloadButtons = (title: ReactNode) => {

    return (
        <div className={styles.downloadButtonContainer} key={uuidv4()}>
            {title}
            <LastNedKnapp
                knappetekst="Last ned i Word"
                href="/samtalestotte/Samtalestøtte-Arbeidsgiver.docx"
                label="last-ned-docx"
            />
            <LastNedKnapp
                knappetekst="Last ned i .txt"
                href="/samtalestotte/Samtalestøtte-Arbeidsgiver.txt"
                label="last-ned-txt"
            />
        </div>

    );
};
