import { useState, useEffect } from "react";

export const useHandleTips = () => {
  const [active, setActive] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [custom, setCustom] = useState(null);
  const [bill, setBill] = useState(null);
  const [numPeople, setNumPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [tipTotalPerPerson, setTipTotalPerPerson] = useState(null);

  const handleBill = (e) => {
    restrictToNumbers(e);
    if (parseInt(e.target.value) <= 0) {
      console.log("Can't be 0");
    } else {
      setBill(e.target.value);
    }
  };

  const handleSelectTip = (e) => {
    if (e.target.matches(".percentage-tip")) {
      setActive(true);
      setActiveButton(e.target.value);
    }
    if (e.target.matches(".custom-tip")) {
      setActiveButton(null);
    }
  };

  const handleCustomTip = (e) => {
    if (parseInt(e.target.value) <= 0) {
      console.log("Can't be 0");
    }
    setCustom(e.target.value);
  };

  const handleNumPeople = (e) => {
    restrictToNumbers(e);
    if (parseInt(e.target.value) <= 0) {
      console.log("Can't be 0");
    } else {
      setNumPeople(e.target.value);
    }
  };

  useEffect(() => {
    if ((activeButton || custom) && bill && numPeople) {
      let tipAmount =
        (bill *
          (activeButton
            ? parseFloat(`0.${activeButton}`)
            : parseFloat(`0.${custom}`))) /
        numPeople;
      setTipAmount(parseFloat(tipAmount.toFixed(2)));
      let tipTotalPerPerson =
        parseFloat(tipAmount.toFixed(2)) + parseFloat(bill) / numPeople;
      setTipTotalPerPerson(parseFloat(tipTotalPerPerson.toFixed(2)));
    }
  }, [activeButton, custom, bill, numPeople]);

  return {
    active,
    activeButton,
    custom,
    handleSelectTip,
    handleCustomTip,
    handleBill,
    handleNumPeople,
    tipAmount,
    tipTotalPerPerson,
  };
};

export const restrictToNumbers = (event) => {
  const input = event.target;
  let inputValue = input.value;

  // Eliminar cualquier carácter que no sea un número o un punto decimal
  inputValue = inputValue.replace(/[^0-9.]/g, "");

  // Validar que solo haya un punto decimal
  const decimalCount = inputValue.split(".").length - 1;
  if (decimalCount > 1) {
    // Si hay más de un punto decimal, eliminar los extras
    inputValue = inputValue.replace(/\.+$/, "");
  }

  // Actualizar el valor del campo de entrada
  input.value = inputValue;
};
