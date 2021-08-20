import Locked from '../../felleskomponenter/Ikoner/Locked';
import Calculator from '../../felleskomponenter/Ikoner/Calculator';
import { SYKEFRAVÆRSSTATISTIKK_KALKULATOR } from '../../resources/urls';
import LoggbarLenkepanelBase from '../../felleskomponenter/LoggbarLenke/LoggbarLenkepanelBase';
import { css } from 'linaria';
import { SCREEN_SM_MIN } from '../../utils/konstanter';
import classNames from 'classnames';
import { marginBottom1Rem } from '../../utils/fellesStiler';

const SeHvorMyeSykefravaeretDittKoster = () => {
    const lenkeTekstConst = 'Gå til kalkulatoren';
    return (
        <LoggbarLenkepanelBase
            className={classNames(kalkulatorRootStyle, marginBottom1Rem)}
            href={SYKEFRAVÆRSSTATISTIKK_KALKULATOR}
            lenketekst={lenkeTekstConst}
        >
            <div className={kalkulatorChildWrapperStyle}>
                <Calculator
                    className={kalkulatorIkonStyle}
                    height={'44px'}
                    width={'44px'}
                />
                <p>Se hvor mye sykefraværet ditt koster</p>
                <div>
                    <span className={kalkulatorLinkTextStyle}>{lenkeTekstConst}</span>
                    <span className={kalkulatorLoginStyle}>
                        <Locked /> Krever innlogging
                    </span>
                </div>
            </div>
        </LoggbarLenkepanelBase>
    );
};

export default SeHvorMyeSykefravaeretDittKoster;

/** STYLES **/

const kalkulatorRootStyle = css`
    border: 1px solid var(--navds-color-gray-60);
    * {
      color: var(--navds-color-blue-50);
    }
    span {
      width: 100%;
    }
    &:hover {
      border: 1px solid var(--navds-color-gray-60);
    }
    &:hover * {
      text-decoration-line: underline;
    }
    @media print {
      display: none;
    }
`

const kalkulatorChildWrapperStyle = css`
    width: 100%;
    display: grid;
    margin-left: 1rem;
    @media (min-width: ${SCREEN_SM_MIN}) {
      grid-template-columns: auto 1fr auto;
      grid-template-rows: auto;
      column-gap: 1rem;
      grid-template-areas:
            "ikon tittel link";
    }
    align-items: center;
    row-gap: 1rem;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas:
            "tittel"
            "link";
  span {
      margin-right: 1rem;
      justify-self: end;
  }
  p {
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    margin: 0;

    grid-area: tittel;
  }
  div {
    @media (min-width: ${SCREEN_SM_MIN}) {
      align-items: flex-end;
    }
    grid-area: link;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const kalkulatorIkonStyle = css`
    @media (min-width: ${SCREEN_SM_MIN}) {
      display: block;
      grid-area: ikon;
    }
    display: none;
`

const kalkulatorLinkTextStyle = css`
  @media (min-width: ${SCREEN_SM_MIN}) {
    display: block;
  }
  display: none;
`

const kalkulatorLoginStyle = css`
  color: black;
  & * {
    color: black;
  }
`