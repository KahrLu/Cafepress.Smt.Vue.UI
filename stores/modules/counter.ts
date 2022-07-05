import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useCounterStore = defineStore(
	'counterStore',
	() => {
		const state = reactive({
			count: 0
		})

		function increment() {
			state.count++
		}

		function reset() {
			state.count = 0
		}

    return {...toRefs(state),increment, reset}
	},
	{ persist: true }
)
