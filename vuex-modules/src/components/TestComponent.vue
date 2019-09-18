<template>
	<div>
		<!-- Get state through getter -->
		<div>Test Field: {{testField}}</div>
		<!-- Get state directly from store module -->
		<div>Counter: {{testModule.numValue}}</div>
		<!-- Take action through method -->
		<button @click="removeOne">-1</button>
		<!-- Take action directly in store module -->
		<button @click="testModule.addSome(1)">+1</button>
		<div>
			<!-- Action with delay -->
			<button @click="testModule.fetchFromApi">Fetch from API</button>
		</div>
		<!-- Direct getter access -->
		<div>{{testModule.apiResponseString}}</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import TestModule from '@/store/modules/test';

@Component
export default class TestComponent extends Vue {

	private get testField(): string {
		return TestModule.testField;
	}

	private get testModule() {
		return TestModule;
	}

	private removeOne() {
		TestModule.addSome(-1);
	}
}
</script>