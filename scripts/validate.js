const showErrorMessage = (input, { errorClass, inputErrorClass }) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
    button.classList.add(inactiveButtonClass);
}


const hideErrorMessage = (input, { errorClass, inputErrorClass }) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = ""; 
    error.classList.remove(errorClass);
    error.classList.remove(inputErrorClass);
    button.classList.remove(inactiveButtonClass);
}



const checkInputValidity = (input, settings) => {
    if (input.validity.valid) {
        hideErrorMessage(input, settings);
    } else {
        showErrorMessage(input, settings);
    }
}

const toggleButtonState = (input, button, {inactiveButtonClass, ...settings }) => {
    const isValid = inputs.every(input => input.validity.valid);

    if (isValid) {
        button.classList.remove(inactiveButtonClass);//remove class
    } else {
        button.classList.add(inactiveButtonClass); //remove class
        button.disabled = true;
        //addclass
    }
}

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, ...settings }) => {
    const forms = [...document.querySelectorAll(formSelector)];
    console.log(settings)
    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
        })
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                checkInputValidity(input, settings);
                toggleButtonState(inputs, button, settings);
                })
        })
    })
}


enableValidation({
  formSelector: ".form",
  inputSelector: ".modal__form-control-input",
  submitButtonSelector: ".button",
  inactiveButtonClass: ".button-disabled",
  inputErrorClass: "modal__form-control-input-error",
  errorClass: "popup__error_visible",
});
