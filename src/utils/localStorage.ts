export const hentOrgnrFraLocalStorage = (): string | null => {
    console.log('Jeg kjører');
    if (typeof window !== 'undefined') {
        console.log('Jeg kjører med vindu');
        const value = localStorage.getItem('virksomhetsvelger_bedrift');
        if (value) {
            return String(value);
        }
    }
    return null;
};
