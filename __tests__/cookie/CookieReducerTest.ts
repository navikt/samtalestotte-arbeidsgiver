import { cookieInitializer, cookieReducer, CookieState } from '../../src/cookie/CookieReducer';

test('Should have empty initial state when no cookies is provided', () => {
    const { oppfølgingSamtale, samtaleverktøy, situasjonQA, sendtStatistikk } = cookieInitializer({});

    expect(objectLength(oppfølgingSamtale)).toBe(0);
    expect(objectLength(samtaleverktøy)).toBe(0);
    expect(objectLength(situasjonQA)).toBe(0);
    expect(sendtStatistikk).toBe('nei');
});

test('Should have empty initial state when provided with undefined value', () => {
    // @ts-ignore
    const { oppfølgingSamtale, samtaleverktøy, situasjonQA, sendtStatistikk } = cookieInitializer(undefined);

    expect(objectLength(oppfølgingSamtale)).toBe(0);
    expect(objectLength(samtaleverktøy)).toBe(0);
    expect(objectLength(situasjonQA)).toBe(0);
    expect(sendtStatistikk).toBe('nei');
});

test('Should have empty initial state when provided with bogus values', () => {
    const { oppfølgingSamtale, samtaleverktøy, situasjonQA, sendtStatistikk } = cookieInitializer(
    {
            'qwerty': 'dvorak',
            'foo': 'bar',
            '123123123': '789789789',
            'russells teapot': undefined
        }
    );

    expect(objectLength(oppfølgingSamtale)).toBe(0);
    expect(objectLength(samtaleverktøy)).toBe(0);
    expect(objectLength(situasjonQA)).toBe(0);
    expect(sendtStatistikk).toBe('nei');
});

test('State should contain valid values provided to initializer', () => {
    const oppfølgingSamtaleProvided = {
        'steg1Forberedelse': 'lest',
        'steg2Innledning': 'lest',
        'steg3Snakk': 'lest',
        'steg4FinnLøsning': 'lest',
        'steg5Avslutning': 'ulest'
    };
    const samtaleverktøyProvided = {
        'suksesskriterier': 'lest',
        'spørMedarbeiderOm': 'ulest',
        'arbeidssituasjonSamtale': 'lest'
    };
    const situasjonQAProvided = {
        'kjent': 'ja',
        'forutsigbar': 'nei',
        'tilrettelagt': 'ja'
    };


    const { oppfølgingSamtale, samtaleverktøy, situasjonQA, sendtStatistikk } = cookieInitializer(
        {
                ...oppfølgingSamtaleProvided,
                ...samtaleverktøyProvided,
                ...situasjonQAProvided,
                'sendtStatistikk': 'ja'
        }
    );

    expect(objectLength(oppfølgingSamtale)).toBe(objectLength(oppfølgingSamtaleProvided));
    Object.entries(oppfølgingSamtaleProvided).forEach( keyValue => {
        expect(Object.keys(oppfølgingSamtale).includes(keyValue[0])).toBe(true);
        expect(Object.values(oppfølgingSamtale).includes(keyValue[1])).toBe(true);
    })

    expect(objectLength(samtaleverktøy)).toBe(objectLength(samtaleverktøyProvided));
    Object.entries(samtaleverktøyProvided).forEach( keyValue => {
        expect(Object.keys(samtaleverktøy).includes(keyValue[0])).toBe(true);
        expect(Object.values(samtaleverktøy).includes(keyValue[1])).toBe(true);
    })


    expect(objectLength(situasjonQA)).toBe(objectLength(situasjonQAProvided));
    Object.entries(situasjonQAProvided).forEach( keyValue => {
        expect(Object.keys(situasjonQA).includes(keyValue[0])).toBe(true);
        expect(Object.values(situasjonQA).includes(keyValue[1])).toBe(true);
    })

    expect(sendtStatistikk).toBe('ja');
});

test('Reducer should update sendtStatistikk', () => {
    const initialState = cookieInitializer({});

    const newState = cookieReducer(initialState, {type: 'sendtStatistikk', payload: 'ja'});

    expect(initialState.sendtStatistikk).toBe('nei')
    expect(newState.sendtStatistikk).toBe('ja');
});

