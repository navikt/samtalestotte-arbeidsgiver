import {
    erTilbakeURLTillat,
    getReferrerUrlFraUrlMedQueryParameter,
    utleddApplikasjonsnavnFraUrl
} from '../../src/resources/urls';


describe('Tester uthenting av referrer URL fra fullstendig Url med query parametre ', () => {
    test('Henter ut referrerUrl for forebygge-sykefravaer', () => {
        const result = getReferrerUrlFraUrlMedQueryParameter(
            'https://arbeidsgiver.nav.no/samtalestotte?referer=https://arbeidsgiver.nav.no/forebygge-sykefravaer'
        );
        expect(result).toBe('https://arbeidsgiver.nav.no/forebygge-sykefravaer');
    });

    test('Henter ut referrerUrl fra localhost', () => {
        const result = getReferrerUrlFraUrlMedQueryParameter(
            'http://localhost:3000/samtalestotte?referer=http://localhost:3000/alfa/beta/gamma'
        );
        expect(result).toBe('http://localhost:3000/alfa/beta/gamma');
    });

    test('Henter ut referrerUrl for "sykefravastatistik"', async () => {
        const result = getReferrerUrlFraUrlMedQueryParameter(
            'https://arbeidsgiver-gcp.dev.nav.no/samtalestotte?referer=https://arbeidsgiver-q.nav.no/sykefravarsstatistikk/?bedrift=987654321'
        );
        expect(result).toBe('https://arbeidsgiver-q.nav.no/sykefravarsstatistikk/?bedrift=987654321');
    });

    test('Tester at hentReferrerFraUrl returnerer undefined når URL ikke har noen "referer="', async () => {
        const result = getReferrerUrlFraUrlMedQueryParameter('http://localhost:3000/samtalestotte/');
        expect(result).toBe(undefined);
    });

    test('Henter ut referrerUrl, selv med anchors ', async () => {
        const result = getReferrerUrlFraUrlMedQueryParameter(
            'https://arbeidsgiver.nav.no?referrer=https://arbeidsgiver.nav.no/forebygge-sykefravaer#GjennomforSamtalen'
        );
        expect(result).toBe('https://arbeidsgiver.nav.no/forebygge-sykefravaer#GjennomforSamtalen');
    });

    test('Tester at hentReferrerFraUrl returnerer korrekt referer uavhengig av domene', async () => {
        const result = getReferrerUrlFraUrlMedQueryParameter('https://nav.no?referer=http://hei.com/X/Y');
        expect(result).toBe('http://hei.com/X/Y');
    });

    test('Tester at hentReferrerFraUrl returnerer korrekt referer som kan være en ekstern lenke', async () => {
        const result = getReferrerUrlFraUrlMedQueryParameter(
            'https://arbeidsgiver.nav.no/samtalestotte?referrer=http://www.ref.com/beta?test=1'
        );
        expect(result).toBe('http://www.ref.com/beta?test=1');
    });
});

