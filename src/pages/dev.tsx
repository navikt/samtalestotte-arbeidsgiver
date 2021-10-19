import {Title} from "@navikt/ds-react";
import { v4 as uuidv4 } from 'uuid';
import classNames from "classnames";
import {
    boldText,
    graAvrundetBoks,
    horizontalLine,
    infoPanelKolonner,
    marginBottom1Rem,
    marginTop1Rem
} from "../utils/fellesStiler";
import {css} from "linaria";
import {SCREEN_SM_MIN} from "../utils/konstanter";
import LastNedKnapp from "../felleskomponenter/Knapper/LastNedKnapp";
import {ReactNode} from "react";
import {EkspanderbartInfopanel} from "../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel";
import LoggbarLenke from "../felleskomponenter/LoggbarLenke/LoggbarLenke";
import {DEN_VIKTIGE_SAMTALEN, GODE_GREP_FOR_AA_BYGGE_RELASJONER} from "../resources/urls";
import {SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT} from "../resources/textContent";

const buildSectionHeader = (content: string) => {
    return <Title size={'l'} level={2} key={uuidv4()}>{content}</Title>
}

const buildPanelHeader = (content: string) => {
    return <Title size={'m'} level={3} key={uuidv4()}>{content}</Title>
}

const buildSmallHeader = (content: string) => {
    return <Title size={'s'} level={4} key={uuidv4()}>{content}</Title>
}

const buildParagraph = (content: ReactNode[], bold: boolean = false) => {
    return <p className={classNames({[boldText]: bold})}>{content}</p>
}

const buildLink = (url: string, content: string) => <LoggbarLenke href={url}>{content}</LoggbarLenke>


const buildList = (content: ReactNode[]) => {
    return <ul key={uuidv4()}>
        {content.map(e => <li key={uuidv4()}>{e}</li>)}
    </ul>
}

const buildPanel = (title : string, content: ReactNode[]) => {
    const firstChildNoMarginTop = css`
      *:first-child {
        margin-top: 0;
      }
    `
    return <EkspanderbartInfopanel tittel={title} unikId={camelCase(title)} panelLestSituasjon={"ulest"}>
        <div className={classNames(marginTop1Rem, firstChildNoMarginTop)}>
            {content}
        </div>
    </EkspanderbartInfopanel>
}

const buildColumns = (leftContent: ReactNode[], rightContent: ReactNode[]) => {
    return <div className={classNames(infoPanelKolonner, marginBottom1Rem)}>
        <div className={graAvrundetBoks}>{leftContent}</div>
        <div className={graAvrundetBoks}>{rightContent}</div>
    </div>
}

const buildHorizontalLine = () => <div className={horizontalLine} />

const capitalize = (str: string) => {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1))
}

const camelCase = (str: string) => str
        .toLowerCase()
        .split(" ")
        .map((token, index) => index === 0? token: capitalize(token))
        .join("");


const buildDownloadButtons = () => {
    const downloadButtonContainerStyle = css`
        @media (min-width: ${SCREEN_SM_MIN}) {  
          justify-content: flex-start;
        }
        justify-content: center;
        margin-bottom: 2rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    `;

    return <div className={downloadButtonContainerStyle} key={uuidv4()}>
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
}

type ElementType = "Paragraph" | "SectionHeader" | "PanelHeader" | "SmallHeader" | "List" | "Link" | "Panel" | "Columns" | "HorizontalLine" | "DownloadButtons"

interface DocumentElement {
    type: ElementType
}

interface Paragraph extends DocumentElement {
    type: "Paragraph"
    content: (string | DocumentElement)[]
    bold: boolean
}

const isParagraph = (element: DocumentElement | string | object): element is Paragraph => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "Paragraph"
    }
    return false
}

interface SectionHeader extends DocumentElement {
    type: "SectionHeader"
    content: string
}

const isSectionHeader = (element: DocumentElement | string | object): element is SectionHeader => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "SectionHeader"
    }
    return false
}

interface PanelHeader extends DocumentElement {
    type: "PanelHeader"
    content: string
}

const isPanelHeader = (element: DocumentElement | string | object): element is PanelHeader => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "PanelHeader"
    }
    return false
}

interface SmallHeader extends DocumentElement {
    type: "SmallHeader"
    content: string
}

const isSmallHeader = (element: DocumentElement | string | object): element is SmallHeader => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "SmallHeader"
    }
    return false
}

