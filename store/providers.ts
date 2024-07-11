import {defineStore} from 'pinia'

interface Provider {
    id: string,
    label: string,
    children?: Provider | null
}

export const providersStore = defineStore('providers', {
    state: () => ({
        providers: [
            {
                id: 'MEGA',
                label: 'Мегамаркет',
            }, {
                id: 'YANDEX',
                label: 'Яндекс.Маркет',
            }, {
                id: 'OZON',
                label: 'Ozon',
            }, {
                id: 'WB',
                label: 'Wildberries',
            }
        ] as Provider[]
    }),

    actions: {
        fetchProviders() {
            return this.providers
        }
    },

    getters: {},
})