/** @format */

//** @format */

import Popup from "./Popup";

const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__job");
const nameInput = document.forms.profile.elements.name;
const titleInput = document.forms.profile.elements.title;

class PopupWithForm extends Popup {
	constructor(submitForm, popupSelector) {
		super(popupSelector);
		this._submitForm = submitForm;
		this._popupForm = this._popupElement.querySelector(".form");
	}

	_getInputEditValues(data) {
		this._inputSource = this._popupForm.querySelectorAll(".modal__form-control-input");
		this._inputValues = {};
		this._inputSource.forEach((input) => (this._inputValues[input.name] = input.value));
		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._submitForm(this._getInputEditValues());
			this.close();
			// popupForm.close();
		});
	}
}
export default PopupWithForm;
