import { restrictToNumbers, useHandleTips } from "../utils";

import TipSelect from "../components/TipSelect";
import TipAmount from "../components/TipAmount";

const TipContainer = () => {
  const {
    active,
    activeButton,
    handleSelectTip,
    handleCustomTip,
    handleBill,
    handleNumPeople,
    tipAmount,
    tipTotalPerPerson
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
      />
      <TipAmount tipAmount={tipAmount} tipTotalPerPerson={tipTotalPerPerson} />
    </section>
  );
};

export default TipContainer;
