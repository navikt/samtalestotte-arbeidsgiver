import { erTilbakeURLTillat } from '../../src/resources/urls';

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
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver.nav.no/forebygge-sykefravaer/'
    );
    expect(result).toBe(true);
});
test('Tester en gylldig RefURl skal returnere true', async () => {
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver-gcp.dev.nav.no/forebygge-sykefravaer/'
    );
    expect(result).toBe(true);
});

test('Should return false when status is not created', async () => {
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
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver.nav.no.hack.me/forebygge-sykefravaer'
    );
    expect(result).toBe(false);
});
