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

    let head = container?.getElementsByClassName('navds-accordion__button').item(0);
    let body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body).toBeNull();

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body?.textContent).toBe('Test ChildLukk dette panelet');

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('navds-accordion__content').item(0);

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

    let head = container?.getElementsByClassName('navds-accordion__button').item(0);

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
"<div class=\\"rvep9j3\\">
  <div class=\\"navds-accordion p1pgduac navds-accordion--closed\\"><button id=\\"ekspanderbart-infopanel__RenderTest-base\\" class=\\"navds-accordion__button\\" aria-expanded=\\"false\\" aria-controls=\\"1111111111117t7FcSZJR1\\"><span class=\\"navds-accordion__heading navds-title navds-title--s\\"><div class=\\"f3eheo1\\"><div class=\\"g1kg98jt\\"><div class=\\"t1emcwa8\\">Test title</div></div></div></span><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" focusable=\\"false\\" role=\\"img\\" class=\\"navds-accordion__chevron navds-accordion__chevron--down\\">
        <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12 17L3 8.429 4.5 7l7.5 7.143L19.5 7 21 8.429 12 17z\\" fill=\\"currentColor\\"></path>
      </svg><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" focusable=\\"false\\" role=\\"img\\" class=\\"navds-accordion__chevron navds-accordion__chevron--filled navds-accordion__chevron--down\\">
        <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12 17L3 8.429 5.5 6l6.5 6.5L18.5 6 21 8.429 12 17z\\" fill=\\"currentColor\\"></path>
      </svg></button>
    <div id=\\"1111111111117t7FcSZJR1\\" role=\\"region\\" aria-labelledby=\\"ekspanderbart-infopanel__RenderTest-base\\"></div>
  </div>
  <div class=\\"pnkhjy5\\">
    <div>Test Child</div>
  </div>
</div>"
`);

    container
        .getElementsByClassName('navds-accordion__button')
        .item(0)!!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
"<div class=\\"rvep9j3\\">
  <div class=\\"navds-accordion p1pgduac brczcel navds-accordion--closed\\"><button id=\\"ekspanderbart-infopanel__RenderTest-base\\" class=\\"navds-accordion__button\\" aria-expanded=\\"true\\" aria-controls=\\"1111111111117t7FcSZJR1\\"><span class=\\"navds-accordion__heading navds-title navds-title--s\\"><div class=\\"f3eheo1\\"><div class=\\"g1kg98jt\\"><div class=\\"t1emcwa8\\">Test title</div></div></div></span><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" focusable=\\"false\\" role=\\"img\\" class=\\"navds-accordion__chevron navds-accordion__chevron--down\\">
        <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12 17L3 8.429 4.5 7l7.5 7.143L19.5 7 21 8.429 12 17z\\" fill=\\"currentColor\\"></path>
      </svg><svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" focusable=\\"false\\" role=\\"img\\" class=\\"navds-accordion__chevron navds-accordion__chevron--filled navds-accordion__chevron--down\\">
        <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12 17L3 8.429 5.5 6l6.5 6.5L18.5 6 21 8.429 12 17z\\" fill=\\"currentColor\\"></path>
      </svg></button>
    <div id=\\"1111111111117t7FcSZJR1\\" role=\\"region\\" aria-labelledby=\\"ekspanderbart-infopanel__RenderTest-base\\"></div>
  </div>
  <div class=\\"pnkhjy5\\">
    <div>Test Child</div>
  </div>
</div>"
`);
});
