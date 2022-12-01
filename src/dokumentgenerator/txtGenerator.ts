import {
    isBigHeader,
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
import wrap from 'wordwrap';

const wrap80Characters = wrap(80);

export { mapComponents as generateTxt };

const mapComponents = (elements: (string | object)[]): string => {
    return elements
        .map((e) => {
            if (isString(e)) {
                return e;
            }
            if (isText(e)) {
                return mapText(e.content, e.bold, e.lineBreak);
            }
            if (isInfoBox(e)) {
                return mapInfoBox(mapComponents(e.content));
            }
            if (isLink(e)) {
                return mapLink(e.url, e.content);
            }
            if (isList(e)) {
                return mapList(e.content.map(mapComponents));
            }
            if (isPanel(e)) {
                return mapPanel(e.title, mapComponents(e.content));
            }
            if (isMediumHeader(e)) {
                return mapMediumHeader(e.content);
            }
            if (isParagraph(e)) {
                return isString(e.content)
                    ? mapParagraph(e.content)
                    : mapParagraph(mapComponents(e.content));
            }
            if (isBigHeader(e)) {
                return mapBigHeader(e.content);
            }
            if (isSmallHeader(e)) {
                return mapSmallHeader(e.content);
            }
            return undefined;
        })
        .filter(notUndefinedOrNull)
        .join('');
};

const mapText = (content: string, bold: boolean = false, lineBreak: number = 0) => {
    return bold ? `${'\n'.repeat(lineBreak)}**${content}**` : `${'\n'.repeat(lineBreak)}${content}`;
};

const mapInfoBox = (content: string) => {
    return `---\n${content}\n---\n`;
};

const mapLink = (url: string, content: string) => {
    return url.startsWith('#') ? content : `[${content}](${url})`;
};

const mapList = (content: string[]) => {
    return content.map((s) => wrap80Characters(`- ${s}`)).join('\n') + '\n';
};

const mapSmallHeader = (content: string) => {
    return wrap80Characters(`### ${content}\n\n`);
};

const mapMediumHeader = (content: string) => {
    return wrap80Characters(`## ${content}\n\n`);
};

const mapBigHeader = (content: string) => {
    return wrap80Characters(`# ${content}\n\n`);
};

const mapPanel = (title: string, content: string) => {
    return `---\n##${title}\n\n---\n${content}\n---\n`;
};

const mapParagraph = (content: string) => {
    return wrap80Characters(content) + '\n';
};
