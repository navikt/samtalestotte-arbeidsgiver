import { camelCase } from '../utils/stringUtils';
import {
    DocumentElement,
    isBigHeader,
    isColumns,
    isInfoBox,
    isLink,
    isList,
    isMediumHeader,
    isPanel,
    isParagraph,
    isSmallHeader,
    isText,
} from './domainInterfaces';
import {
    Bookmark,
    Document,
    ExternalHyperlink,
    HeadingLevel,
    InternalHyperlink,
    Paragraph,
    ShadingType,
    Table,
    TableBorders,
    TableCell,
    TableOfContents,
    TableRow,
    TextRun,
    WidthType,
} from 'docx';
import { isString, notUndefinedOrNull } from '../utils/typeGuardUtils';

type DocxTypes = Table | Paragraph | TableOfContents;

export const generateDocX = (elements: (string | object)[]) => {
    return new Document({
        sections: [
            {
                children: mapJson(elements),
            },
        ],
        creator: 'NAV',
        title: 'Samtalestøtte Arbeidsgiver',
    });
};

const mapJson = (elements: (string | object)[]): DocxTypes[] => {
    return elements
        .map((e) => {
            if (isColumns(e)) {
                return mapColumns(e.leftContent, e.rightContent);
            }
            if (isInfoBox(e)) {
                return mapInfoBox(e.content);
            }
            if (isList(e)) {
                return mapList(e.content);
            }
            if (isPanel(e)) {
                return mapPanel(e.title, e.content);
            }
            if (isMediumHeader(e)) {
                return mapMediumHeader(e.content, e.id);
            }
            if (isParagraph(e)) {
                return mapParagraph(e.content);
            }
            if (isBigHeader(e)) {
                return mapBigHeader(e.content, e.id);
            }
            if (isSmallHeader(e)) {
                return mapSmallHeader(e.content, e.id);
            }
            return undefined;
        })
        .flat()
        .filter(notUndefinedOrNull);
};

const mapString = (text: string) => {
    return new TextRun(text);
};
const mapText = (text: string, bold: boolean = false, lineBreak: number = 0) => {
    return new TextRun({ bold: bold, text: text, break: lineBreak });
};
const mapColumns = (leftContent: DocumentElement[], rightContent: DocumentElement[]) => {
    return new Table({
        borders: TableBorders.NONE,
        rows: [
            new TableRow({
                children: [mapTableCell(leftContent), mapTableCell(rightContent)],
            }),
        ],
    });
};

const mapInfoBox = (content: DocumentElement[]) => {
    return new Table({
        width: { type: WidthType.PERCENTAGE, size: '100%' },
        rows: [
            new TableRow({
                cantSplit: true,
                children: [mapTableCell(content, '#f1f1f1')],
            }),
        ],
    });
};

const mapTableCell = (content: DocumentElement[], shade: string = '#ffffff') => {
    const children = content
        .map((e) => {
            if (isParagraph(e)) {
                return mapParagraph(e.content);
            }
            if (isBigHeader(e)) {
                return mapBigHeader(e.content, e.id);
            }
            if (isMediumHeader(e)) {
                return mapMediumHeader(e.content, e.id);
            }
            if (isSmallHeader(e)) {
                return mapSmallHeader(e.content, e.id);
            }
            if (isList(e)) {
                return mapList(e.content, e.level);
            }
        })
        .filter(notUndefinedOrNull)
        .flat();
    return new TableCell({
        shading: { color: shade, type: ShadingType.SOLID },
        margins: { marginUnitType: WidthType.DXA, bottom: 360 },
        children: children,
    });
};

const mapLink = (text: string, url: string) => {
    return url.startsWith('#') ? mapInternalHyperLink(text, url) : mapExternalHyperLink(text, url);
};

const mapInternalHyperLink = (text: string, url: string) => {
    return new InternalHyperlink({
        children: [
            new TextRun({
                text: text,
                style: 'Hyperlink',
            }),
        ],
        anchor: url.replace('#', ''),
    });
};

