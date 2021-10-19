import {DEN_VIKTIGE_SAMTALEN, GODE_GREP_FOR_AA_BYGGE_RELASJONER} from "./urls";

export const SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT: (DocumentElement | string | object)[] = [
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