interface List extends DocumentElement {
    type: "List"
    content: (string | DocumentElement)[]
}

const isList = (element: DocumentElement | string | object): element is List => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "List"
    }
    return false
}

interface Link extends DocumentElement {
    type: "Link"
    url: string
    content: string
}

const isLink = (element: DocumentElement | string | object): element is Link => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "Link"
    }
    return false
}

interface Panel extends DocumentElement{
    type: "Panel"
    title: string
    content: (DocumentElement | string)[]
}

const isPanel = (element: DocumentElement | string | object): element is Panel => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "Panel"
    }
    return false
}

interface Columns extends DocumentElement {
    type: "Columns"
    leftContent: (DocumentElement | string)[]
    rightContent: (DocumentElement | string)[]
}

const isColumns = (element: DocumentElement | string | object): element is Columns => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "Columns"
    }
    return false
}

interface DownloadButtons extends DocumentElement {
    type: "DownloadButtons"
}

const isDownloadButtons = (element: DocumentElement | string | object): element is DownloadButtons => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "DownloadButtons"
    }
    return false
}

interface HorizontalLine extends DocumentElement {
    type: "HorizontalLine"
}
const isHorizontalLine = (element: DocumentElement | string | object): element is HorizontalLine => {
    if(typeof element === "object" && element.hasOwnProperty("type")) {
        return (element as DocumentElement).type === "HorizontalLine"
    }
    return false
}

const isString = (element: DocumentElement | string | object):boolean => {
    return typeof element === 'string'
}


const mapElements = (elements: (DocumentElement | string | object)[]): ReactNode[] => {

    return elements.map(e => {
        if(isString(e)) {
            return e
        }
        if(isColumns(e)){
            return buildColumns(mapElements(e.leftContent), mapElements(e.rightContent))
        }
        if(isDownloadButtons(e)){
            return buildDownloadButtons()
        }
        if(isHorizontalLine(e)){
            return buildHorizontalLine()
        }
        if(isLink(e)){
            return buildLink(e.url, e.content)
        }
        if(isList(e)){
            return buildList(mapElements(e.content))
        }
        if(isPanel(e)){
            return buildPanel(e.title, mapElements(e.content))
        }
        if(isPanelHeader(e)){
            return buildPanelHeader(e.content)
        }
        if(isParagraph(e)){
            return buildParagraph(mapElements(e.content), e.bold)
        }
        if(isSectionHeader(e)){
            return buildSectionHeader(e.content)
        }
        if(isSmallHeader(e)){
            return buildSmallHeader(e.content)
        }
        return undefined
    })
}

const bar: (DocumentElement | string | object)[] = [
    {type: "SectionHeader",  content: "Slik skaper du gode samtaler"},
    {type: "SmallHeader",  content: "Last ned verktøyet og rediger selv:"},
    {type: "DownloadButtons"},
    {type: "Paragraph", content:["Som arbeidsgiver er du ansvalig for:"], bold: true},
    {
        type: "List",
        content:[
            "å forebygge og følge opp sykefravær",
            "å gjennomføre og dokumentere samtaler med medarbeidere",
            "å sikre at medarbeideren får bidra til å finne løsninger"
        ]
    },
    {type: "PanelHeader", content: "Forbered deg ved å:"},
    {
        type: "Panel",
        title: "Skape gode rammer",
        content: [
            {type: "PanelHeader", content: "Gode samtaler forutsetter trygghet"},
            {
                type: "Paragraph",
                content: ["Trygghet oppnår du når det er en god relasjon mellom deg og medarbeiderne, og at rammene" +
                    "rundt samtalen er forutsigbare for alle. Å vise forståelse i møte med medarbeider setter " +
                    "gode forutsetninger for samarbeidet videre."]
            },
            {
                type: "List",
                content: [
                    "Hvordan ville du selv likt å bli møtt?",
                    "Hvordan er din relasjon og holdning til medarbeideren, og hvordan kan dette påvirke dialogen?",
                    "Hvor trygg føler du deg på å gjennomføre samtaler?"
                ]
            },
            {type: "SmallHeader", content: "Dette kan du gjøre:"},
            {
                type: "Columns",
                leftContent: [
                    {type: "SmallHeader", content: "på kort sikt:"},
                    {
                        type: "List",
                        content: [
                            {
                                type: "Paragraph",
                                content: [
                                    "Planlegg bruk av samtaleteknikker for å sikre medvirkning i samtalen. ",
                                    {
                                        type: "Link",
                                        url: DEN_VIKTIGE_SAMTALEN,
                                        content: "Les mer i heftet “Den viktige samtalen” hos idebanken."
                                    }
                                ]
                            },
                            {
                                type: "Paragraph",
                                content: [
                                    "Be om veiledning før samtalen. Veiledning kan du få fra kollegaer, "+
                                    "bedriftshelsetjenesten, NAV eller andre med kompetanse på samtaler."
                                ]
                            }
                        ]
                    }
                ],
                rightContent: [
                    {type: "SmallHeader", content: "over tid og som kontinuerlig arbeid:"},
                    {
                        type: "List",
                        content: [
                            {
                                type: "Paragraph",
                                content: [
                                    "Lær mer om samtaler og samtaleteknikker.",
                                    {
                                        type: "Link",
                                        url: DEN_VIKTIGE_SAMTALEN,
                                        content: "Les mer i heftet “Den viktige samtalen” hos idebanken."
                                    }
                                ]
                            },
                            {
                                type: "Paragraph",
                                content: [
                                    "Jobb aktivt med å bygge trygge relasjoner til alle dine medarbeidere. ",
                                    {
                                        type: "Link",
                                        url: GODE_GREP_FOR_AA_BYGGE_RELASJONER,
                                        content: "Se “Gode grep for å bygge relasjoner”",
                                    },
                                    " lengre ned på siden."
                                ]
                            }
                        ]
                    }
                ]
            },
            {type: "HorizontalLine"}
        ]
    }
]


