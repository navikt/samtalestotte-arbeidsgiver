export const getStickyHeaderOffset = (stickyHeader: HTMLElement | null) : number => {
    if(stickyHeader === null) return 0;
    const rect = stickyHeader.getBoundingClientRect();
    return rect.height + rect.top > 0 ? rect.height : 0;
}

export const onLukkScroll = (panelKnapp: HTMLElement | null, headerOffset = 0) => {
    if(panelKnapp === null || window === null || window === undefined) {
        return;
    }
    /**
     * spacingOffset : Offset for å skape 'luft' over elementet
     * pageYOffset : Hvor langt selve siden har blitt scrollet ned
     * hovedMenyOffset : Offset tilsvarende høyden på hovedmeny hvis den er synlig
     * elementPosition : Hvor toppen av det ekspanderbarte panelet er relativt til viewscreen
     *                      Negative verdier representerer posisjon over det du ser på skjermen
     *
     */
    const spacingOffset = -16;
    const pageYOffset = window.pageYOffset;
    const elementPosition = panelKnapp.getBoundingClientRect().top;
    const hovedMenyOffset = headerOffset;
    if (elementPosition < 0) {
        window.scrollTo({
            top: elementPosition + pageYOffset + spacingOffset - hovedMenyOffset,
            behavior: "auto"
        });
    }
}
