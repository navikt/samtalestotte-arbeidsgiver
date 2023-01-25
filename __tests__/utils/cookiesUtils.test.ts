import {hentReferrerUrlFraCookies} from '../../src/utils/cookiesUtils';

test('Henter referrer URL fra en fullverdig Cookie', async () => {
    const result = hentReferrerUrlFraCookies({
        'samtalestotte-podlet': {
            referrer: 'https://arbeidsgiver.labs.nais.io/sykefravarsstatistikk/?bedrift=910969439',
            orgnr: '987654321',
        },
    });
    expect(result).toBe('https://arbeidsgiver.labs.nais.io/sykefravarsstatistikk/?bedrift=910969439');
});

test('Url kan være null eller undefined eller empty', async () => {
    const resultNull = hentReferrerUrlFraCookies({
        'samtalestotte-podlet': {
            referrer: null,
            orgnr: '987654321',
        },
    });
    expect(resultNull).toBe('');

    const resultUndefined = hentReferrerUrlFraCookies({
        'samtalestotte-podlet': {
            orgnr: '987654321',
        },
    });
    expect(resultUndefined).toBe('');

    expect(hentReferrerUrlFraCookies({})).toBe('');

    const resultEmpty = hentReferrerUrlFraCookies({
        'samtalestotte-podlet': {
            referrer: '',
            orgnr: '987654321',
        },
    });
    expect(resultEmpty).toBe('');

});

