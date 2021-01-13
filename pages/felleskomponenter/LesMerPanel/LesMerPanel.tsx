import * as React from "react";
import { useState } from "react";
//import InfoToggler from "./InfoToggler/InfoToggler";
import "./LesMerPanel.less";
//import {UnmountClosed} from 'react-collapse';

interface Props {
  åpneLabel: string;
  lukkLabel?: string;
  className?: string;
  onÅpne?: () => void;
}

const LesMerPanel: React.FunctionComponent<Props> = ({
  åpneLabel,
  lukkLabel,
  children,
  className,
  onÅpne,
}) => {
  const [åpen, setÅpenState] = useState<boolean>(false);

  const setÅpen = (skalÅpnes: boolean) => {
    setÅpenState(skalÅpnes);
    if (skalÅpnes && onÅpne) {
      onÅpne();
    }
  };

  const lukkTekst = lukkLabel || åpneLabel;

  return (
    <div className="les-mer-panel">
      {/*<InfoToggler onToggle={() => setÅpen(!åpen)} åpen={åpen}>
        <p>{åpen ? lukkTekst : åpneLabel}</p>
      </InfoToggler>
*/}
      <div className="les-mer-panel__innhold">
        {/*<UnmountClosed isOpened={åpen}>{children}</UnmountClosed>*/}
      </div>
      <div className={"les-mer-panel__print-innhold"}>{children}</div>
    </div>
  );
};

export default LesMerPanel;