const mapExternalHyperLink = (text: string, url: string) => {
    return new ExternalHyperlink({
        children: [
            new TextRun({
                text: text,
                style: 'Hyperlink',
            }),
        ],
        link: url,
    });
};

const mapList = (content: (DocumentElement | string)[][], level: number = 0): Paragraph[] => {
    return content.flatMap((x) =>
        x
            .flatMap((e, i) => {
                if (isString(e)) {
                    return i === 0
                        ? new Paragraph({
                              text: e,
                              bullet: { level: level },
                          })
                        : new Paragraph({
                              text: e,
                              indent: { start: 360 * (level + 2), left: 360 * (level + 2) },
                          });
                }
                if (isText(e)) {
                    return i === 0
                        ? new Paragraph({
                              children: [new TextRun({ bold: e.bold, text: e.content })],
                              bullet: { level: level },
                          })
                        : new Paragraph({
                              children: [new TextRun({ bold: e.bold, text: e.content })],
                              indent: { start: 360 * (level + 2), left: 360 * (level + 2) },
                          });
                }
                if (isParagraph(e)) {
                    return mapParagraph(e.content, level);
                }
                if (isLink(e)) {
                    return i == 0
                        ? new Paragraph({
                              children: [mapLink(e.content, e.url)],
                              bullet: { level: level },
                          })
                        : new Paragraph({
                              children: [
                                  new TextRun(indent('', level)),
                                  mapLink(e.content, e.url),
                              ],
                              indent: { start: 360 * (level + 2), left: 360 * (level + 2) },
                          });
                }
                if (isList(e)) {
                    return mapList(e.content, level + 1);
                }
                return undefined;
            })
            .filter(notUndefinedOrNull)
    );
};

const mapPanel = (title: string, content: (DocumentElement | string)[], id?: string) => {
    return [
        new Paragraph({
            heading: HeadingLevel.HEADING_3,
            children: [
                new Bookmark({
                    id: notUndefinedOrNull(id)
                        ? id
                        : `ekspanderbart-infopanel__${camelCase(title)}-base`,
                    children: [new TextRun(title)],
                }),
            ],
        }),
        mapJson(content),
    ]
        .flat()
        .filter(notUndefinedOrNull);
};

const mapSmallHeader = (text: string, id?: string) => {
    const unikId = id ? id : camelCase(text);
    return new Paragraph({
        heading: HeadingLevel.HEADING_4,
        spacing: {
            after: 200,
            before: 100,
        },
        children: [
            new Bookmark({
                id: unikId,
                children: [new TextRun(text)],
            }),
        ],
    });
};

const mapMediumHeader = (text: string, id?: string) => {
    const unikId = id ? id : camelCase(text);
    return [
        new Paragraph({
            heading: HeadingLevel.HEADING_2,
            spacing: {
                after: 200,
                before: 200,
            },
            children: [
                new Bookmark({
                    id: unikId,
                    children: [new TextRun(text)],
                }),
            ],
        }),
    ];
};

const mapBigHeader = (text: string, id?: string) => {
    const unikId = id ? id : camelCase(text);
    return [
        new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: {
                after: 200,
                before: 200,
            },
            children: [
                new Bookmark({
                    id: unikId,
                    children: [new TextRun(text)],
                }),
            ],
        }),
    ];
};

const mapParagraph = (content: (DocumentElement | string)[] | string, level?: number) => {
    const bullet = notUndefinedOrNull(level) ? { bullet: { level: level } } : {};
    const children = {
        children: isString(content)
            ? [new TextRun(content)]
            : content
                  .map((e) => {
                      if (isString(e)) {
                          return mapString(e);
                      }
                      if (isText(e)) {
                          return mapText(e.content, e.bold, e.lineBreak);
                      }
                      if (isLink(e)) {
                          return mapLink(e.content, e.url);
                      }
                      return undefined;
                  })
                  .filter(notUndefinedOrNull),
    };

    return new Paragraph({
        ...children,
        ...bullet,
    });
};

const indent = (content: string, level: number) => {
    return `${'\t'.repeat(level + 1)}${content}`;
};
