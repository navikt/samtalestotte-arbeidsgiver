import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { EkspanderbartInfopanel } from '../../../src/felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
    jest.useRealTimers();
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Should expand and display innhold when clicked', () => {
    act(() => {
        ReactDOM.render(
            <EkspanderbartInfopanel
                unikId={'RenderTest'}
                tittel={'Test title'}
                panelLestSituasjon={undefined}
                callBack={() => {}}
            >
                Test Child
            </EkspanderbartInfopanel>,
            container
        );
    });

    let head = container?.getElementsByClassName('ekspanderbartPanel__hode').item(0);
    let body = container
        ?.getElementsByClassName('ekspanderbart-infopanel__innhold-no-print')
        .item(0);

    expect(body).toBeNull();

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('ekspanderbart-infopanel__innhold-no-print').item(0);

    expect(body?.textContent).toBe('Test Child');

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('ekspanderbart-infopanel__innhold-no-print').item(0);

    expect(body).toBeNull();
});

test('should use callback after 500ms delay on  click', async () => {
    const callback = jest.fn();

    act(() => {
        ReactDOM.render(
            <EkspanderbartInfopanel
                unikId={'RenderTest'}
                tittel={'Test title'}
                panelLestSituasjon={'ulest'}
                callBack={callback}
            >
                Test Child
            </EkspanderbartInfopanel>,
            container
        );
    });
    expect(callback).not.toHaveBeenCalled();

    let head = container?.getElementsByClassName('ekspanderbartPanel__hode').item(0);

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
        jest.advanceTimersByTime(500);
    });

    expect(callback).toHaveBeenCalled();
});

test('Snapshot test', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <EkspanderbartInfopanel
                unikId={'RenderTest'}
                tittel={'Test title'}
                panelLestSituasjon={undefined}
                callBack={() => {}}
            >
                Test Child
            </EkspanderbartInfopanel>,
            container
        );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
"<div class=\\"ekspanderbart-infopanel__root\\">
  <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__RenderTest-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
      <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-flex-container\\"><div class=\\"ekspanderbart-infopanel__tittel-grid\\"><div class=\\"ekspanderbart-infopanel__tittel-text\\">Test title</div></div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
    </button>
    <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__RenderTest-base\\"></div>
  </div>
  <div class=\\"ekspanderbart-infopanel__print-innhold\\">
    <div>Test Child</div>
  </div>
</div>"
`);

    container
        .getElementsByClassName('ekspanderbartPanel__hode')
        .item(0)!!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
"<div class=\\"ekspanderbart-infopanel__root\\">
  <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--apen ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__RenderTest-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"true\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
      <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-flex-container\\"><div class=\\"ekspanderbart-infopanel__tittel-grid\\"><div class=\\"ekspanderbart-infopanel__tittel-text\\">Test title</div></div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
    </button>
    <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__RenderTest-base\\">
      <div class=\\"ekspanderbartPanel__innhold\\">
        <div class=\\"ekspanderbart-infopanel__innhold ekspanderbart-infopanel__innhold-no-print\\">
          <div>Test Child</div>
        </div><button class=\\"ekspanderbart-infopanel__lukk-knapp\\"><span class=\\"typo-normal \\">Lukk dette panelet</span><span class=\\"nav-frontend-chevron chevronboks ekspanderbart-infopanel__lukk-chevron chevron--opp\\"></span></button>
      </div>
    </div>
  </div>
  <div class=\\"ekspanderbart-infopanel__print-innhold\\">
    <div>Test Child</div>
  </div>
</div>"
`);
});
