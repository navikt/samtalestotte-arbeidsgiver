import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import LoggbarLenke from '../../../src/felleskomponenter/LoggbarLenke/LoggbarLenke';
import logEvent from '../../../src/amplitude/amplitude';
import {createRoot} from "react-dom/client";
import {waitFor} from "@testing-library/dom";
import {render} from '@testing-library/react'

jest.mock("../../../src/amplitude/amplitude", () => jest.fn());

let container: HTMLDivElement | null;

test('Should call logEvent when clicked',async () => {
    const container = render(
        <LoggbarLenke href={"mockHrefTil"} className={'loggbarlenkeTest'} data-testid='loggbar-lenke'>
            TestText
        </LoggbarLenke>
    );

    const lenke = container.getByRole('link');

    act(() => {
        lenke.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    await waitFor(()=> {
        expect(logEvent).toBeCalledTimes(1)
        expect(logEvent).toBeCalledWith('navigere', {
            destinasjon: 'mockHrefTil',
            lenketekst: 'TestText',
        })
    })
})

