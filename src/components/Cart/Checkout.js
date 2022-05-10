import { useEffect, useState } from "react";
import { useRef } from "react";
import classes from "./Checkout.module.css";
const isEmpty = (value) => value.length === 0;
const isFiveChar = (value) => value.length === 5;
const Checkout = (props) => {
  const [applyEffect, setApplyEffect] = useState(false);
  const [formValidity, setFormValidity] = useState({
    nameValid: true,
    streetValid: true,
    postalCodeValid: true,
    cityValid: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  useEffect(() => {
    setApplyEffect(true);
  }, []);
  let clas = `${classes.content} ${applyEffect ? props.className : ""}`;
  const confirmHandler = (event) => {
    event.preventDefault();
    const nameIsValid = !isEmpty(nameInputRef.current.value);
    const streetIsValid = !isEmpty(streetInputRef.current.value);
    const postalCodeIsValid =
      !isEmpty(postalCodeInputRef.current.value) &&
      isFiveChar(postalCodeInputRef.current.value);
    const cityIsValid = !isEmpty(cityInputRef.current.value);
    setFormValidity({
      nameValid: nameIsValid,
      streetValid: streetIsValid,
      postalCodeValid: postalCodeIsValid,
      cityValid: cityIsValid,
    });
    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) return;
    props.onConfirm({
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      postalCode: postalCodeInputRef.current.value,
      city: cityInputRef.current.value,
    });
  };

  const classesForNameInput = `${classes.control} ${
    !formValidity.nameValid ? classes.invalid : ""
  }`;
  const classesForStreetInput = `${classes.control} ${
    !formValidity.streetValid ? classes.invalid : ""
  }`;
  const classesForPostalCodeInput = `${classes.control} ${
    !formValidity.postalCodeValid ? classes.invalid : ""
  }`;
  const classesForCityInput = `${classes.control} ${
    !formValidity.cityValid ? classes.invalid : ""
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={clas}>
        <div className={classesForNameInput}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formValidity.nameValid && (
            <p className={classes["error_message"]}>
              Please Enter Valid Name...
            </p>
          )}
        </div>
        <div className={classesForStreetInput}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formValidity.streetValid && (
            <p className={classes["error_message"]}>
              Please Enter Valid Street...
            </p>
          )}
        </div>
        <div className={classesForPostalCodeInput}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalCodeInputRef} />
          {!formValidity.postalCodeValid && (
            <p className={classes["error_message"]}>
              Please Enter Valid Postalcode (5 characters only)...
            </p>
          )}
        </div>
        <div className={classesForCityInput}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formValidity.cityValid && (
            <p className={classes["error_message"]}>
              Please Enter Valid City...
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