const dev = () => (
    <>
        <div>
            {mapElements(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT)}
        </div>
    </>
)



export default dev



/*
const foo = [
    buildSectionHeader("Slik skaper du gode samtaler"),
    buildSmallHeader("Last ned verktøyet og rediger selv:"),
    buildDownloadButtons(),
    buildParagraph(["Som arbeidsgiver er du ansvalig for:"], true),
    buildList([
        "å forebygge og følge opp sykefravær",
        "å gjennomføre og dokumentere samtaler med medarbeidere",
        "å sikre at medarbeideren får bidra til å finne løsninger"
    ]),
    buildPanelHeader("Forbered deg ved å:"),
    buildPanel("Skape gode rammer", [
        buildPanelHeader("Gode samtaler forutsetter trygghet"),
        buildParagraph([
            "Trygghet oppnår du når det er en god relasjon mellom deg og medarbeiderne, og at rammene" +
            "rundt samtalen er forutsigbare for alle. Å vise forståelse i møte med medarbeider setter " +
            "gode forutsetninger for samarbeidet videre."
        ]),
        buildList([
            "Hvordan ville du selv likt å bli møtt?",
            "Hvordan er din relasjon og holdning til medarbeideren, og hvordan kan dette påvirke dialogen?",
            "Hvor trygg føler du deg på å gjennomføre samtaler?"
        ]),
        buildSmallHeader("Dette kan du gjøre:"),
        buildColumns(
            [
                buildSmallHeader("på kort sikt:"),
                buildList([
                    buildParagraph([
                        "Planlegg bruk av samtaleteknikker for å sikre medvirkning i samtalen. ",
                        buildLink(DEN_VIKTIGE_SAMTALEN, "Les mer i heftet “Den viktige samtalen” hos idebanken.")
                    ]),
                    buildParagraph(["Be om veiledning før samtalen. Veiledning kan du få fra kollegaer, bedriftshelsetjenesten, NAV eller andre med kompetanse på samtaler."])
                ])
            ],
            [
                buildSmallHeader("over tid og som kontinuerlig arbeid:"),
                buildList([
                    buildParagraph([
                        "Lær mer om samtaler og samtaleteknikker.",
                        buildLink(DEN_VIKTIGE_SAMTALEN, "Les mer i heftet “Den viktige samtalen” hos idebanken.")
                    ]),
                    buildParagraph([
                        "Jobb aktivt med å bygge trygge relasjoner til alle dine medarbeidere. ",
                        buildLink(GODE_GREP_FOR_AA_BYGGE_RELASJONER, "Se “Gode grep for å bygge relasjoner”"),
                        " lengre ned på siden."
                    ])
                ])
            ]
        ),
        buildHorizontalLine()
    ])
]

 */
