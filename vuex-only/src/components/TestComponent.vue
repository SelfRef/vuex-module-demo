<template>
	<div>
		<!-- Get state through getter -->
		<div>Test Field: {{testField}}</div>
		<!-- Get state directly from store module -->
		<div>Counter: {{$store.state.test.numValue}}</div>
		<!-- Take action through method -->
		<button @click="removeOne">-1</button>
		<!-- Take action directly in store module -->
		<button @click="$store.dispatch('test/addSome', 1)">+1</button>
		<div>
			<!-- Action with delay -->
			<button @click="$store.dispatch('test/fetchFromApi')">Fetch from API</button>
		</div>
		<!-- Direct getter access -->
		<div>{{$store.getters['test/apiResponseString']}}</div>
	</div>
</template>

<script>
export default {
	computed: {
		testField() {
			return this.$store.state.test.testField;
		},
	},
	methods: {
		removeOne() {
			this.$store.dispatch('test/addSome', -1);
		}
	}
}
</script>