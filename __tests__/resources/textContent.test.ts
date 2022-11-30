import {
    BigHeader,
    Columns,
    DocumentElement,
    HorizontalLine,
    InfoBox,
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
    Link,
    List,
    MediumHeader,
    Panel,
    Paragraph,
    SmallHeader,
    Text,
} from '../../src/dokumentgenerator/domainInterfaces';
import { isBoolean, isHeaderLevel, isNumber, isString } from '../../src/utils/typeGuardUtils';
import { SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT } from '../../src/resources/textContent';

test('Validerer JSON', () => {
    expect(isValidDomainObjects(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT)).toBe(true);
});

const isValidDomainObjects = (
    objects: (object | DocumentElement)[]
): objects is DocumentElement[] => {
    return objects.every((e) => {
        if (isParagraph(e)) {
            return isValidParagraph(e);
        }
        if (isList(e)) {
            return isValidList(e);
        }
        if (isPanel(e)) {
            return isValidPanel(e);
        }
        if (isInfoBox(e)) {
            return isValidInfoBox(e);
        }
        if (isColumns(e)) {
            return isValidColumns(e);
        }
        if (isSmallHeader(e)) {
            return isValidSmallHeader(e);
        }
        if (isMediumHeader(e)) {
            return isValidMediumHeader(e);
        }
        if (isBigHeader(e)) {
            return isValidBigHeader(e);
        }
        if (isHorizontalLine(e)) {
            return true;
        }
        if (isDownloadButtons(e)) {
            return true;
        }
        return false;
    });
};

const isValidText = (text: Text): text is Text => {
    if (
        (isBoolean(text.bold) || text.bold === undefined) &&
        isString(text.content) &&
        (isNumber(text.lineBreak) || text.lineBreak === undefined)
    ) {
        return true;
    }
    throw new Error(`${text.content} is not a valid Text object`);
};

const isValidLink = (link: Link): link is Link => {
    if (isString(link.url) && isString(link.content)) {
        return true;
    }
    throw new Error(`${link} is not a valid Link object`);
};

const isValidParagraph = (paragraph: Paragraph): paragraph is Paragraph => {
    if (isBoolean(paragraph.inline) || paragraph.inline === undefined) {
        if (isString(paragraph.content)) return true;
        if (
            paragraph.content.every((e) => {
                if (isString(e)) return true;
                if (isText(e)) return isValidText(e);
                if (isLink(e)) return isValidLink(e);
                return false;
            })
        ) {
            return true;
        }
    }
    throw new Error(`${paragraph} is not a valid Paragraph object`);
};

const isValidList = (list: List): list is List => {
    if (
        isNumber(list.level) ||
        (list.level === undefined &&
            list.content.every((sublist) =>
                sublist.every((e) => {
                    if (isString(e)) return true;
                    if (isText(e)) return isValidText(e);
                    if (isLink(e)) return isValidLink(e);
                    if (isParagraph(e)) return isValidParagraph(e);
                    if (isSmallHeader(e)) return isValidSmallHeader(e);
                    if (isMediumHeader(e)) return isValidMediumHeader(e);
                    if (isBigHeader(e)) return isValidBigHeader(e);
                    if (isList(e)) return isValidList(e);
                    return false;
                })
            ))
    ) {
        return true;
    }
    throw new Error(`
    ${list.content.flat().map((e) => {
        if (isString(e)) {
            return e;
        }
        return e.type;
    })} is not a valid List object
    `);
};

const isValidPanel = (panel: Panel): panel is Panel => {
    if (
        (panel.id === undefined || isString(panel.id)) &&
        isString(panel.title) &&
        panel.content.every(validatePanelContent)
    ) {
        return true;
    }
    throw new Error(`${panel.title} is not a valid Panel object`);
};

const isValidInfoBox = (infoBox: InfoBox): infoBox is InfoBox => {
    if (infoBox.content.every(validateTableContent)) {
        return true;
    }
    throw new Error(`${infoBox.content.map((e) => e.type)} is not a valid InfoBox object`);
};

const isValidColumns = (columns: Columns): columns is Columns => {
    if (
        columns.rightContent.every(validateTableContent) &&
        columns.leftContent.every(validateTableContent)
    ) {
        return true;
    }
    throw new Error(
        `left: ${columns.leftContent.map((e) => e.type)} right: ${columns.rightContent.map(
            (e) => e.type
        )} is not a valid Columns object`
    );
};

const isValidSmallHeader = (smallHeader: SmallHeader): smallHeader is SmallHeader => {
    if (
        (smallHeader.id === undefined || isString(smallHeader.id)) &&
        (smallHeader.level === undefined || isHeaderLevel(smallHeader.level)) &&
        isString(smallHeader.content)
    ) {
        return true;
    }
    throw new Error(`${smallHeader.content} is not a valid SmallHeader object`);
};

const isValidMediumHeader = (mediumHeader: MediumHeader): mediumHeader is MediumHeader => {
    if (
        (mediumHeader.id === undefined || isString(mediumHeader.id)) &&
        isString(mediumHeader.content)
    ) {
        return true;
    }
    throw new Error(`${mediumHeader.content} is not a valid MediumHeader object`);
};

const isValidBigHeader = (bigHeader: BigHeader): bigHeader is BigHeader => {
    if ((bigHeader.id === undefined || isString(bigHeader.id)) && isString(bigHeader.content)) {
        return true;
    }
    throw new Error(`${bigHeader.content} is not a valid BigHeader object`);
};

const validatePanelContent = (
    e:
        | Paragraph
        | List
        | HorizontalLine
        | SmallHeader
        | MediumHeader
        | BigHeader
        | InfoBox
        | Columns
) => {
    if (isColumns(e)) return isValidColumns(e);
    if (isInfoBox(e)) return isValidInfoBox(e);
    if (isParagraph(e)) return isValidParagraph(e);
    if (isList(e)) return isValidList(e);
    if (isHorizontalLine(e)) return true;
    if (isSmallHeader(e)) return isValidSmallHeader(e);
    if (isMediumHeader(e)) return isValidMediumHeader(e);
    if (isBigHeader(e)) return isValidBigHeader(e);
    return false;
};

const validateTableContent = (
    e: Paragraph | List | HorizontalLine | SmallHeader | MediumHeader | BigHeader
) => {
    if (isParagraph(e)) return isValidParagraph(e);
    if (isList(e)) return isValidList(e);
    if (isHorizontalLine(e)) return true;
    if (isSmallHeader(e)) return isValidSmallHeader(e);
    if (isMediumHeader(e)) return isValidMediumHeader(e);
    if (isBigHeader(e)) return isValidBigHeader(e);
    return false;
};