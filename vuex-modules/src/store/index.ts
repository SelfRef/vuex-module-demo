import Vue from 'vue';
import Vuex from 'vuex';

import { ITestState } from './modules/test';

Vue.use(Vuex);

export interface IRootState {
	test: ITestState;
}

export default new Vuex.Store<IRootState>({});
