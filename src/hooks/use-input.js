import { useReducer } from "react"

const initialState = {
    value: '',
    isTouched: false
}

const reducerDispatchFunction = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }

    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true };
    }

    if (action.type === 'RESET') {
        return initialState;
    }

    return initialState;
}

const useInput = (validation) => {
    const [inputState, dispatchInputState] = useReducer(reducerDispatchFunction, initialState);

    const isInputValid = validation(inputState.value);
    const isInputInvalid = !isInputValid && inputState.isTouched;

    const updateInputValue = e => {
        dispatchInputState({ type: "INPUT", value: e.target.value })
        console.log(inputState);
    }

    const onBlur = () => {
        dispatchInputState({ type: "BLUR" })
    }

    const reset = function () {
        dispatchInputState({ type: "RESET" })
    }


    return {
        value: inputState.value,
        updateInputValue,
        onBlur,
        isInputValid,
        isInputInvalid,
        reset
    }
}

export default useInput;