import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isTenChars = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    note: true,
    phonenumber: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phonenumberInputRef = useRef();
  const noteInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhonenumber = phonenumberInputRef.current.value;
    const enteredNote = noteInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredNoteIsValid = !isEmpty(enteredNote);
    const enteredPhonenumberIsValid = isTenChars(enteredPhonenumber);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      note: enteredNoteIsValid,
      phonenumber: enteredPhonenumberIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredNoteIsValid &&
      enteredPhonenumberIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      note: enteredNote,
      phonenumber: enteredPhonenumber,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? '' : classes.invalid
  }`;
  const phonenumberControlClasses = `${classes.control} ${
    formInputsValidity.phonenumber ? '' : classes.invalid
  }`;
  const noteControlClasses = `${classes.control} ${
    formInputsValidity.note ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>T??n c???a b???n</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Vui l??ng ??i???n t??n!</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor='street'>?????a ch???</label>
        <input type='text' id='street' ref={addressInputRef} />
        {!formInputsValidity.address && <p>Vui l??ng ??i???n ?????a ch???!</p>}
      </div>
      <div className={phonenumberControlClasses}>
        <label htmlFor='postal'>S??? ??i???n tho???i</label>
        <input type='text' id='postal' ref={phonenumberInputRef} />
        {!formInputsValidity.phonenumber && (
          <p>Vui l??ng ??i???n s??? ??i???n tho???i (10 s???)!</p>
        )}
      </div>
      <div className={noteControlClasses}>
        <label htmlFor='city'>L??u ??</label>
        <input type='text' id='city' ref={noteInputRef} />
        {/* {!formInputsValidity.note && <p>Please enter a valid city!</p>} */}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          H???y b???
        </button>
        <button className={classes.submit}>X??c nh???n</button>
      </div>
    </form>
  );
};

export default Checkout;