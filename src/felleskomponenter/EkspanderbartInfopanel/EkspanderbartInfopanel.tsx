import { FunctionComponent, ReactComponentElement, ReactNode, useState } from 'react';
import './EkspanderbartInfopanel.less';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';
import { OppChevron } from 'nav-frontend-chevron';
import classNames from 'classnames';
import { LyspæreSVG } from '../Samtaleverktøy/LyspæreSVG';

interface Props {
    children: React.ReactNode;
    unikId: string;
    tittel: string;
    bakgrunn?: string;
    ikon?: React.ReactNode;
}

export const EkspanderbartInfopanel: FunctionComponent<Props> = (props: Props) => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);
    const panelknappID = 'ekspanderbart-infopanel__' + props.unikId;

    return (
        <EkspanderbartpanelBase
            tittel={
                props.ikon ? (
                    <div className="ekspanderbart-infopanel__tittel-med-ikon">
                        {props.ikon} {props.tittel}
                    </div>
                ) : (
                    props.tittel
                )
            }
            id={'info-1'}
            apen={erÅpen}
            onClick={() => {
                setErÅpen(!erÅpen);
            }}
            className={
                !props.bakgrunn
                    ? 'ekspanderbart-infopanel__panel'
                    : classNames(
                          'ekspanderbart-infopanel__panel',
                          'ekspanderbart-infopanel__gronnbakgrunn'
                      )
            }
        >
            <div>{props.children}</div>

            <button
                className="ekspanderbart-infopanel__lukk-knapp"
                onClick={() => {
                    setErÅpen(false);
                    const panelknapp = document.getElementById(panelknappID);
                    panelknapp && panelknapp.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <span className="typo-normal ">Lukk</span>
                <OppChevron className="ekspanderbart-infopanel__lukk-chevron" />
            </button>
        </EkspanderbartpanelBase>
    );
};
