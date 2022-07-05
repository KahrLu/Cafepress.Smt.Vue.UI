import { useCounterStore } from './modules/counter'

export interface IAppStore {
	counterStore: ReturnType<typeof useCounterStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * register app store
 */
export const registerStore = () => {
	appStore.counterStore = useCounterStore()
}

export default appStore
