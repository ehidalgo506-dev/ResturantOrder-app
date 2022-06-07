import React from "react"
import useInput from "../../hooks/use-input";
import classes from './ShippingForm.module.css'

const ShippingForm = (props) => {
    const { value: nameValue, updateInputValue: updateNameValue, onBlur: nameOnBlur, isInputValid: nameIsInputValid, isInputInvalid: nameIsInputInvalid, reset: resetName } = useInput(value => value.trim() !== '');

    const { value: streetValue, updateInputValue: updateStreetValue, onBlur: streetOnBlur, isInputValid: streetIsInputValid, isInputInvalid: streetIsInputInvalid, reset: resetStreet } = useInput(value => value.trim() !== '')

    const { value: codeValue, updateInputValue: updateCodeValue, onBlur: codeOnBlur, isInputValid: codeIsInputValid, isInputInvalid: codeIsInputInvalid, reset: resetPostal } = useInput(value => value.trim() !== '')

    const { value: cityValue, updateInputValue: updateCityValue, onBlur: cityOnBlur, isInputValid: cityIsInputValid, isInputInvalid: cityIsInputInvalid, reset: resetCity } = useInput(value => value.trim() !== '')

    const nameInvalidClass = nameIsInputInvalid ? `${classes.error}` : "";
    const streetInvalidClass = streetIsInputInvalid ? `${classes.error}` : "";
    const postalInvalidClass = codeIsInputInvalid ? `${classes.error}` : '';
    const cityInvalidClass = cityIsInputInvalid ? `${classes.error}` : '';

    const isFormValid = (nameIsInputValid && streetIsInputValid && codeIsInputValid && cityIsInputValid);

    const buttonDisabledClass = isFormValid ? '' : `${classes.disabled}`

    const onConfirmHandler = (e) => {
        e.preventDefault()
        resetName();
        resetStreet();
        resetPostal();
        resetCity();

        const userData = {
            name: nameValue,
            street: streetValue,
            postalCode: codeValue,
            city: cityValue
        }

        props.onConfirm(userData);
    }


    return (
        <form className={classes.form}>
            <div className={classes['form-control']}>
                <label htmlFor='name'>Your Name</label>
                <input type="text" name='Name' className={`${nameInvalidClass}`} id='name' value={nameValue} onChange={updateNameValue} onBlur={nameOnBlur} />
                {nameIsInputInvalid && <p className={nameInvalidClass}>Please enter your name</p>}
            </div>
            <div className={classes['form-control']}>
                <label htmlFor='street'>Street</label>
                <input type="text" name='street' className={`${streetInvalidClass}`} id='street' value={streetValue} onChange={updateStreetValue} onBlur={streetOnBlur} />
                {streetIsInputInvalid && <p className={streetInvalidClass}>Please enter your Street name</p>}
            </div>
            <div className={classes['form-control']}>
                <label htmlFor='postal'>Postal Code</label>
                <input type="text" name='postal code' className={`${postalInvalidClass}`} id='postal' value={codeValue} onChange={updateCodeValue} onBlur={codeOnBlur} />
                {codeIsInputInvalid && <p className={postalInvalidClass}>Please enter Postal Code </p>}
            </div>
            <div className={classes['form-control']}>
                <label htmlFor='city'>City</label>
                <input type="text" name='city' className={`${cityInvalidClass}`} id='city' value={cityValue} onChange={updateCityValue} onBlur={cityOnBlur} />
                {cityIsInputInvalid && <p className={cityInvalidClass}>Please enter your city name</p>}
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Cancel
                </button>
                <button className={`${classes.button} ${buttonDisabledClass}`} disabled={!isFormValid} onClick={onConfirmHandler}>Confirm</button>
            </div>
        </form>)
}

export default ShippingForm;