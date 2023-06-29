/* eslint-disable react/prop-types */
const TipAmount = ({ tipAmount, tipTotalPerPerson }) => {
  return (
    <section className="tip-amount-container">
      <div className="tip-amount_1">
        <div className="tip-amount_2">
          <p>
            Tip Amount
            <br />
            <span> / person</span>
          </p>
        </div>
        <p className="tip-amount_3">{tipAmount ? `$${tipAmount}` : "$0.00"}</p>
      </div>
      <div className="tip-total_1">
        <div className="tip-total_2">
          <p>
            Total
            <br />
            <span> / person</span>
          </p>
        </div>
        <p className="tip-total_3">{tipTotalPerPerson ? `$${tipTotalPerPerson}` : "$0.00"}</p>
      </div>
      <button className="reset">reset</button>
    </section>
  );
};

export default TipAmount;
