import { erTilbakeURLTillat } from '../../src/resources/urls';



test('Tester en gylldig RefURl skal returnere true', async () => {
    const result = erTilbakeURLTillat(
        'https://arbeidsgiver.nav.no/sykefravarsstatistikk?bedrift=999999999'
    );
    expect(result).toBe(true);
});

test('Should return false when status is not created', async () => {
    const result = erTilbakeURLTillat('https://farlig.url.hack(sykefravarsstatistikk');

    expect(result).toBe(false);
});
