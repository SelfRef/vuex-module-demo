export default {
	namespaced: true,
	state: {
		testField: 'test data',
		numValue: 0,
		apiResponse: {},
	},
	getters: {
		apiResponseString(state) {
			return JSON.stringify(state.apiResponse);
		}
	},
	mutations: {
		// Have to be synchronous
		incrementValue(state, delta = 1) {
			state.numValue += delta;
		},
		apiResponse(state, json) {
			state.apiResponse = json;
		}

	},
	actions: {
		async addDefault({commit}) {
			// `this` contains all fields of module and object `context`
			commit('incrementValue');
		},
		async addSome({commit}, delta) {
			// With payload
			commit('incrementValue', delta);
		},
		// Define mutation to commit
		async substractOne({commit}) {
			commit('incrementValue', -1);
		},
		async fetchFromApi({commit}) {
			// Example data
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
			const json = await response.json();
			commit('apiResponse', json);
		}
	}
}