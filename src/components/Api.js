import { nameSelector, titleSelector } from "../index.js";
import { userInfo } from "../components/UserInfo";

class Api {
	constructor(baseUrl, headers) {
		this.url = baseUrl;
		this.headers = headers;
	}

	getInitialCards() {
		return fetch(`${this.url}/cards`, {
			headers: { authorization: "eb3d74ef-4bef-4682-9577-7a37c5b0009b" },
		}).then((res) => {
			if (res.ok) {
				return res.json();
			}
			// if the server returns an error, reject the promise
			return Promise.reject(`Error: ${res.status}`);
		});
	}

	setUserInfo(item) {
		return (
			fetch(`${this.url}/11/users/me`,
			{
				method: "PATCH",
				headers: {
					authorization: "eb3d74ef-4bef-4682-9577-7a37c5b0009b",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: item.userInfo.name,
					title: item.userInfo.title,
				}),
			}
		)   
        )
    };
    
    addCard() {
        return fetch(`${this.url}/cards`,
        {
            method: "PATCH",
            headers: {
                authorization: "eb3d74ef-4bef-4682-9577-7a37c5b0009b",
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
			if (res.ok) {
				return res.json();
			}
			// if the server returns an error, reject the promise
			return Promise.reject(`Error: ${res.status}`);
    }

	// catch() {
	// 	api.getInitialCards()
	// 		.then((result) => {
	// 			// process the result
	// 		})
	// 		.catch((err) => {
	// 			console.log(err); // log the error to the console
	// 		});
	// }
}

export default Api;
