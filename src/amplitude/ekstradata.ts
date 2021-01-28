import { SvarType } from '../felleskomponenter/SituasjonQA/Svar/Svar';

export interface Ekstradata {
    situasjon: {
        forutsigbar: SvarType;
        kjent: SvarType;
        tilrettelagt: SvarType;
    };
}
