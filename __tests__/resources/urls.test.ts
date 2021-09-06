import { erTilbakeURLTillat, hentReferrerFraUrl } from '../../src/resources/urls';

test('Tester en gylldig RefURl skal returnere true', async () => {
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver.nav.no/sykefravarsstatistikk?bedrift=999999999'
    );
    expect(result).toBe(true);
});

test('Tester en gylldig RefURl skal returnere true', async () => {
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver-q.nav.no/sykefravarsstatistikk?bedrift=999999999'
    );
    expect(result).toBe(true);
});

test('Tester en gylldig RefURl skal returnere true', async () => {
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver.labs.nais.io/sykefravarsstatistikk?bedrift=999999999'
    );
    expect(result).toBe(true);
});

test('Tester en gylldig RefURl skal returnere true', async () => {
    const result = erTilbakeURLTillat('https://arbeidsgiver.nav.no/forebygge-sykefravaer/');
    expect(result).toBe(true);
});

test('Tester en gylldig RefURl skal returnere true', async () => {
    const result = erTilbakeURLTillat('https://arbeidsgiver-gcp.dev.nav.no/forebygge-sykefravaer/');
    expect(result).toBe(true);
});

test('Tester URL hvor domain ikke er nav.no skal ikke bli tillatt', async () => {
    const result = erTilbakeURLTillat('https://farlig.url.hack/sykefravarsstatistikk');

    expect(result).toBe(false);
});

test('Tester URL hvor domain ikke er nav.no skal ikke bli tillatt', async () => {
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver.nav.no.hack.me/sykefravarsstatistikk/?bedrift=999999999'
    );
    expect(result).toBe(false);
});

test('Tester URL hvor domain ikke er nav.no skal ikke bli tillatt', async () => {
    const result = erTilbakeURLTillat('https://arbeidsgiver.nav.no.hack.me/forebygge-sykefravaer');
    expect(result).toBe(false);
});

test('Tester at hentReferrerFraUrl korrekt henter ut "forebygge-sykefravaer"', async () => {
    const result = hentReferrerFraUrl(
        'https://arbeidsgiver.nav.no/samtalestotte?referer=https://arbeidsgiver.nav.no/forebygge-sykefravaer'
    );
    expect(result).toBe('forebygge-sykefravaer');
});

test('Tester at hentReferrerFraUrl korrekt henter ut "sykefravastatistik-referrer"', async () => {
    const result = hentReferrerFraUrl(
        'https://arbeidsgiver.nav.no/samtalestotte?referer=https://arbeidsgiver.nav.no/sykefravarsstatistikk/?bedrift=1'
    );
    expect(result).toBe('sykefravarsstatistikk');
});

test('Tester at hentReferrerFraUrl korrekt henter ut referrer fra localhost', async () => {
    const result = hentReferrerFraUrl(
        'http://localhost:3000/samtalestotte?referer=http://localhost:3000/alfa/beta/gamma'
    );
    expect(result).toBe('alfa');
});

test('Tester at hentReferrerFraUrl returnerer undefined når URL ikke har noen "referer="', async () => {
    const result = hentReferrerFraUrl('http://localhost:3000/samtalestotte/');
    expect(result).toBe(undefined);
});

test('Tester at hentReferrerFraUrl returnerer korrekt referer', async () => {
    const result = hentReferrerFraUrl(
        'https://arbeidsgiver.nav.no/samtalestotte?referrer=http://www.ref.com/beta?test=1'
    );
    expect(result).toBe('beta');
});

test('Tester at hentReferrerFraUrl returnerer korrekt referer', async () => {
    const result = hentReferrerFraUrl('"https://nav.no?referer=http://hei.com/X/Y"');
    expect(result).toBe('X');
});