describe('Tester for funksjonen utleddApplikasjonsnavnFraUrl() ', () => {
    test('Uthenting av applikasjonsnavn "forebygge-sykefravaer" fra ReferrerUrl', async () => {
        const result = utleddApplikasjonsnavnFraUrl(
            'https://arbeidsgiver.nav.no/forebygge-sykefravaer'
        );
        expect(result).toBe('forebygge-sykefravaer');
    });

    test('Uthenting av applikasjonsnavn "sykefravarsstatistikk" fra ReferrerUrl', async () => {
        const result = utleddApplikasjonsnavnFraUrl(
            'https://arbeidsgiver.nav.no/sykefravarsstatistikk/?bedrift=1'
        );
        expect(result).toBe('sykefravarsstatistikk');
    });

    test('Returnerer UKJENT_REFERRER dersom ingen kjent applikasjon står i ReferrerUrl', async () => {
        const result = utleddApplikasjonsnavnFraUrl(
            'http://localhost:3000/alfa/beta/gamma'
        );
        expect(result).toBe('UKJENT_REFERRER');
    });

    test('Uthenting av applikasjonsnavn uavhengig av domene eller miljø', async () => {
        const result = utleddApplikasjonsnavnFraUrl(
            'https://arbeidsgiver-q.nav.no/sykefravarsstatistikk/?bedrift=910562436'
        );
        expect(result).toBe('sykefravarsstatistikk');
    });

    test('Tar hensyn til en liste av kjente applikasjoner (samtalestøtte er ikke i denne lista)', async () => {
        const result = utleddApplikasjonsnavnFraUrl('http://localhost:3000/samtalestotte/');
        expect(result).toBe("UKJENT_REFERRER");
    });

    test('Uthenting av applikasjonsnavn uavhengig av domene eller miljø', async () => {
        const result = utleddApplikasjonsnavnFraUrl(
            'http://www.ref.com/beta?test=1'
        );
        expect(result).toBe('UKJENT_REFERRER');
    });

    test('Uthenting av applikasjonsnavn uavhengig av domene eller miljø', async () => {
        const result = utleddApplikasjonsnavnFraUrl('https://nav.no?referer=http://hei.com/X/Y');
        expect(result).toBe('UKJENT_REFERRER');
    });

    test('Tar hensyn til anchors', async () => {
        const result = utleddApplikasjonsnavnFraUrl(
            'https://arbeidsgiver.nav.no/forebygge-sykefravaer#GjennomforSamtalen'
        );
        expect(result).toBe('forebygge-sykefravaer');
    });

    test('Fungerer for noen applikasjoner som ikke er i vårt PO', async () => {
        const result = utleddApplikasjonsnavnFraUrl('https://www.nav.no/syk/oppfolgingsplanarbeidsgiver');
        expect(result).toBe('oppfolgingsplanarbeidsgiver');
    });

    test('Fungerer for noen applikasjoner som ikke er i vårt PO', async () => {
        const result = utleddApplikasjonsnavnFraUrl('https://www.nav.no/syk/oppfolgingsplanarbeidsgiver/8b4a7c88-46a6-4487-bf0e-7b5e4532c035/oppfolgingsplaner');
        expect(result).toBe('oppfolgingsplanarbeidsgiver');
    });

    test('Fungerer for noen applikasjoner som ikke er i vårt PO', async () => {
        const result = utleddApplikasjonsnavnFraUrl('https://www.nav.no/syk/oppfolgingsplanarbeidsgiver/8b4a7c88-46a6-4487-bf0e-7b5e4532c035/oppfolgingsplaner/985793#arbeidsoppgaver');
        expect(result).toBe('oppfolgingsplanarbeidsgiver');
    });
});

describe('Tester om en URL er tillat for navigasjon (Tilbake knapp) med funksjonen erTilbakeUrlTillat() ', () => {
    test('Tester at erTilbakeURLTillat til nav.no-produksjon returnerer true', async () => {
        const result = erTilbakeURLTillat('https://www.nav.no/no/bedrift');
        expect(result).toBe(true);
    });

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

    test('Tester at erTilbakeURLTillat returnerer true for www-gcp.dev.nav.no', async () => {
        const result = erTilbakeURLTillat('https://www-gcp.dev.nav.no/syk/oppfolgingsplanarbeidsgiver/8b4a7c88-46a6-4487-bf0e-7b5e4532c035/oppfolgingsplaner');
        expect(result).toBe(true);
    });

    test('Tester at erTilbakeURLTillat returnerer true for oppfolgingsplanarbeidsgiver prodmiljø', async () => {
        const result = erTilbakeURLTillat('https://www.nav.no/syk/oppfolgingsplanarbeidsgiver/8b4a7c88-46a6-4487-bf0e-7b5e4532c035/oppfolgingsplaner');
        expect(result).toBe(true);
    });

    test('Tester at erTilbakeURLTillat returnerer true for oppfolgingsplanarbeidsgiver testmiljø', async () => {
        const result = erTilbakeURLTillat(
            'https://oppfolgingsplanarbeidsgiver.herokuapp.com/oppfolgingsplanarbeidsgiver/28790/oppfolgingsplaner'
        );
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

    test('Tester URL hvor domain ikke er nav.no skal ikke bli tillatt', async () => {
        const result = erTilbakeURLTillat('https://oppfolgingsplanarbeidsgiver.herokuapp.hacked.com');
        expect(result).toBe(false);
    });
})

