import {
  restrictToNumbers,
  useHandleTips,
} from "../utils";

import TipSelect from "../components/TipSelect";
import TipAmount from "../components/TipAmount";

const TipContainer = () => {
  const {
    active,
    activeButton,
    custom,
    bill,
    numPeople,
    handleSelectTip,
    handleCustomTip,
    handleBill,
    handleNumPeople,
    tipAmount,
    tipTotalPerPerson,
    resetStates,
    billError,
    customError,
    numPeopleError,
  } = useHandleTips();

  return (
    <section className="tip-container">
      <TipSelect
        active={active}
        activeButton={activeButton}
        handleSelectTip={handleSelectTip}
        handleCustomTip={handleCustomTip}
        handleBill={handleBill}
        restrictToNumbers={restrictToNumbers}
        handleNumPeople={handleNumPeople}
        billError={billError}
        customError={customError}
        numPeopleError={numPeopleError}
      />
      <TipAmount
        activeButton={activeButton}
        custom={custom}
        bill={bill}
        numPeople={numPeople}
        tipAmount={tipAmount}
        tipTotalPerPerson={tipTotalPerPerson}
        resetStates={resetStates}
      />
    </section>
  );
};

export default TipContainer;
