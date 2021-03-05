export const cookieInitializer = (cookies: {[name: string]: any}): CookieState => {
    let oppfølgingSamtale: Partial<OppfølgingSamtaleState> = { };
    let samtaleverktøy: Partial<SamtaleverktøyState> = { };
    let situasjonQA: Partial<SituasjonQAState> = { };
    let sendtStatistikk: 'ja' | 'nei' = 'nei';

    if(cookies !== undefined){
        oppfølgningsSamtaleKeys.forEach(key => {
            if(cookies[key] !== undefined){
                oppfølgingSamtale[key] = cookies[key]
            }
        })
        samtaleverktøyKeys.forEach(key => {
            if(cookies[key] !== undefined) {
                samtaleverktøy[key] = cookies[key]
            }
        })
        situasjonQAKeys.forEach(key => {
            if(cookies[key] !== undefined) {
                situasjonQA[key] = cookies[key]
            }
        })
        sendtStatistikk = cookies['sendtStatistikk'] === undefined ? 'nei' : cookies['sendtStatistikk']
    }

    return {oppfølgingSamtale, samtaleverktøy, situasjonQA, sendtStatistikk}
}

export interface CookieState {
    oppfølgingSamtale: Partial<OppfølgingSamtaleState>,
    samtaleverktøy: Partial<SamtaleverktøyState>,
    situasjonQA: Partial<SituasjonQAState>,
    sendtStatistikk: 'ja' | 'nei'
}

const oppfølgningsSamtaleKeys = ['steg1Forberedelse', 'steg2Innledning', 'steg3Snakk', 'steg4FinnLøsning', 'steg5Avslutning'] as const;
export type OppfølgingSamtaleState = Record<typeof oppfølgningsSamtaleKeys[number], string | undefined>

const samtaleverktøyKeys = ['arbeidssituasjonSamtale', 'spørMedarbeiderOm', 'suksesskriterier'] as const;
export type SamtaleverktøyState = Record<typeof samtaleverktøyKeys[number], string | undefined>

const situasjonQAKeys = ['forutsigbar', 'kjent', 'tilrettelagt'] as const;
export type SituasjonQAState = Record<typeof situasjonQAKeys[number], string | undefined>

export interface CookieReducerAction {
    type: keyof SituasjonQAState | keyof SamtaleverktøyState | keyof OppfølgingSamtaleState | 'sendtStatistikk'
    payload: string | undefined
}

const isInArray = (value: string | undefined, arrary: readonly string[]) => {
    return arrary.some(arrayEntry => arrayEntry === value);
}

export const cookieReducer = (state: CookieState, action: CookieReducerAction): CookieState => {
    return {
        oppfølgingSamtale: oppfølgingSamtaleReducer(state.oppfølgingSamtale, action),
        samtaleverktøy: samtaleverktøyReducer(state.samtaleverktøy, action),
        situasjonQA: situasjonQAReducer(state.situasjonQA, action),
        sendtStatistikk: sendtStatistikkReducer(state.sendtStatistikk, action)
    }
}
const oppfølgingSamtaleReducer = (state: Partial<OppfølgingSamtaleState>, action: CookieReducerAction): Partial<OppfølgingSamtaleState> => {
    if(isInArray(action.type, oppfølgningsSamtaleKeys)) {
        return {
            ...state,
            [action.type as keyof OppfølgingSamtaleState]: action.payload,
        } as unknown as OppfølgingSamtaleState
    } else {
        return state
    }
}

const samtaleverktøyReducer = (state: Partial<SamtaleverktøyState>, action: CookieReducerAction): Partial<SamtaleverktøyState> => {
    if(isInArray(action.type, samtaleverktøyKeys)) {
        return {
            ...state,
            [action.type as keyof SamtaleverktøyState]: action.payload,
        } as unknown as SamtaleverktøyState
    } else {
        return state
    }
}

const situasjonQAReducer = (state: Partial<SituasjonQAState>, action: CookieReducerAction): Partial<SituasjonQAState> => {
    if(isInArray(action.type, situasjonQAKeys)) {
        return {
            ...state,
            [action.type as keyof SituasjonQAState]: action.payload,
        } as unknown as SituasjonQAState
    } else {
        return state
    }
}

const sendtStatistikkReducer = (state: 'ja' | 'nei', action: CookieReducerAction): 'ja' | 'nei' => {
    if(action.type === 'sendtStatistikk') {
        return 'ja';
    } else {
        return state;
    }
}
