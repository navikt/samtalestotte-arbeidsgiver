type ElementType =
    | 'Paragraph'
    | 'Text'
    | 'BigHeader'
    | 'MediumHeader'
    | 'SmallHeader'
    | 'List'
    | 'Link'
    | 'Panel'
    | 'Columns'
    | 'HorizontalLine'
    | 'DownloadButtons'
    | 'InfoBox';

export interface DocumentElement {
    type: ElementType
}

export interface BigHeader extends DocumentElement {
    type: "BigHeader"
    content: string
    id?: string
}
export const isBigHeader = (element: DocumentElement | string | object): element is BigHeader => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "BigHeader"
    }
    return false
}

export interface MediumHeader extends DocumentElement {
    type: "MediumHeader"
    content: string
    id?: string
}
export const isMediumHeader = (
    element: DocumentElement | string | object
): element is MediumHeader => {
    if (typeof element === 'object' && element.hasOwnProperty('type')) {
        return (element as DocumentElement).type === 'MediumHeader';
    }
    return false;
};

export interface SmallHeader extends DocumentElement {
    type: 'SmallHeader';
    content: string;
    level?: HeaderLevel;
    id?: string;
}

export type HeaderLevel = '1' | '2' | '3' | '4' | '5' | '6';

export const isSmallHeader = (
    element: DocumentElement | string | object
): element is SmallHeader => {
    if (typeof element === 'object' && element.hasOwnProperty('type')) {
        return (element as DocumentElement).type === 'SmallHeader';
    }
    return false;
};

export interface Paragraph extends DocumentElement {
    type: 'Paragraph';
    content: (Text | Link | string)[] | string;
    inline?: boolean;
}

export const isParagraph = (element: DocumentElement | string | object): element is Paragraph => {
    if (typeof element === 'object' && element.hasOwnProperty('type')) {
        return (element as DocumentElement).type === 'Paragraph';
    }
    return false;
};

export interface Text extends DocumentElement {
    type: 'Text';
    content: string;
    bold?: boolean;
    lineBreak?: number;
}

export const isText = (element: DocumentElement | string | object): element is Text => {
    if (typeof element === 'object' && element.hasOwnProperty('type')) {
        return (element as DocumentElement).type === 'Text';
    }
    return false;
};

export interface Link extends DocumentElement {
    type: "Link"
    url: string
    content: string
}
export const isLink = (element: DocumentElement | string | object): element is Link => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "Link"
    }
    return false
}

export interface List extends DocumentElement {
    type: "List"
    level?: number
    content: (string | Paragraph | Text | Link | SmallHeader | MediumHeader | BigHeader | List )[][]
}
export const isList = (element: DocumentElement | string | object): element is List => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "List"
    }
    return false
}

export interface Panel extends DocumentElement{
    type: "Panel"
    title: string
    id?: string
    content: (Paragraph | List | HorizontalLine | SmallHeader | MediumHeader | BigHeader | Columns | InfoBox)[]
}
export const isPanel = (element: DocumentElement | string | object): element is Panel => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "Panel"
    }
    return false
}

export interface Columns extends DocumentElement {
    type: "Columns"
    leftContent: (Paragraph | List | HorizontalLine | SmallHeader | MediumHeader | BigHeader)[]
    rightContent: (Paragraph | List | HorizontalLine | SmallHeader | MediumHeader | BigHeader)[]
}
export const isColumns = (element: DocumentElement | string | object): element is Columns => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "Columns"
    }
    return false
}

export interface HorizontalLine extends DocumentElement {
    type: "HorizontalLine"
}
export const isHorizontalLine = (element: DocumentElement | string | object): element is HorizontalLine => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "HorizontalLine"
    }
    return false
}

export interface DownloadButtons extends DocumentElement {
    type: "DownloadButtons", title: string | SmallHeader | MediumHeader | BigHeader
}
export const isDownloadButtons = (element: DocumentElement | string | object): element is DownloadButtons => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "DownloadButtons"
    }
    return false
}

export interface InfoBox extends DocumentElement {
    type: "InfoBox",
    content: (Paragraph | List | HorizontalLine | SmallHeader | MediumHeader | BigHeader)[]
}

export const isInfoBox = (element: DocumentElement | string | object): element is InfoBox => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "InfoBox"
    }
    return false
}
