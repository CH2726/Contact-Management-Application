const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacs: []
		},
		actions: {
			loadContact() {
				fetch(url + "agenda/the_plug")
					.then(response => response.json())
					.then(response => response.json())
					.then(result => {
						console.log("Get Contact", result), setStore({ contacts: result });
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
