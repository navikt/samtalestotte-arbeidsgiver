import { sendUinnloggetIATjenesteMetrikk } from '../../src/utils/ia-tjeneste-metrikker';

beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2020, 3, 1));
});

afterAll(() => {
    jest.useRealTimers();
});

test('Happy path should call fetch and return true', async () => {
    const standardFetch = global.fetch;

    global.fetch = jest.fn(() => new Promise<Response>((resolve) => resolve(dummyResponse)));

    const result = await sendUinnloggetIATjenesteMetrikk();

    expect(result).toBe(true);
    expect(global.fetch).toBeCalledTimes(1);

    expect(global.fetch).toBeCalledWith(
        'http://localhost:8080/ia-tjenester-metrikker/uinnlogget/mottatt-iatjeneste',
        {
            body: '{' + '"kilde":"SAMTALESTØTTE",' + '"type":"DIGITAL_IA_TJENESTE"' + '}',
            credentials: 'omit',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }
    );

    global.fetch = standardFetch;
});

test('Should return false when status is not created', async () => {
    const standardFetch = global.fetch;

    global.fetch = jest.fn(
        () =>
            new Promise<Response>((resolve) =>
                resolve({
                    ...dummyResponse,
                    status: 403,
                    statusText: 'ERROR',
                    json(): Promise<any> {
                        return Promise.resolve({ status: 'forbidden' });
                    },
                    ok: false,
                })
            )
    );

    const result = await sendUinnloggetIATjenesteMetrikk();

    expect(result).toBe(false);
    expect(global.fetch).toBeCalledTimes(1);

    expect(global.fetch).toBeCalledWith(
        'http://localhost:8080/ia-tjenester-metrikker/uinnlogget/mottatt-iatjeneste',
        {
            body: '{' + '"kilde":"SAMTALESTØTTE",' + '"type":"DIGITAL_IA_TJENESTE"' + '}',
            credentials: 'omit',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }
    );

    global.fetch = standardFetch;
});

test('Should return false when json throws an exception', async () => {
    const standardFetch = global.fetch;

    global.fetch = jest.fn(
        () =>
            new Promise<Response>((resolve) =>
                resolve({
                    ...dummyResponse,
                    status: 403,
                    statusText: 'ERROR',
                    json(): Promise<any> {
                        return Promise.reject('garbled');
                    },
                    ok: false,
                })
            )
    );

    const result = await sendUinnloggetIATjenesteMetrikk();

    expect(result).toBe(false);
    expect(global.fetch).toBeCalledTimes(1);

    expect(global.fetch).toBeCalledWith(
        'http://localhost:8080/ia-tjenester-metrikker/uinnlogget/mottatt-iatjeneste',
        {
            body: '{' + '"kilde":"SAMTALESTØTTE",' + '"type":"DIGITAL_IA_TJENESTE"' + '}',
            credentials: 'omit',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }
    );

    global.fetch = standardFetch;
});

const dummyResponse: Response = {
    arrayBuffer(): Promise<ArrayBuffer> {
        return Promise.resolve(new ArrayBuffer(0));
    },
    blob(): Promise<Blob> {
        return Promise.resolve(new Blob());
    },
    body: null,
    bodyUsed: false,
    clone(): Response {
        return dummyResponse;
    },
    formData(): Promise<FormData> {
        return Promise.resolve(new FormData());
    },
    headers: new Headers(),
    json(): Promise<any> {
        return Promise.resolve({ status: 'created' });
    },
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'OK',
    text(): Promise<string> {
        return Promise.resolve('');
    },
    // @ts-ignore
    trailer: Promise.resolve(new Headers()),
    type: 'basic',
    url: '',
};
