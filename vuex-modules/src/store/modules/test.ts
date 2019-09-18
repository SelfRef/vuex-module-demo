import { VuexModule, Module, Mutation, Action, MutationAction, getModule } from 'vuex-module-decorators';
import store from '@/store';

export interface ITestState {
	testField: string;
	numValue: number;
	apiResponse: object;
	readonly apiResponseString: string;
}

// Dynamic registration (after creating store)
@Module({ dynamic: true, namespaced: true, store, name: 'test' })
class TestModule extends VuexModule implements ITestState {
	public get apiResponseString(): string {
		return JSON.stringify(this.apiResponse);
	}
	public testField: string = 'test data';
	public numValue: number = 0;
	public apiResponse: object = {};

	@Action
	// Action is always Promise, even without async
	public addDefault() {
		// `this` contains all fields of module and object `context`
		this.context.commit('INCREMENT_VALUE');
	}

	@Action
	public async addSome(delta: number) {
		// With payload
		this.context.commit('INCREMENT_VALUE', delta);
	}

	// Define mutation to commit
	@Action({ commit: 'INCREMENT_VALUE' })
	public async substractOne() {
		// Commit mutation with returned payload
		return -1;
	}

	// Define mutated fields
	@MutationAction({ mutate: ['apiResponse'] })
	public async fetchFromApi() {
		// Example data
		const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		// Object with data to mutate fields
		// Must use syntax {field1: data1, field2: data2,...}
		return {
			apiResponse: await response.json()
		};
	}

	@Mutation
	// Have to be synchronous
	private INCREMENT_VALUE(delta: number = 1) {
		this.numValue += delta;
	}
}

export default getModule(TestModule);