test('Reducer should update oppfølgingSamtale', () => {
    type keyType = 'steg1Forberedelse' | 'steg2Innledning' | 'steg3Snakk' | 'steg4FinnLøsning' | 'steg5Avslutning'

    const oppfølgingSamtaleProvided = {
        'steg1Forberedelse': 'lest',
        'steg2Innledning': 'lest',
        'steg3Snakk': 'lest',
        'steg4FinnLøsning': 'lest',
        'steg5Avslutning': 'ulest'
    };

    const initialState = cookieInitializer({});

    let newState = initialState;


    Object.entries(oppfølgingSamtaleProvided).forEach((keyValue, index) => {
        const key = keyValue[0] as keyType;
        const value = keyValue[1];

        newState = cookieReducer(newState, {type: key as any, payload: value});

        expect(objectLength(newState.oppfølgingSamtale)).toBe(index+1);
        expect(newState.oppfølgingSamtale[key]).toBe(oppfølgingSamtaleProvided[key]);
    })

    expect(objectLength(newState.oppfølgingSamtale)).toBe(objectLength(oppfølgingSamtaleProvided));
});

test('Reducer should update samtaleverktøy', () => {
    type keyType = 'suksesskriterier' | 'spørMedarbeiderOm' | 'arbeidssituasjonSamtale';

    const samtaleverktøyProvided = {
        'suksesskriterier': 'lest',
        'spørMedarbeiderOm': 'ulest',
        'arbeidssituasjonSamtale': 'lest'
    };

    const initialState = cookieInitializer({});

    let newState = initialState;

    Object.entries(samtaleverktøyProvided).forEach((keyValue, index) => {
        const key = keyValue[0] as keyType;
        const value = keyValue[1];

        newState = cookieReducer(newState, {type: key as any, payload: value});

        expect(objectLength(newState.samtaleverktøy)).toBe(index+1);
        expect(newState.samtaleverktøy[key]).toBe(samtaleverktøyProvided[key]);
    })

    expect(objectLength(newState.samtaleverktøy)).toBe(objectLength(samtaleverktøyProvided));
});

test('Reducer should update situasjonQA', () => {
    type keyType = 'kjent' | 'forutsigbar' | 'tilrettelagt';

    const situasjonQAProvided = {
        'kjent': 'ja',
        'forutsigbar': 'nei',
        'tilrettelagt': 'ja'
    };

    const initialState = cookieInitializer({});

    let newState = initialState;

    Object.entries(situasjonQAProvided).forEach((keyValue, index) => {
        const key = keyValue[0] as keyType;
        const value = keyValue[1];

        newState = cookieReducer(newState, {type: key as any, payload: value});

        expect(objectLength(newState.situasjonQA)).toBe(index+1);
        expect(newState.situasjonQA[key]).toBe(situasjonQAProvided[key]);
    })

    expect(objectLength(newState.situasjonQA)).toBe(objectLength(situasjonQAProvided));
});

test('Reducer should only update valid properties', () => {

    const countOfPropertiesSet = (cookieState: CookieState) : number => {
        return Object.values(cookieState).reduce((count, currentValue) =>{
            if(typeof currentValue === 'object'){
                return objectLength(currentValue) + count
            }
            return count;
        }, 0)

    }

    let state = cookieInitializer({});
    expect(state.situasjonQA.kjent).toBe(undefined);
    expect(countOfPropertiesSet(state)).toBe(0);

    state = cookieReducer(state, {type: 'kjent', payload: 'ja'});
    expect(state.situasjonQA.kjent).toBe('ja');
    expect(countOfPropertiesSet(state)).toBe(1);

    // @ts-ignore
    state = cookieReducer(state, {type: 'foobar', payload: 'bogus'})
    expect(countOfPropertiesSet(state)).toBe(1);
    // @ts-ignore
    expect(state.foobar).toBe(undefined);
    expect(objectLength(state)).toBeGreaterThan(0);
    Object.values(state).forEach(property => {
        if(typeof property === 'object'){
            expect(property.foobar).toBe(undefined)
        }
    });
});

const objectLength = (object: Object) : number => {
    return Object.keys(object).length;
};