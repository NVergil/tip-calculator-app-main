/* eslint-disable react/prop-types */
import { ReactComponent as Dollar } from "../assets/icon-dollar.svg";
import { ReactComponent as Person } from "../assets/icon-person.svg";

const TipSelect = ({
  active,
  activeButton,
  handleSelectTip,
  handleCustomTip,
  handleBill,
  restrictToNumbers,
  handleNumPeople,
  billError,
  customError,
  numPeopleError,
}) => {
  return (
    <section className="tip-select-container">
      <div className="bill-container">
        <label htmlFor="bill">Bill</label>
        {billError && (
        <label htmlFor="bill" className={billError ? "labelMessageError" : ""}>{billError}</label>
        )}
        <div className="input-container">
          <input
            id="bill"
            type="text"
            className={`bill_1 ${billError ? "inputError" : ""}`}
            placeholder="0"
            onInput={handleBill}
          />
          <Dollar />
        </div>
      </div>
      <label htmlFor="custom-tip" className="select-tip">
        Select Tip %
      </label>
      {customError && (
        <label htmlFor="custom-tip" className={customError ? "labelMessageError" : ""}>{customError}</label>
        )}
      <div className="buttons-tip" onClick={handleSelectTip}>
        <button
          className={`percentage-tip ${
            activeButton === "05" && active ? "active" : ""
          }`}
          value="05"
        >
          5%
        </button>
        <button
          className={`percentage-tip ${
            activeButton === "10" && active ? "active" : ""
          }`}
          value="10"
        >
          10%
        </button>
        <button
          className={`percentage-tip ${
            activeButton === "15" && active ? "active" : ""
          }`}
          value="15"
        >
          15%
        </button>
        <button
          className={`percentage-tip ${
            activeButton === "25" && active ? "active" : ""
          }`}
          value="25"
        >
          25%
        </button>
        <button
          className={`percentage-tip ${
            activeButton === "50" && active ? "active" : ""
          }`}
          value="50"
        >
          50%
        </button>
        <input
          id="custom-tip"
          type="text"
          className={`custom-tip ${customError ? "inputError" : ""}`}
          placeholder="Custom"
          onInput={(e) => {
            restrictToNumbers(e);
            handleCustomTip(e);
          }}
        />
      </div>
      <div className="num-people-container">
        <label htmlFor="num-people" className="num-people">
          Number of People
        </label>
        {numPeopleError && (
        <label htmlFor="num-people" className={numPeopleError ? "labelMessageError" : ""}>{numPeopleError}</label>
        )}
        <div className="input-container">
          <input
            id="num-people"
            type="text"
            className={`num-people_1 ${numPeopleError ? "inputError" : ""}`}
            placeholder="0"
            onInput={handleNumPeople}
          />
          <Person />
        </div>
      </div>
    </section>
  );
};

export default TipSelect;
