import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Home from '../../src/pages/index';
import { PageProps } from '../../src/pageProps';
import { DecoratorParts } from '../../src/utils/dekorator';

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    jest.useFakeTimers();
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
    jest.spyOn(global.Math, 'random').mockRestore();
    jest.useRealTimers();
});

test('Snapshot test', async () => {
    if (container === null) {
        fail();
    }
    act(() => {
        ReactDOM.render(<Home page={pageProps} />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div>
          <main>
            <div class=\\"layout\\">
              <div></div>
              <div id=\\"app\\" class=\\"app\\">
                <div class=\\"page-banner\\">
                  <div class=\\"page-banner__innhold\\">
                    <div class=\\"page-banner__tekst-og-kontekst\\">
                      <h1 class=\\"typo-sidetittel page-banner__tekst\\"></h1>
                      <p class=\\"typo-normal page-banner__kontekst-tekst\\">Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid</p>
                    </div><svg class=\\"page-banner__svg\\" width=\\"200\\" height=\\"160\\" viewBox=\\"0 0 200 160\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M107.429 158H60.5709C58.5988 158 57 156.381 57 154.383V88.6171C57 86.6205 58.5988 85 60.5709 85H107.429C109.401 85 111 86.6205 111 88.6171V154.383C111 156.381 109.401 158 107.429 158\\" fill=\\"#A0A0A0\\"></path>
                      <rect width=\\"46\\" height=\\"55\\" transform=\\"translate(61 89)\\" fill=\\"white\\"></rect>
                      <rect x=\\"64\\" y=\\"92\\" width=\\"40\\" height=\\"12\\" fill=\\"#C2EAF7\\"></rect>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M64 109H104V111H64V109Z\\" fill=\\"#F1F1F1\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M64 114H104V116H64V114Z\\" fill=\\"#F1F1F1\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M64 119H104V121H64V119Z\\" fill=\\"#F1F1F1\\"></path>
                      <path d=\\"M76.8104 133.587C76.8361 133.565 76.6804 133.706 76.5873 133.785C76.4231 133.924 76.2501 134.058 76.0627 134.185C75.2559 134.731 74.4124 135.017 73.5304 134.849C73.5193 134.847 73.5193 134.847 73.5081 134.845C71.9544 134.534 70.7911 133.909 69.8218 132.998C69.4177 132.619 68.5356 131.582 68.4329 131.497C68.3711 131.446 68.1286 131.589 66.7861 133.296C66.4446 133.73 65.816 133.805 65.3818 133.464C64.9477 133.122 64.8726 132.493 65.214 132.059C67.2002 129.534 68.3658 128.849 69.7055 129.954C69.9762 130.178 70.9158 131.282 71.1912 131.541C71.8964 132.203 72.7253 132.648 73.9004 132.883L73.9051 132.884C74.1594 132.933 74.5302 132.807 74.941 132.529C75.0638 132.446 75.1805 132.356 75.2928 132.26C75.3569 132.206 75.5067 132.071 75.507 132.071C76.1243 131.54 77.2707 130.069 78.875 127.72L79.0027 127.568C79.6492 126.937 80.458 126.799 81.1441 127.306C81.5382 127.597 81.794 128.005 82.105 128.681C82.1928 128.872 82.4855 129.548 82.5007 129.582C82.8149 130.291 83.0666 130.704 83.2618 130.879C83.3108 130.832 83.3717 130.77 83.4469 130.689C83.5103 130.62 83.5103 130.62 83.579 130.544C84.3018 129.749 84.7177 129.438 85.5119 129.487C86.3893 129.542 86.974 129.819 88.1306 130.552L88.1514 130.565C89.0199 131.116 89.39 131.295 89.8095 131.333C90.1119 131.36 90.4216 131.379 90.7402 131.389C92.0993 131.433 93.2877 131.35 95.613 131.101C99.9361 130.637 101.52 130.627 103.408 131.402C103.919 131.612 104.163 132.196 103.953 132.707C103.743 133.218 103.159 133.462 102.648 133.252C101.197 132.657 99.7769 132.666 95.8263 133.09C93.4115 133.349 92.1557 133.436 90.6752 133.388C90.3191 133.376 89.971 133.356 89.6294 133.325C88.7799 133.248 88.2211 132.977 87.0806 132.254L87.06 132.241C86.1892 131.689 85.8102 131.51 85.3882 131.484C85.4585 131.488 85.3503 131.569 85.0587 131.889C84.9899 131.965 84.9899 131.965 84.9161 132.046C84.2069 132.813 83.6481 133.152 82.781 132.868C81.8215 132.555 81.3007 131.81 80.6723 130.393C80.6492 130.34 80.3648 129.684 80.2879 129.517C80.2561 129.448 80.2258 129.384 80.1974 129.327C78.6643 131.545 77.5546 132.948 76.8104 133.587Z\\" fill=\\"#C9C9C9\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M88 150.999C88 153.208 86.2084 155 83.9995 155C81.7905 155 80 153.208 80 150.999C80 148.791 81.7905 147 83.9995 147C86.2084 147 88 148.791 88 150.999\\" fill=\\"#6A6A6A\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M55.5884 97.8137C55.5884 109.132 50.3649 115.032 44.795 117.226L44.7612 117.423L44.2648 122.615L41.5365 140.269H27.9018L25.7354 122.615L25.3537 117.423L24.9219 115.346C24.4959 115.032 24.081 114.687 23.6766 114.308C21.5076 112.271 20.0449 109.778 19.0898 106.905C17.7079 106.619 15.8165 105.719 14.4119 102.885C13.3825 100.808 13.3825 99.7692 13.3825 98.7307C13.3825 97.6923 14.1482 96.2708 15.4413 95.6154C15.7665 95.4505 16.1234 95.3029 16.4756 95.1743C16.4724 94.9845 16.4707 94.7855 16.4707 94.5769L16.4706 94.0824C16.4688 88.8358 16.467 83.9855 18.3601 80.0137C21.3511 73.7385 27.6663 69.6538 35.259 69.6538C47.808 69.6538 55.5884 83.1875 55.5884 97.8137Z\\" fill=\\"#F1F1F1\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M25.4685 117.224C25.4685 121.91 29.7359 126.946 35.0001 126.946C40.2642 126.946 44.5316 121.91 44.5316 117.224C44.9272 117.224 50.5335 119.402 54.7971 123.77C58.1051 127.159 60.7354 132.252 60.7354 136.204V160H20.7027C14.3857 160 9.26476 154.777 9.26476 148.334V136.204C9.26476 132.244 11.9517 127.142 15.3209 123.749C19.6478 119.392 24.9775 117.224 25.4685 117.224Z\\" fill=\\"#254B6D\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M23.6763 93.5383C41.1763 89.3845 45.5137 81.6036 46.3234 81.0768C47.4339 81.905 53.5293 87.3076 54.5587 93.5383C54.5587 93.5383 55.5881 98.2688 54.5367 103.923C53.4854 109.577 49.2671 115.708 44.5314 117.001V117.476C46.824 118.316 51.4704 120.538 54.5367 123.654C54.6291 123.747 55.4966 124.597 55.5881 124.692C62.794 122.599 66.9116 117.673 66.9116 117.673C66.9116 117.673 59.4053 109.274 59.4001 94.5841V94.5685C59.4001 77.3674 50.1947 64.4614 35.0287 64.4614C34.8498 64.4614 34.6713 64.4634 34.4932 64.4672C34.3193 64.4634 34.1448 64.4614 33.9699 64.4614C31.3713 64.4614 28.8555 65.0002 26.4953 65.9942C15.5057 70.0647 9.62574 80.7459 9.62574 94.5685H9.57118C9.57118 109.269 2.05868 117.673 2.05868 117.673C2.05868 117.673 7.20253 122.599 14.6036 124.692C17.9443 121.23 22.7341 118.448 25.4387 117.423V115.346C25.4387 115.346 23.6763 114.308 21.6175 111.192C20.3079 109.21 19.6597 107.644 19.2468 105.921C16.9391 105.626 15.2817 104.477 14.4193 101.846C13.3981 98.7307 13.935 96.6537 15.9938 95.6153L23.6763 93.5383Z\\" fill=\\"#C86151\\"></path>
                      <path d=\\"M35.0721 107.751C35.0992 107.814 35.1684 107.941 35.2854 108.113C35.4856 108.405 35.7453 108.699 36.0699 108.974C37.2138 109.941 38.8399 110.425 41.0894 110.16C42.2064 110.029 42.9947 109.558 43.535 108.84C43.7643 108.535 43.9327 108.206 44.048 107.876C44.1164 107.681 44.151 107.533 44.1621 107.459C44.2012 107.196 44.4853 107.009 44.7966 107.042C45.1079 107.075 45.3286 107.316 45.2894 107.579C45.2212 108.038 44.9916 108.694 44.4936 109.356C43.7831 110.3 42.7125 110.94 41.246 111.112C38.6373 111.419 36.658 110.829 35.2667 109.653C34.5813 109.074 34.1831 108.492 34.0053 108.082C33.8973 107.833 34.0485 107.557 34.343 107.465C34.6376 107.374 34.964 107.502 35.0721 107.751Z\\" fill=\\"#262626\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M47.475 97.6471C46.1936 98.0324 45.2674 95.8705 45.2947 94.3274C45.2994 94.0347 45.4167 92.6842 46.1841 92.526C46.9504 92.3668 47.4608 92.9855 47.5378 93.0953C48.4592 94.4027 48.8761 97.2242 47.475 97.6471\\" fill=\\"#262626\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M33.019 94.1746C33.0769 93.8877 33.4395 92.5753 34.2679 92.5052C35.0972 92.435 35.5198 93.0992 35.5797 93.215C36.3082 94.6018 36.242 97.4168 34.7041 97.675C33.2987 97.9109 32.7163 95.6846 33.019 94.1746Z\\" fill=\\"#262626\\"></path>
                      <path d=\\"M43.396 98.5297C43.5179 98.6383 43.647 98.7315 43.7821 98.8098C44.3084 99.1149 44.8547 99.1714 45.3567 99.089C45.43 99.077 45.4902 99.0638 45.4711 99.0654C46.2544 98.9571 46.7844 99.0404 46.9787 99.2763C47.7414 100.203 47.4974 101.184 46.1887 101.991C45.5008 102.414 44.5537 102.563 44.0523 102.343C43.8072 102.236 43.5205 102.346 43.412 102.588C43.3035 102.831 43.4142 103.115 43.6594 103.222C44.4881 103.585 45.7624 103.384 46.7017 102.806C48.48 101.711 48.887 100.074 47.7314 98.6696C47.2571 98.0937 46.4271 97.9633 45.3366 98.1141C45.2591 98.1298 45.2318 98.1358 45.1978 98.1414C44.9005 98.1902 44.5758 98.1566 44.2729 97.981C44.1943 97.9354 44.1185 97.8807 44.0456 97.8157C43.8463 97.6382 43.5394 97.6542 43.36 97.8513C43.1806 98.0485 43.1968 98.3522 43.396 98.5297Z\\" fill=\\"#262626\\"></path>
                      <path d=\\"M174 91.7491L175.886 91C178.57 97.6927 180.595 104.149 181.961 110.368C183.345 116.667 183.345 123.878 181.97 132L179.968 131.664C181.301 123.783 181.301 116.828 179.977 110.8C178.635 104.692 176.643 98.3419 174 91.7491Z\\" fill=\\"#6AB889\\"></path>
                      <path d=\\"M184.184 99L185 99.6201C182.029 105.787 180.055 110.934 179.078 115.051C178.099 119.178 177.389 124.83 176.951 132L176 131.908C176.443 124.661 177.163 118.93 178.164 114.709C179.168 110.48 181.174 105.247 184.184 99Z\\" fill=\\"#117938\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M195 129H163L166.835 155H191.158L195 129Z\\" fill=\\"#8B5C1E\\"></path>
                      <path d=\\"M162.449 118.222C162.449 118.222 170.691 116.236 174.099 111.545C177.508 106.853 177.25 103.018 174.793 101.233C172.335 99.4474 168.609 100.387 165.2 105.079C161.792 109.77 162.449 118.222 162.449 118.222Z\\" fill=\\"#6AB889\\"></path>
                      <path d=\\"M195.213 110.213C195.213 110.213 194.243 100.757 189.556 96.0711C184.87 91.3848 180.586 90.8996 178.243 93.2427C175.899 95.5859 176.385 99.8701 181.071 104.556C185.757 109.243 195.213 110.213 195.213 110.213Z\\" fill=\\"#117938\\"></path>
                      <path d=\\"M164.5 96.8301C164.5 96.8301 172.055 98.2419 176.599 95.6186C181.142 92.9952 182.335 89.7216 180.955 87.3301C179.574 84.9387 176.142 84.335 171.599 86.9583C167.055 89.5817 164.5 96.8301 164.5 96.8301Z\\" fill=\\"#6AB889\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M125 96.6939C125 107.15 129.274 113.134 134.274 115.623V117.05L137.962 137H151.344L154.481 117.05V114.198C155.025 113.823 155.55 113.397 156.058 112.915C158.376 110.716 159.865 107.977 160.781 104.795C162.084 104.448 163.743 103.514 165 101C166 99 166 98 166 97C166 96 165.256 94.6311 164 94C163.707 93.853 163.388 93.7202 163.071 93.603C163.071 93.5724 163.071 93.5416 163.071 93.5106L163.071 93.0243C163.073 87.8645 163.075 83.0945 161.232 79.1884C158.321 73.0171 152.175 69 144.786 69C135.416 69 129.739 74.4464 127.004 82.2766C125.512 86.5479 125 90.4468 125 96.6939Z\\" fill=\\"#F1F1F1\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M155 116C155 120.82 150.523 126 145 126C139.477 126 135 120.82 135 116C134.585 116 128.703 118.241 124.23 122.733C120.76 126.219 118 131.458 118 135.523V160H160C166.627 160 172 154.627 172 148V135.523C172 131.45 169.181 126.202 165.646 122.712C161.107 118.23 155.515 116 155 116Z\\" fill=\\"#254B6D\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M125.121 94.0284C125.121 93.9641 125.467 89.8117 125.997 88.0004C126.996 84.5923 128.993 82.8887 128.993 83.0004C128.993 83.0004 128.071 88.4082 128.722 87.5271C132.412 82.5527 141.844 86.953 145.389 80.5333C145.835 84.0675 141.362 85.1333 141.362 85.1333C144.928 85.8236 148.017 84.3565 148.854 82.6143C149.13 84.0347 149.24 84.9773 148.001 85.9488C152.384 85.1015 151.498 82.0183 151.498 82.0183C154.958 82.4938 158.255 87.2164 158.604 91.3622C158.952 95.508 160.95 97.0004 160.95 97.0004C162.718 95.2135 164.944 95.0004 164.944 95.0004C164.944 95.0004 165.943 92.0004 165.943 90.0004C165.943 85.1333 166.359 81.647 164.944 77.4933C161.948 68.6956 153.959 63.0417 145.88 63.0004C130.99 62.9243 124 72.9752 124 87.0004C124 91.0004 125.121 94.1287 125.121 94.0284Z\\" fill=\\"black\\"></path>
                      <path d=\\"M142.93 105.502C142.903 105.566 142.836 105.696 142.723 105.87C142.528 106.167 142.276 106.466 141.96 106.745C140.849 107.728 139.27 108.22 137.084 107.951C135.999 107.817 135.234 107.339 134.709 106.609C134.486 106.299 134.322 105.964 134.21 105.629C134.144 105.431 134.11 105.281 134.1 105.205C134.062 104.938 133.786 104.748 133.483 104.782C133.181 104.815 132.966 105.06 133.004 105.327C133.071 105.794 133.294 106.461 133.778 107.133C134.468 108.093 135.508 108.743 136.932 108.918C139.466 109.231 141.389 108.631 142.741 107.436C143.407 106.847 143.793 106.255 143.966 105.838C144.071 105.585 143.924 105.305 143.638 105.212C143.352 105.119 143.035 105.249 142.93 105.502Z\\" fill=\\"#262626\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M130.881 95.2319C132.126 95.6234 133.026 93.426 132.999 91.8575C132.995 91.56 132.881 90.1873 132.135 90.0265C131.391 89.8646 130.895 90.4935 130.82 90.6051C129.925 91.9341 129.52 94.802 130.881 95.2319\\" fill=\\"#262626\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M144.924 91.7022C144.868 91.4105 144.516 90.0765 143.711 90.0053C142.905 89.934 142.495 90.6091 142.437 90.7268C141.729 92.1364 141.793 94.9977 143.287 95.2602C144.653 95.5 145.218 93.2371 144.924 91.7022Z\\" fill=\\"#262626\\"></path>
                      <path d=\\"M134.844 96.1289C134.725 96.2393 134.6 96.334 134.469 96.4137C133.958 96.7238 133.427 96.7812 132.939 96.6975C132.868 96.6852 132.81 96.6718 132.828 96.6735C132.067 96.5634 131.552 96.648 131.364 96.8878C130.623 97.8298 130.86 98.8272 132.131 99.6469C132.799 100.077 133.719 100.229 134.206 100.005C134.445 99.8963 134.723 100.008 134.828 100.254C134.934 100.501 134.826 100.789 134.588 100.898C133.783 101.267 132.545 101.063 131.633 100.476C129.905 99.3621 129.51 97.6983 130.632 96.2712C131.093 95.6857 131.899 95.5532 132.959 95.7065C133.034 95.7225 133.061 95.7285 133.094 95.7342C133.382 95.7838 133.698 95.7497 133.992 95.5712C134.068 95.5249 134.142 95.4692 134.213 95.4032C134.406 95.2228 134.705 95.239 134.879 95.4394C135.053 95.6398 135.037 95.9485 134.844 96.1289Z\\" fill=\\"#262626\\"></path>
                      <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M133.533 102.667C134.948 102.238 135.452 102.085 137.702 102.085C139.544 102.085 140.719 102.459 142.268 102.951C143.156 103.234 144.167 103.555 145.498 103.868C157.734 106.482 160.472 99.063 161.519 96.226C161.726 95.6639 161.867 95.2816 162.002 95.193C162.677 95.193 163.031 96.1796 162.998 97.0015C162.677 105.022 159 113 153 116C152.354 116.268 151.775 116.518 151.239 116.749C147.715 118.268 146.018 119 139.106 119C135.126 119 130.346 114.623 128.156 111C125.686 106.914 124.542 101.808 125.169 94C125.208 94.2114 125.25 94.4541 125.295 94.7214C125.832 97.8918 126.955 104.513 132.015 103.111C132.639 102.938 133.124 102.791 133.533 102.667ZM137.372 104C133.367 104 131 105.183 131 106.981C131 108.778 133.367 111.968 137.372 111.968C142.538 112.332 146 109.516 146 107.745C146 105.974 141.376 104 137.372 104Z\\" fill=\\"black\\"></path>
                      <path d=\\"M53.5995 38.1123C49.3468 34.0371 47.1865 28.9119 47.3335 23.2067C47.6574 10.6287 60.0928 0.313338 74.4849 0.684015C88.877 1.05469 100.765 11.9965 100.441 24.5745C100.111 37.3631 88.224 47.8677 74.4833 47.5138C71.0207 47.4246 67.6429 46.6552 64.4346 45.2222L50.8069 49.9764C50.5996 50.0461 50.3897 50.08 50.1808 50.0746C49.6887 50.062 49.2125 49.8425 48.8789 49.4516C48.4044 48.8928 48.3221 48.0975 48.6612 47.4489L53.5995 38.1123Z\\" fill=\\"#6AB889\\"></path>
                      <path d=\\"M115.383 66.2181C119.315 62.8495 121.45 58.4686 121.579 53.4765C121.862 42.4708 111.371 32.8944 98.6719 32.5673C85.973 32.2402 75.0027 41.2639 74.7192 52.2696C74.431 63.4597 84.431 73.1766 96.5551 73.4889C99.6103 73.5676 102.622 73.048 105.514 71.9409L117.307 76.7117C117.487 76.782 117.67 76.8211 117.854 76.8259C118.289 76.8371 118.718 76.6668 119.03 76.3404C119.473 75.8735 119.582 75.1823 119.312 74.6002L115.383 66.2181Z\\" fill=\\"#337C9B\\"></path>
                    </svg>
                  </div>
                </div>
                <div class=\\"layout__wrapper\\">
                  <div class=\\"layout__content\\">
                    <div class=\\"layout__print-header\\">
                      <p class=\\"typo-normal\\">https://arbeidsgiver.nav.no/samtalestotte</p>
                    </div>
                    <div class=\\"layout__react-to-print-wrapper\\"><button class=\\"layout__knapp knapp\\">Skriv ut</button></div>
                    <h2 class=\\"typo-systemtittel samtaleverktøy__tittel\\">Samtaleverktøy</h2>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__arbeidssituasjonSamtale-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-uten-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-tittel\\">Når kan en samtale om arbeidssituasjonen være aktuelt?</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__arbeidssituasjonSamtale-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <div class=\\"ekspanderbart-infopanel__innhold\\">
                            <p class=\\"typo-normal\\">En samtale om arbeidssituasjonen gjennomføres hvis
                            <ul class=\\"samtaleverktøy__ul_tett\\">
                              <li>du eller din medarbeider opplever utfordringer med arbeidet og det skyldes sykdom eller andre forhold</li>
                              <li>medarbeideren står i fare for å bli sykmeldt</li>
                              <li>medarbeideren er sykmeldt</li>
                              <li>medarbeideren har vært sykmeldt</li>
                            </ul>
                            </p>
                            <p class=\\"typo-normal ekspanderbart-infopanel__innhold-ny-avsnitt\\">Det finnes ingen oppskrift på en god samtale som gjelder alle situasjoner. Men det finnes noen grep som ofte bidrar til gode samtaler.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__detteKanDuSpørreMedarbeiderenOm-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-uten-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-tittel\\">Dette kan du spørre medarbeideren om</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__detteKanDuSpørreMedarbeiderenOm-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <div class=\\"ekspanderbart-infopanel__innhold\\">
                            <p class=\\"typo-normal\\">Du kan stille spørsmål til medarbeideren som handler om forhold på arbeidsplassen.</p>
                            <p class=\\"typo-normal\\">
                            <ul>
                              <li>Mulighetene til å utføre egne eller alternative arbeidsoppgaver.</li>
                              <li>Behov for tilrettelegging.</li>
                              <li>Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i deres virksomhet.</li>
                              <li>Hvor lenge medarbeideren tror fraværet vil vare.</li>
                              <li>Om det er forhold på arbeidsplassen som påvirker sykefraværet eller helsesituasjonen.</li>
                              <li>Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller andre samarbeidspartnere for å få hjelp med tilrettelegging og oppfølging.</li>
                            </ul>
                            </p>
                            <p class=\\"typo-undertekst-bold ekspanderbart-infopanel__innhold-ny-avsnitt\\">Husk at sykefravær ikke er en privatsak, det påvirker arbeidsplassen.<br> Diagnose, behandling og forhold hjemme er privat.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__suksesskriterier-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M16.6666 35H23.3333V39.04C23.3333 39.5702 22.9035 40 22.3733 40H17.6266C17.0964 40 16.6666 39.5702 16.6666 39.04V35Z\\" fill=\\"#B7B1A9\\"></path><path fill-rule=\\"evenodd\\" d=\\"M20 8.33337C12.6482 8.33337 6.66663 14.2348 6.66663 21.4881C6.66663 27.2155 10.4225 32.2508 15.8974 33.9912V35.6548C15.8974 36.2134 16.3569 36.6667 16.923 36.6667H23.0769C23.643 36.6667 24.1025 36.2134 24.1025 35.6548V33.9912C29.5774 32.2487 33.3333 27.2155 33.3333 21.4881C33.3333 14.2348 27.3518 8.33337 20 8.33337\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M21.6666 38.3334H18.3333C17.4133 38.3334 16.6666 38.7067 16.6666 39.1667C16.6666 39.6267 17.4133 40 18.3333 40H21.6666C22.5866 40 23.3333 39.6267 23.3333 39.1667C23.3333 38.7067 22.5866 38.3334 21.6666 38.3334\\" fill=\\"#59514B\\"></path><path fill-rule=\\"evenodd\\" d=\\"M23.75 35H16.25C15.56 35 15 35.3733 15 35.8333C15 36.2933 15.56 36.6667 16.25 36.6667H23.75C24.44 36.6667 25 36.2933 25 35.8333C25 35.3733 24.44 35 23.75 35\\" fill=\\"#59514B\\"></path><path fill-rule=\\"evenodd\\" d=\\"M20.0001 6.66667C20.4801 6.66667 20.8696 6.16889 20.8696 5.55556V1.11111C20.8696 0.497778 20.4801 0 20.0001 0C19.5201 0 19.1305 0.497778 19.1305 1.11111V5.55556C19.1305 6.16889 19.5201 6.66667 20.0001 6.66667\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M39.1304 19.0972H35.6522C35.1722 19.0972 34.7826 19.4705 34.7826 19.9305C34.7826 20.3905 35.1722 20.7638 35.6522 20.7638H39.1304C39.6104 20.7638 40 20.3905 40 19.9305C40 19.4705 39.6104 19.0972 39.1304 19.0972\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M4.34783 19.0972H0.869565C0.389565 19.0972 0 19.4705 0 19.9305C0 20.3905 0.389565 20.7638 0.869565 20.7638H4.34783C4.82783 20.7638 5.21739 20.3905 5.21739 19.9305C5.21739 19.4705 4.82783 19.0972 4.34783 19.0972\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M9.00864 9.76612C9.17245 9.92311 9.38639 10 9.60033 10C9.81261 10 10.0265 9.92311 10.1904 9.76612C10.5163 9.45374 10.5163 8.94594 10.1904 8.63356L6.64356 5.23428C6.31763 4.92191 5.78779 4.92191 5.46185 5.23428C5.13592 5.54666 5.13592 6.05447 5.46185 6.36684L9.00864 9.76612Z\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M30.4011 10C30.6149 10 30.8288 9.92153 30.9926 9.76619L34.5382 6.3664C34.864 6.05413 34.864 5.54808 34.5382 5.23421C34.2107 4.92193 33.6827 4.92193 33.3569 5.23421L29.8096 8.6324C29.4837 8.94627 29.4837 9.45232 29.8096 9.76619C29.9733 9.92153 30.1872 10 30.4011 10\\" fill=\\"#FFA733\\"></path></svg></div>Suksesskriterier</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__suksesskriterier-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <p class=\\"typo-normal ekspanderbart-infopanel__innhold\\">
                          <ul>
                            <li>Lytt til hva medarbeideren har å si.</li>
                            <li>Snakk om arbeidsevne, ikke diagnose.</li>
                            <li>Bygg på medarbeiderens motivasjon.</li>
                            <li>La medarbeideren komme med de gode løsningene.</li>
                            <li>Ikke hopp rett til konklusjoner og løsninger.</li>
                            <li>Gjennomfør samtaler regelmessig.</li>
                          </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class=\\"samtaleverktøy__page-break\\"></div>
                    <h2 class=\\"typo-systemtittel oppfølgingssamtaleGjennomføring__tittel\\">Slik gjennomfører du en nyttig samtale om arbeidssituasjonen</h2>
                    <p class=\\"typo-ingress oppfølgingssamtaleGjennomføring__ingress\\">Samtalen kan deles inn i faser. Vi har gjort det enkelt for deg å forstå innholdet og bruke det aktivt i din hverdag.</p>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg1Forberedelse-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 1\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M14.22 28V25.18H18.48V12.64H14.97V10.48C15.93 10.3 16.75 10.09 17.43 9.85C18.13 9.59 18.78 9.28 19.38 8.92H21.96V25.18H25.71V28H14.22Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik forbereder du samtalen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg1Forberedelse-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <div class=\\"ekspanderbart-infopanel__innhold\\">
                            <p class=\\"typo-element\\">Lederens rolle i en samtale om arbeidssituasjonen</p>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>Du er ansvarlig for å gjennomføre og dokumentere samtaler om arbeidssituasjonen.</li>
                              <li>Ditt ansvar begrenser seg til å snakke om forhold på arbeidsplassen.</li>
                              <li>Din viktigste oppgave er å få medarbeideren til å snakke.</li>
                            </ul>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Kjente fallgruver</p>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>Du påtar deg for stort ansvar for helsa til medarbeideren.</li>
                              <li>Fokuset handler om behandling eller forhold i privatlivet.</li>
                            </ul>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Tema for samtalen</p><span>En samtale om arbeidssituasjon handler om</span>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>gjennomgang av arbeidsoppgaver</li>
                              <li>vurdering av hvilke oppgaver som kan gjennomføres med eller uten tilrettelegging eventuelt alternative arbeidsoppgaver</li>
                              <li>plan for videre oppfølging</li>
                            </ul>
                          </div>
                          <div class=\\"ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn\\">
                            <p class=\\"typo-element\\">Noen tips til egen forberedelse før samtalen</p>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>Hva er dine mål med samtalen?</li>
                              <li>Hvordan er din relasjon og holdninger til medarbeideren, og hvordan kan dette påvirke dialogen?</li>
                              <li>Hva har du observert? Du kan være tydelig på dine observasjoner og hvordan du tolker disse, men gi medarbeideren anledning til å korrigere hvis du har tatt feil.</li>
                              <li>Hvilke tilretteleggingsmuligheter finnes på egen arbeidsplass og eventuelt ellers i organisasjonen og hvor er grensene for ditt handlingsrom?</li>
                              <li><a href=\\"https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/tilrettelegging_kap\\" class=\\"lenke\\">Les mer om tilrettelegging.</a></li>
                              <li><a href=\\"https://arbeidsgiver.nav.no/veiviserarbeidsgiver/tilrettelegge/du-onsker-a-tilrettelegge\\" class=\\"lenke\\">Les mer om NAVs virkemidler.</a></li>
                            </ul>
                            <div class=\\"ekspanderbart-infopanel__innhold-ny-avsnitt\\">
                              <p class=\\"typo-element\\">Praktiske råd</p>
                              <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                                <li>Avtal tid og sted som passer deg og medarbeideren.</li>
                                <li>Samtalen kan gjennomføres digitalt eller utenfor arbeidsplassen hvis det passer best.</li>
                                <li>Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når begge er forberedt, blir det enklere å finne løsninger sammen.</li>
                                <li>Du kan sende spørsmål til medarbeideren på forhånd. Velg noen av de viktigste for deg fra eksemplene i fase tre og fire.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg2Innledning-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 2\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M13.14 28V25.99C14.46 24.71 15.65 23.53 16.71 22.45C17.79 21.37 18.7 20.37 19.44 19.45C20.2 18.53 20.78 17.67 21.18 16.87C21.58 16.07 21.78 15.31 21.78 14.59C21.78 13.57 21.51 12.77 20.97 12.19C20.43 11.59 19.65 11.29 18.63 11.29C17.89 11.29 17.21 11.5 16.59 11.92C15.99 12.34 15.43 12.84 14.91 13.42L12.99 11.5C13.87 10.56 14.77 9.84 15.69 9.34C16.63 8.82 17.76 8.56 19.08 8.56C20 8.56 20.83 8.7 21.57 8.98C22.31 9.26 22.94 9.66 23.46 10.18C23.98 10.68 24.38 11.29 24.66 12.01C24.96 12.73 25.11 13.53 25.11 14.41C25.11 15.25 24.92 16.11 24.54 16.99C24.18 17.85 23.68 18.73 23.04 19.63C22.42 20.51 21.69 21.42 20.85 22.36C20.01 23.3 19.12 24.27 18.18 25.27C18.68 25.23 19.22 25.19 19.8 25.15C20.38 25.09 20.9 25.06 21.36 25.06H26.04V28H13.14Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik innleder du samtalen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg2Innledning-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <div class=\\"ekspanderbart-infopanel__innhold\\">
                            <p class=\\"typo-normal\\">Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt.<br>Rammene hjelper dere med å holde fokus og tid.</p>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Vanlige tema i innledning:</p>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>ønske velkommen</li>
                              <li>informere om tidsrammene for møtet</li>
                              <li>informere om målet med møtet</li>
                              <li>gå igjennom agenda</li>
                              <li>spørre hva medarbeideren tenker om mål og agenda</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg3Snakk-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 3\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M19.2 28.36C17.64 28.36 16.34 28.1 15.3 27.58C14.26 27.06 13.4 26.42 12.72 25.66L14.37 23.44C14.95 24.02 15.61 24.52 16.35 24.94C17.09 25.34 17.94 25.54 18.9 25.54C19.94 25.54 20.78 25.29 21.42 24.79C22.08 24.27 22.41 23.56 22.41 22.66C22.41 22.16 22.32 21.71 22.14 21.31C21.96 20.91 21.65 20.57 21.21 20.29C20.79 20.01 20.22 19.8 19.5 19.66C18.78 19.5 17.88 19.42 16.8 19.42V16.9C17.74 16.9 18.52 16.83 19.14 16.69C19.78 16.53 20.29 16.32 20.67 16.06C21.07 15.78 21.35 15.45 21.51 15.07C21.69 14.69 21.78 14.28 21.78 13.84C21.78 13.04 21.53 12.42 21.03 11.98C20.53 11.52 19.84 11.29 18.96 11.29C18.2 11.29 17.51 11.46 16.89 11.8C16.29 12.12 15.7 12.55 15.12 13.09L13.35 10.96C14.17 10.24 15.04 9.66 15.96 9.22C16.9 8.78 17.94 8.56 19.08 8.56C20 8.56 20.84 8.67 21.6 8.89C22.36 9.11 23.01 9.44 23.55 9.88C24.09 10.3 24.51 10.83 24.81 11.47C25.11 12.09 25.26 12.8 25.26 13.6C25.26 14.68 24.96 15.58 24.36 16.3C23.78 17.02 22.97 17.58 21.93 17.98V18.1C23.07 18.4 24.01 18.95 24.75 19.75C25.51 20.55 25.89 21.58 25.89 22.84C25.89 23.72 25.71 24.5 25.35 25.18C25.01 25.86 24.53 26.44 23.91 26.92C23.31 27.38 22.6 27.74 21.78 28C20.98 28.24 20.12 28.36 19.2 28.36Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik snakker dere om arbeidssituasjonen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg3Snakk-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <div class=\\"ekspanderbart-infopanel__innhold\\">
                            <p class=\\"typo-normal\\">En samtale om arbeidssituasjonen handler om medarbeideren. Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene og arbeidsdagen oppleves. Unngå å stille for mange spørsmål etter hverandre uten å la medarbeideren få tid til å svare.</p>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Vanlige tema i samtalen om arbeidssituasjonen:</p>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>arbeidsoppgaver</li>
                              <li>arbeidstid</li>
                              <li>samarbeid</li>
                              <li>arbeidsmiljø</li>
                              <li>tidligere tiltak</li>
                            </ul>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Eksempler på spørsmål:</p>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>Hvordan vil du beskrive arbeidsdagen din?</li>
                              <li>Hvilke av arbeidsoppgavene dine kan du fortsatt utføre?</li>
                              <li>Hvilke av arbeidsoppgavene dine er vanskelige å utføre?</li>
                              <li>Hvordan vil du beskrive arbeidsmiljøet?</li>
                              <li>Hva synes du er positivt, og hva tenker du kan forbedres?</li>
                              <li>Hvordan vil du beskrive stressnivået?</li>
                              <li>Hvordan påvirker arbeidsmiljøet sykefraværet ditt?</li>
                              <li>Hvordan opplever du samarbeidet med kolleger/ledere?</li>
                              <li>Hva motiverer deg mest akkurat nå?</li>
                              <li>Hva oppfatter du som dine styrker nå?</li>
                            </ul>
                            <p>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg4FinnLøsning-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 4\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M20.97 28V23.08H12.54V20.74L20.1 8.92H24.21V20.41H26.61V23.08H24.21V28H20.97ZM15.96 20.41H20.97V16.09C20.97 15.53 20.98 14.87 21 14.11C21.04 13.35 21.08 12.69 21.12 12.13H21C20.76 12.63 20.51 13.12 20.25 13.6C19.99 14.08 19.72 14.58 19.44 15.1L15.96 20.41Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik finner dere løsninger sammen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg4FinnLøsning-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <div class=\\"ekspanderbart-infopanel__innhold\\">
                            <p class=\\"typo-normal ekspanderbart-infopanel__innhold-ny-avsnitt\\">Det er nyttig å sikre en felles forståelse av arbeidssituasjonen før dere går videre til å snakke om løsninger og tiltak. Medarbeidere som uttrykker løsningsforslag selv, vil ofte få økt motivasjon ved gjennomføring.</p>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn ekspanderbart-infopanel__innhold-display-flex\\">
                            <p class=\\"typo-normal\\"><span class=\\"ekspanderbart-infopanel__innhold-bold\\">Husk</span> at dersom medarbeideren har negative erfaringer, for eksempel at tiltak ikke har fungert, bør du anerkjenne dette. Fokuset bør ligge framover i tid og på hvilke muligheter som finnes.</p>
                            </p>
                            <div class=\\"ekspanderbart-infopanel__innhold-ny-avsnitt\\">
                              <p class=\\"typo-element\\">Vanlige tema når dere finner løsninger sammen:</p>
                              <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                                <li>tilpasse arbeidsoppgaver eller arbeidsinnhold</li>
                                <li>tilpasse arbeidstid, arbeidstempo eller tidskrav</li>
                                <li>tilpasse organisering av arbeidet</li>
                                <li>tilpasse samarbeid og samhandling med andre</li>
                                <li>alternative arbeidsoppgaver</li>
                                <li>behov for informasjon og tilbakemeldinger</li>
                                <li>arbeidsmiljø</li>
                                <li>kompetanse</li>
                                <li>fysisk utforming av arbeidsplassen</li>
                                <li><a href=\\"https://www.nav.no/no/bedrift/hjelpemidler/funksjonsassistanse\\" class=\\"lenke\\">hjelpemidler</a></li>
                                <li>andre forhold</li>
                              </ul>
                            </div>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Eksempler på spørsmål:</p>
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>Hvilke av arbeidsoppgavene dine kan du utføre med tilrettelegging?</li>
                              <li>Hvilke alternative arbeidsoppgaver kan du utføre?</li>
                              <li>Hvordan bør tiden disponeres?</li>
                              <li>Hvordan kan endringer i tempo, arbeidstid eller arbeidssted øke mulighetene for arbeid?</li>
                              <li>Hvordan bør arbeidsdagen se ut dersom du skal kunne klare den, helt eller delvis?</li>
                              <li>Hvilke løsninger ser du for deg?</li>
                              <li>Hvordan vil den ideelle arbeidssituasjonen være for deg akkurat nå?</li>
                              <li>Hvordan ser du for deg veien videre?</li>
                              <li>Hvordan ser du for deg det videre sykmeldingsforløpet?</li>
                              <li>Hvilke tiltak bør vi prøve først?</li>
                            </ul><span>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
                    <div class=\\"ekspanderbart-infopanel__root\\">
                      <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg5Avslutning-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
                          <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 5\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M19.23 28.36C17.69 28.36 16.39 28.1 15.33 27.58C14.29 27.04 13.42 26.42 12.72 25.72L14.31 23.5C14.89 24.04 15.54 24.52 16.26 24.94C16.98 25.34 17.82 25.54 18.78 25.54C19.86 25.54 20.74 25.22 21.42 24.58C22.12 23.94 22.47 23.04 22.47 21.88C22.47 20.74 22.15 19.86 21.51 19.24C20.87 18.62 20.02 18.31 18.96 18.31C18.34 18.31 17.82 18.4 17.4 18.58C16.98 18.74 16.48 19.01 15.9 19.39L14.25 18.34L14.82 8.92H25.02V11.83H17.82L17.43 16.45C17.83 16.25 18.22 16.1 18.6 16C19 15.88 19.45 15.82 19.95 15.82C20.77 15.82 21.54 15.94 22.26 16.18C23 16.42 23.64 16.79 24.18 17.29C24.72 17.77 25.15 18.39 25.47 19.15C25.79 19.89 25.95 20.77 25.95 21.79C25.95 22.83 25.76 23.76 25.38 24.58C25.02 25.4 24.53 26.09 23.91 26.65C23.29 27.21 22.57 27.64 21.75 27.94C20.95 28.22 20.11 28.36 19.23 28.36Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik avslutter du samtalen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
                        </button>
                        <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg5Avslutning-base\\"></div>
                      </div>
                      <div class=\\"ekspanderbart-infopanel__print-innhold\\">
                        <div>
                          <div class=\\"ekspanderbart-infopanel__innhold\\">
                            <p class=\\"typo-normal ekspanderbart-infopanel__innhold-ny-avsnitt\\">En samtale om arbeidssituasjonen avsluttes med at du og medarbeideren oppsummerer.<br>Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en oppfølgingsplan.</p>
                            <p class=\\"typo-normal\\"><a href=\\"https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/oppfolgingsplan_kap\\" class=\\"lenke\\">Les mer om oppfølgingsplan</a></p>
                            <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Vanlige tema i avslutningen:</p>
                            <p class=\\"typo-normal\\">
                            <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                              <li>avtaler, tilrettelegginger og tiltak</li>
                              <li>om tilrettelegging er midlertidig eller permanent</li>
                              <li>hvor lenge de midlertidige tiltakene varer og tidsfrister</li>
                              <li>dato for neste samtale og hvor ofte samtaler skal gjennomføres</li>
                              <li>hvem som er ansvarlig for å følge opp</li>
                              <li>om det er behov for videre avklaring eller hjelp fra andre</li>
                            </ul>
                            </p>
                            <div class=\\"ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn\\">
                              <p class=\\"typo-normal\\">Av og til blir du og medarbeideren ikke enige om løsningene og det er greit. </p>
                              <p class=\\"typo-normal\\">Da dokumenterer du begges synspunkter i oppsummeringen eller oppfølgingsplanen.</p>
                              <p class=\\"typo-element\\">Tips: gjennomfør flere samtaler regelmessig. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"situasjonqa situasjonqa__innhold-no-print\\">
                      <h2 class=\\"typo-systemtittel situasjonqa__tittel\\">Hvordan er situasjonen hos dere?</h2>
                      <div class=\\"les-mer-panel\\">
                        <div class=\\"les-mer-panel__toggler slik-kan-disse-spørsmålene-hjelpe-deg\\"><button class=\\"infoToggler\\" type=\\"button\\" aria-expanded=\\"false\\"><span class=\\"infoToggler__label\\"><span class=\\"typo-normal\\">Slik kan disse spørsmålene hjelpe deg</span></span><span class=\\"nav-frontend-chevron chevronboks chevron--ned\\"></span></button></div>
                        <div class=\\"les-mer-panel__innhold\\"></div>
                        <div class=\\"les-mer-panel__print-innhold slik-kan-disse-spørsmålene-hjelpe-deg\\">
                          <div class=\\"slik-kan-disse-spørsmålene-hjelpe-deg__innhold\\">
                            <ul>
                              <li>Lavt sykefravær og god dialog fører til motiverte medarbeidere og god lønnsomhet.</li>
                              <li>Systematisk arbeid med arbeidsmiljøet er en lovpålagt oppgave. Evaluering av samtaler om arbeidssituasjonen gir en verdifull kartlegging. Denne bør du bruke når du jobber med forebyggende arbeidsmiljøarbeid.</li>
                              <li>Vi hjelper deg videre med relevante tips ut fra dine svar.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Bidro sykefraværsrutinene på arbeidsplassen til forutsigbarhet rundt oppgaver og ansvar?</h2>
                      <hr aria-label=\\"\\" class=\\"skillelinje\\">
                      <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Var rutinene kjent for både deg og medarbeideren i forkant av samtalen?</h2>
                      <hr aria-label=\\"\\" class=\\"skillelinje\\">
                      <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?</h2>
                      <hr aria-label=\\"\\" class=\\"skillelinje\\">
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div id=\\"scripts\\">
                <div id=\\"decorator-env\\" data-src=\\"\\"></div>
              </div>
            </div>
          </main>
          <footer></footer>
        </div>"
    `);
});

const decoratorParts: DecoratorParts = {
    decoratorEnv: {
        dataSrc: '',
        scriptUrl: '',
    },
    decoratorFooter: '',
    decoratorHeader: '',
    linkTags: [],
    scriptTags: [],
};

const pageProps: PageProps = {
    appTitle: '',
    decorator: decoratorParts,
    metaDescription: '',
    slug: '',
    title: '',
};
