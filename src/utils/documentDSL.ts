interface DocumentElement {
    type: string
    content: string | DocumentElement | DocumentElement[]
}

interface List extends DocumentElement {
    type: "LIST"
    content: DocumentElement[]
}

interface Paragraph extends DocumentElement {
    type: "PARAGRAPH"
    content: TextRun[],
}

interface TextRun extends DocumentElement {
    type: "TEXTRUN",
    content: string,
    bold: boolean

}



const paraGraph = (content: TextRun[]):Paragraph => ({type: "PARAGRAPH", content: content})
const list = (content: DocumentElement[]):List => ({type: "LIST", content: content})

/*
const list1: List = list([paraGraph("hello"), paraGraph("world")])
const list2: List = list([paraGraph("foo"), paraGraph("bar")])
const listOfList: List = list([list1, list2])

const indent = (level: number) => "\t".repeat(level)

const parseDSL = (root: DocumentElement, level: number):string => {
    switch (root.type) {
        case "LIST":
            return (
                indent(level) + "[\n"
                + (root as List).content.map(content => parseDSL(content, level+1)).join("")
                + indent(level) + "]\n")
            break;
        case "PARAGRAPH":
            return indent(level) + (root as Paragraph).content + "\n"
            break;
        default: return ""
    }
}

 */

//export const foo = parseDSL(listOfList, 0)
