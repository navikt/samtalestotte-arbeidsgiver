export const hentOrgnrFraLocalStorage = (): string | null => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('virksomhetsvelger_bedrift');
        if (value) {
            return String(value);
        }
    }
    return null;
};
